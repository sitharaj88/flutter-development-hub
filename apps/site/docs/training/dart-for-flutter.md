---
title: Dart for Flutter
description: Master Dart programming for Flutter development — types, null safety, async, classes, and real-world data modeling.
keywords: [Dart, Dart tutorial, Dart for Flutter, null safety, async, classes, Dart programming]
---

# Dart for Flutter

Dart is not a side topic to rush through before the "real" Flutter work begins. **Dart is the thinking layer behind Flutter.** Every widget, every state change, every API call, every model — it's all Dart. Teach it well, and Flutter stops feeling magical and starts feeling understandable.

:::info Teaching philosophy
Every Dart topic should answer a real question: *How do I store values? How do I reuse logic? How do I model app data? How do I handle data that arrives later?* When Dart is taught this way, learners enter Flutter with their attention on UI and behavior, not language confusion.
:::

## What learners should achieve

After this track, learners should be able to:

- Read most beginner-to-intermediate Dart code **without panic**
- Write console programs and logic exercises **with confidence**
- Create **model classes** for app data
- Use **null safety** correctly and understand why it exists
- Write helper functions, validation logic, and formatting utilities
- Work with lists, maps, JSON, and **asynchronous operations**
- Enter Flutter topics focused on **UI and app behavior**, not basic language confusion

## Core topics with examples

### Variables, final, and const

```dart
void main() {
  var count = 0;                    // Mutable — can change
  final createdAt = DateTime.now(); // Set once at runtime
  const appTitle = 'Flutter Hub';   // Compile-time constant

  count++;                          // ✅ Allowed
  // createdAt = DateTime.now();    // ❌ Error: final can't be reassigned
  // appTitle = 'New Title';        // ❌ Error: const can't be reassigned
}
```

:::tip When to use what
- Use `var` when the value will change (counters, form inputs)
- Use `final` for values set once at runtime (API responses, timestamps)
- Use `const` for compile-time constants (config values, fixed strings)
:::

### Null safety

Dart's null safety system prevents one of programming's most common bugs:

```dart
String greet(String? name) {
  // name could be null — Dart forces you to handle it
  if (name == null || name.isEmpty) {
    return 'Hello, Guest!';
  }
  return 'Hello, $name!';
}

// Null-aware operators
String displayName = user.name ?? 'Anonymous';
int length = text?.length ?? 0;
```

### Collections

```dart
// Lists — ordered, indexed
final scores = [95, 87, 92, 78];
final topScores = scores.where((s) => s >= 90).toList();
final average = scores.reduce((a, b) => a + b) / scores.length;

// Maps — key-value pairs
final settings = <String, dynamic>{
  'theme': 'dark',
  'fontSize': 16,
  'notifications': true,
};

// Sets — unique values
final tags = {'flutter', 'dart', 'mobile', 'flutter'}; // Only 3 items
```

### Classes and constructors

```dart
class Task {
  final String id;
  final String title;
  final bool isCompleted;
  final DateTime createdAt;

  const Task({
    required this.id,
    required this.title,
    this.isCompleted = false,
    required this.createdAt,
  });

  Task copyWith({String? title, bool? isCompleted}) {
    return Task(
      id: id,
      title: title ?? this.title,
      isCompleted: isCompleted ?? this.isCompleted,
      createdAt: createdAt,
    );
  }

  @override
  String toString() => 'Task($title, completed: $isCompleted)';
}
```

:::caution Common mistake
Beginners often make all fields mutable. In Flutter, **immutable models** (using `final` fields and `copyWith`) are the standard pattern because they work better with state management and widget rebuilds.
:::

### Async programming

```dart
Future<User> fetchUser(String id) async {
  try {
    final response = await http.get(Uri.parse('$baseUrl/users/$id'));

    if (response.statusCode == 200) {
      final json = jsonDecode(response.body) as Map<String, dynamic>;
      return User.fromJson(json);
    } else {
      throw HttpException('Failed to load user: ${response.statusCode}');
    }
  } catch (e) {
    throw Exception('Network error: $e');
  }
}
```

### JSON modeling

```dart
class Product {
  final String id;
  final String name;
  final double price;
  final String? imageUrl;

  const Product({
    required this.id,
    required this.name,
    required this.price,
    this.imageUrl,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'] as String,
      name: json['name'] as String,
      price: (json['price'] as num).toDouble(),
      imageUrl: json['image_url'] as String?,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'price': price,
    'image_url': imageUrl,
  };
}
```

## Teaching rhythm

Good Dart teaching follows this pattern for every concept:

1. **Explain** the idea in plain language
2. **Show** a tiny example (3–5 lines)
3. **Show** a real app-style example
4. **Ask** the learner to predict the output
5. **Run** the code and discuss the result
6. **Exercise** — a short practice before moving on

This pattern works because beginners don't need more syntax. They need more **clarity**.

## Suggested learning order

| Order | Topic | Why this order |
|-------|-------|---------------|
| 1 | Variables, types, operators | Foundation for everything |
| 2 | Conditions, loops, functions | Control flow and reuse |
| 3 | Collections (List, Map, Set) | Working with real data |
| 4 | Classes and constructors | Modeling app entities |
| 5 | Null safety | Preventing common bugs |
| 6 | Async, Future, await | Handling network and delayed data |
| 7 | Exceptions and error handling | Robust code habits |
| 8 | JSON and serialization | API data modeling |

## Common learner pain points

| Pain point | Solution |
|-----------|----------|
| Confusion between `var`, `final`, `const` | Teach with real app scenarios |
| Not understanding null safety | Show the bugs it prevents |
| Mixing UI code and logic | Introduce separation early |
| Difficulty reading async code | Step through execution visually |
| Copying code without understanding | Use predict-then-run exercises |

## Next steps

- [**Dart Track Overview**](/docs/training/tutorials/dart-track-overview) — Start the deep-dive tutorials
- [**Variables, Final, Const**](/docs/training/tutorials/variables-final-const) — First tutorial in the Dart track
- [**Flutter Core**](/docs/training/flutter-core) — Apply Dart skills in Flutter UI
