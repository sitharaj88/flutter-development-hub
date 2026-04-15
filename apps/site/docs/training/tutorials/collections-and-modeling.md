---
title: Collections and Modeling
description: A deeper tutorial on structuring application data with lists, maps, and model classes.
---

# Collections and Modeling

Apps are full of repeated and structured data. Collections and models teach learners how to represent that data clearly.

## What to cover

- lists for ordered repeated values
- sets when uniqueness matters
- maps for key-value structures
- classes for stronger app models

## Practical comparison

- a `List` works well for products in a catalog
- a `Set` works well for unique selected tags
- a `Map` works well for quick key-value lookup
- a class works well when the same data shape appears across many screens and features

## Why modeling matters

- UI becomes simpler when data has a clear shape
- API integration becomes easier when raw JSON is transformed into readable models
- team code becomes easier to reason about when entities are explicit

## Example

```dart
class UserProfile {
  final String id;
  final String name;
  final String email;

  UserProfile({
    required this.id,
    required this.name,
    required this.email,
  });
}
```

## Collections in practice

```dart
final products = ['Phone', 'Tablet', 'Watch'];
final selectedTags = <String>{'flutter', 'mobile'};
final settings = {
  'theme': 'light',
  'language': 'en',
};
```

This example helps learners compare three structures with different purposes.

## Teaching outcome

- learners understand when to keep data simple and when to introduce stronger structure

## Good training examples

- product catalog
- user profile
- order history
- dashboard cards with different data points

## Practice ideas

1. Choose between `List`, `Set`, and `Map` for three app scenarios.
2. Model a `Product` class with title, price, and stock status.
3. Store and display a small list of user names.

## Common mistakes

- using a map for everything, even when the data shape is stable
- forgetting why a set prevents duplicates
- storing app entities too loosely and making later UI code harder
