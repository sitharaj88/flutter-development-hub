---
title: Dart Collections and Classes
description: Modeling real application data with Dart collections, classes, and modern Dart 3 features.
keywords: [Dart collections, Dart classes, data modeling, lists, maps, Dart 3]
---

# Dart Collections and Classes

This lesson connects programming basics to app development by showing how real app data is stored and modeled.

## Lesson goal

- understand lists, sets, and maps in Dart
- model app data using classes and constructors
- use Dart 3 features (records, sealed classes) for expressive data modeling

## Collections

### Lists — ordered, repeatable values

```dart
final products = ['Laptop', 'Phone', 'Tablet'];
final prices = [999.99, 699.99, 449.99];

// Typed list
final List<String> tags = ['sale', 'new', 'featured'];

// Useful operations
final uppercased = products.map((p) => p.toUpperCase()).toList();
final expensive = prices.where((p) => p > 500).toList();
final total = prices.fold(0.0, (sum, price) => sum + price);
```

### Maps — key-value pairs

```dart
final settings = {
  'theme': 'dark',
  'language': 'en',
  'notifications': 'true',
};

// Access and update
final theme = settings['theme']; // 'dark'
settings['language'] = 'fr';
```

### Sets — unique values only

```dart
final categories = {'electronics', 'clothing', 'food'};
categories.add('electronics'); // No duplicate — still 3 items
```

## Classes — structured data models

```dart
class Product {
  final String id;
  final String name;
  final double price;
  final bool available;

  const Product({
    required this.id,
    required this.name,
    required this.price,
    this.available = true,
  });

  String get displayPrice => '\$${price.toStringAsFixed(2)}';

  @override
  String toString() => '$name ($displayPrice)';
}
```

```dart
// Usage
final laptop = Product(id: '1', name: 'Laptop', price: 999.99);
print(laptop.displayPrice); // $999.99

final products = [
  Product(id: '1', name: 'Laptop', price: 999.99),
  Product(id: '2', name: 'Phone', price: 699.99, available: false),
];

final available = products.where((p) => p.available).toList();
```

## JSON to model conversion

```dart
class User {
  final String name;
  final String email;
  final DateTime joinedAt;

  const User({required this.name, required this.email, required this.joinedAt});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      name: json['name'] as String,
      email: json['email'] as String,
      joinedAt: DateTime.parse(json['joined_at'] as String),
    );
  }

  Map<String, dynamic> toJson() => {
    'name': name,
    'email': email,
    'joined_at': joinedAt.toIso8601String(),
  };
}
```

## Dart 3: Records and sealed classes

```dart
// Records — lightweight tuples
(String, int) parseNameAge(Map<String, dynamic> json) {
  return (json['name'] as String, json['age'] as int);
}

final (name, age) = parseNameAge({'name': 'Alex', 'age': 25});

// Sealed classes — exhaustive state modeling
sealed class Result<T> {}
class Success<T> extends Result<T> { final T data; Success(this.data); }
class Failure<T> extends Result<T> { final String error; Failure(this.error); }

String describe(Result<String> result) => switch (result) {
  Success(:final data) => 'Got: $data',
  Failure(:final error) => 'Error: $error',
};
```

## Practice exercises

1. Create a `Student` class with name, email, and grade — display a list of students
2. Build a `Product` class with `fromJson` and create a list from JSON data
3. Use `.where()`, `.map()`, and `.fold()` to filter, transform, and aggregate a list
4. Model a network response using a sealed `Result` class
