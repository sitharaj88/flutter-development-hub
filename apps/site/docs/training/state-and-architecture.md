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

| Solution | Complexity | Best for |
|----------|-----------|----------|
| `setState` | Low | Simple local UI state |
| `InheritedWidget` | Medium | Understanding how Flutter state works |
| **Provider** | Medium | Small–medium apps, good for learning |
| **Riverpod** | Medium–High | Medium–large apps, strong typing |
| **Bloc/Cubit** | High | Enterprise apps, strict patterns |

:::tip Start simple
Don't introduce Riverpod or Bloc on day one. Start with `setState`, understand why it becomes painful, then introduce solutions that fix the actual problem.
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
