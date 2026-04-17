---
title: State and Architecture
description: Master app state management and scalable architecture patterns in Flutter — from local state to feature-based structure.
keywords: [Flutter state management, Flutter architecture, Riverpod, Bloc, Provider, feature structure]
---

# State and Architecture

This is where training moves from **"can build screens"** to **"can build apps responsibly."** Poor state choices create poor architecture, and weak architecture makes state harder to manage. That's why they're taught together.

:::info Prerequisites
Learners should already be comfortable with StatefulWidget, basic navigation, and forms before starting this module.
:::

## What is "state"?

Before discussing libraries or patterns, understand what state actually is:

| Example | Type | Where it lives |
|---------|------|----------------|
| Current text in a form field | Local UI state | Inside the widget |
| Selected tab index | Local UI state | Inside the widget |
| Logged-in user | App-wide state | Shared across screens |
| Shopping cart contents | Feature state | Shared within a feature |
| API loading status | Async state | Repository/provider layer |

## Teaching progression

### 1. Local widget state

```dart
class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count', style: Theme.of(context).textTheme.headlineMedium),
        ElevatedButton(
          onPressed: () => setState(() => _count++),
          child: const Text('Increment'),
        ),
      ],
    );
  }
}
```

### 2. Lifted / shared state

When multiple widgets need the same data, **lift state up** to a common ancestor:

```dart
// Parent owns the state
class ShoppingPage extends StatefulWidget {
  @override
  State<ShoppingPage> createState() => _ShoppingPageState();
}

class _ShoppingPageState extends State<ShoppingPage> {
  final List<Product> _cart = [];

  void _addToCart(Product product) {
    setState(() => _cart.add(product));
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ProductList(onAdd: _addToCart),    // Child can add
        CartSummary(items: _cart),          // Child can read
      ],
    );
  }
}
```

### 3. Separation of UI and logic

```dart
// ✅ Business logic in a separate class
class TodoController {
  final List<Todo> _todos = [];
  List<Todo> get todos => List.unmodifiable(_todos);

  void add(String title) {
    _todos.add(Todo(id: DateTime.now().toString(), title: title));
  }

  void toggleComplete(String id) {
    final index = _todos.indexWhere((t) => t.id == id);
    if (index != -1) {
      _todos[index] = _todos[index].copyWith(
        isCompleted: !_todos[index].isCompleted,
      );
    }
  }

  int get completedCount => _todos.where((t) => t.isCompleted).length;
}
```

### 4. Feature-based structure

![Feature-Based Project Structure — auth, products, cart with data/domain/presentation layers](/img/diagrams/feature-structure.svg)

### 5. Repository pattern

```dart
abstract class ProductRepository {
  Future<List<Product>> getAll();
  Future<Product> getById(String id);
}

class ApiProductRepository implements ProductRepository {
  final http.Client _client;

  ApiProductRepository(this._client);

  @override
  Future<List<Product>> getAll() async {
    final response = await _client.get(Uri.parse('$baseUrl/products'));
    final list = jsonDecode(response.body) as List;
    return list.map((json) => Product.fromJson(json)).toList();
  }

  @override
  Future<Product> getById(String id) async {
    final response = await _client.get(Uri.parse('$baseUrl/products/$id'));
    return Product.fromJson(jsonDecode(response.body));
  }
}
```

## State management options

| Solution | Complexity | Best for | Status (2026) |
|----------|-----------|----------|--------------|
| `setState` | Low | Simple local UI state | Always valid |
| `InheritedWidget` | Medium | Understanding how Flutter state works | Foundational |
| **Riverpod** | Medium | Recommended default — strong typing, code-gen, testable | **Recommended** |
| **Bloc/Cubit** | Medium–High | Enterprise apps, strict event-driven patterns | Mature alternative |
| Provider | Medium | Legacy — still works but Riverpod supersedes it | Maintenance mode |

### Riverpod — the recommended approach

Riverpod with code generation (`riverpod_generator`) is the modern standard:

```dart
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'products_provider.g.dart';

// Auto-generates the provider — type-safe, testable, cacheable
@riverpod
Future<List<Product>> products(ProductsRef ref) async {
  final repository = ref.watch(productRepositoryProvider);
  return repository.getAll();
}

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

  double get total => state.fold(0.0, (sum, item) => sum + item.totalPrice);
}
```

### Sealed classes for state representation

Use Dart 3 sealed classes to model UI states with compiler-checked exhaustiveness:

```dart
sealed class ProductsState {}
class ProductsLoading extends ProductsState {}
class ProductsLoaded extends ProductsState {
  final List<Product> products;
  ProductsLoaded(this.products);
}
class ProductsError extends ProductsState {
  final String message;
  ProductsError(this.message);
}

// The compiler ensures you handle all states
Widget buildProductList(ProductsState state) => switch (state) {
  ProductsLoading()             => const Center(child: CircularProgressIndicator()),
  ProductsLoaded(:final products) => ListView.builder(
    itemCount: products.length,
    itemBuilder: (_, i) => ProductCard(products[i]),
  ),
  ProductsError(:final message)   => Center(child: Text('Error: $message')),
};
```

:::tip Start simple
Don't introduce Riverpod or Bloc on day one. Start with `setState`, understand why it becomes painful, then introduce solutions that fix the actual problem. But when you're ready for a state solution, Riverpod is the default recommendation.
:::

## Common mistakes

:::caution Beginner traps
- **All logic in one widget** — Screen becomes unmaintainable at 200+ lines
- **API calls in build methods** — Causes infinite rebuild loops
- **Complex patterns too early** — Bloc for a counter app is over-engineering
- **Fancy folder structure, no separation** — Structure without actual logic separation is theater
:::

## Next steps

- [**Backend & Data**](/docs/training/backend-and-data) — APIs, persistence, and data flow
- [**Testing & Release**](/docs/training/testing-and-release) — Verify your architecture works
- [**Engineering Standards**](/docs/resources/engineering-standards) — Project structure conventions
