---
title: Classes and Constructors
description: A detailed tutorial on object-oriented Dart for app modeling.
---

# Classes and Constructors

Dart classes are essential for app modeling. They help learners turn loose values into structured entities.

## Core concepts

- classes and objects
- fields and methods
- constructors
- named constructors
- getters and setters where useful

## Example

```dart
class Product {
  final String id;
  final String title;
  final double price;

  Product({
    required this.id,
    required this.title,
    required this.price,
  });
}
```

## Worked explanation

- the class groups related values together
- the constructor makes object creation clear and explicit
- `required` signals which values must exist for the object to make sense

## Named constructor example

```dart
class Product {
  final String id;
  final String title;
  final double price;

  Product({
    required this.id,
    required this.title,
    required this.price,
  });

  Product.empty()
      : id = '',
        title = '',
        price = 0;
}
```

This is a helpful teaching example because it shows that classes can provide multiple ways to create valid objects.

## Why this matters in apps

- APIs return structured data
- UI screens often need clearly modeled entities
- classes make code more readable than large maps everywhere

## Teaching focus

- model a product, user, or order
- explain why constructors improve clarity
- compare class-based modeling with map-based shortcuts

## Common mistakes

- putting unrelated behavior into the same model
- forgetting to mark required fields clearly
- using maps everywhere instead of introducing a proper class when the structure is stable
- creating constructors that hide too much setup logic too early

## Practice ideas

1. Create a `UserProfile` class with required fields.
2. Add a named constructor for an empty or guest version.
3. Compare a class-based and map-based implementation of the same data.

## Review questions

- Why is a class often clearer than a map for stable app data?
- When is a named constructor useful?
- What makes a model class easier to understand and reuse?
