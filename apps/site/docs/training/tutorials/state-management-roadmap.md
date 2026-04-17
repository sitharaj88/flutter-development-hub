---
title: State Management Roadmap
description: A progressive approach to state management in Flutter — from local state to Riverpod.
keywords: [Flutter state management, Riverpod, setState, state architecture, Flutter state]
---

# State Management Roadmap

State management should be taught as a **progression**, not a one-size-fits-all choice.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- explain what state is in practical Flutter terms
- distinguish local state from shared application state
- progress from `setState` to Riverpod confidently
- avoid overengineering state too early

## What is state?

State is **information that can change** while the app is running:

| Example | Scope |
|---------|-------|
| Checkbox checked/unchecked | Local (single widget) |
| Password visibility toggle | Local |
| Selected tab index | Local or shared |
| Logged-in user | Shared (whole app) |
| Shopping cart contents | Shared (multiple screens) |
| API loading/success/error | Shared (feature-level) |

## Stage 1: Local state with `setState`

For simple, widget-scoped UI state:

```dart
class PasswordField extends StatefulWidget {
  const PasswordField({super.key});

  @override
  State<PasswordField> createState() => _PasswordFieldState();
}

class _PasswordFieldState extends State<PasswordField> {
  bool _obscured = true;

  @override
  Widget build(BuildContext context) {
    return TextField(
      obscureText: _obscured,
      decoration: InputDecoration(
        labelText: 'Password',
        suffixIcon: IconButton(
          icon: Icon(_obscured ? Icons.visibility : Icons.visibility_off),
          onPressed: () => setState(() => _obscured = !_obscured),
        ),
      ),
    );
  }
}
```

**When to use:** Toggle visibility, expand/collapse, tab selection — state that only this widget cares about.

## Stage 2: Lifted state

When a parent and multiple children share the same value:

```dart
class FilterableList extends StatefulWidget {
  const FilterableList({super.key});

  @override
  State<FilterableList> createState() => _FilterableListState();
}

class _FilterableListState extends State<FilterableList> {
  String _query = '';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SearchBar(
          onChanged: (value) => setState(() => _query = value),
        ),
        Expanded(
          child: ProductList(query: _query),
        ),
      ],
    );
  }
}
```

**When to use:** Search + list, filters + results — parent owns state, children receive it.

## Stage 3: Riverpod for shared state

When state is needed across multiple screens or features:

```dart
// Define a provider
@riverpod
class Cart extends _$Cart {
  @override
  List<CartItem> build() => [];

  void add(Product product) {
    state = [...state, CartItem(product: product, quantity: 1)];
  }

  void remove(String productId) {
    state = state.where((item) => item.product.id != productId).toList();
  }

  double get total => state.fold(0, (sum, item) => sum + item.price);
}
```

```dart
// Use in any widget
class CartBadge extends ConsumerWidget {
  const CartBadge({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final itemCount = ref.watch(cartProvider).length;

    return Badge(
      label: Text('$itemCount'),
      child: const Icon(Icons.shopping_cart),
    );
  }
}
```

**When to use:** Authentication, cart, theme, any state accessed from multiple screens.

## Stage 4: Sealed classes for complex state

Model explicit state transitions with Dart 3 sealed classes:

```dart
sealed class ProductsState {}
class ProductsLoading extends ProductsState {}
class ProductsLoaded extends ProductsState {
  final List<Product> products;
  ProductsLoaded(this.products);
}
class ProductsEmpty extends ProductsState {}
class ProductsError extends ProductsState {
  final String message;
  ProductsError(this.message);
}
```

```dart
// Exhaustive handling in the UI
Widget build(BuildContext context, WidgetRef ref) {
  final state = ref.watch(productsProvider);

  return switch (state) {
    ProductsLoading()  => const CircularProgressIndicator(),
    ProductsLoaded(:final products) => ProductGrid(products: products),
    ProductsEmpty()    => const Text('No products found'),
    ProductsError(:final message) => ErrorView(message: message),
  };
}
```

## Decision guide

| Situation | Approach |
|-----------|----------|
| Toggle, animation, form field | `setState` |
| Parent + children share one value | Lifted state |
| Multiple screens need same data | Riverpod provider |
| Complex async state (loading/error/success) | Riverpod + sealed class |
| Global app config (theme, locale) | Riverpod provider |

## Common mistakes

- Using Riverpod for a simple toggle that only one widget uses
- Using `setState` for data that three screens need
- Storing both UI state and business state in one provider
- Not handling loading and error states explicitly
- Rebuilding the entire widget tree when only a small piece of state changed

## Practice exercises

1. Build a theme toggle using `setState` — dark/light mode switch
2. Build a search + filtered list using lifted state in a parent widget
3. Convert the search to a Riverpod provider and use it from two screens
4. Model an API fetch with sealed classes: `Loading`, `Success`, `Error`
