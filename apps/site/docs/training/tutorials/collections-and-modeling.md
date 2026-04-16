---
title: Collections and Modeling
description: A deeper tutorial on structuring application data with lists, maps, and model classes.
---

# Collections and Modeling

Apps are full of repeated and structured data. Collections and models teach learners how to represent that data clearly.

## Lesson objective

By the end of this lesson, a learner should be able to:

- choose between `List`, `Set`, and `Map` with confidence
- explain why those collection types exist
- read and write small collection examples
- know when raw data should become a proper class

## What to cover

- lists for ordered repeated values
- sets when uniqueness matters
- maps for key-value structures
- classes for stronger app models

## Why this lesson matters

A large number of beginner bugs come from poor data shape decisions:

- storing ordered data in the wrong structure
- using maps for everything
- not realizing duplicate values are a problem
- keeping raw data too loose for too long

When the data shape is wrong, the UI becomes harder, not easier.

## Practical comparison

- a `List` works well for products in a catalog
- a `Set` works well for unique selected tags
- a `Map` works well for quick key-value lookup
- a class works well when the same data shape appears across many screens and features

## Plain-language explanation

Teach the three core collection types like this:

- `List` means "I have many values in order"
- `Set` means "I have unique values only"
- `Map` means "I have values identified by keys"

That explanation is usually easier for beginners than dictionary-style definitions.

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

This class is more useful than a loose map once the same user information starts appearing in multiple places.

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

## Step-by-step example

```dart
void main() {
  final products = ['Phone', 'Tablet', 'Watch'];
  final selectedTags = <String>{'flutter', 'mobile', 'flutter'};
  final settings = {
    'theme': 'light',
    'language': 'en',
  };

  print(products[0]);
  print(selectedTags.length);
  print(settings['theme']);
}
```

## Expected output

```text
Phone
2
light
```

## What this example teaches

- the list keeps all values in order
- the set removes duplicates automatically
- the map returns a value when given a matching key

## Real app example

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

void main() {
  final products = [
    Product(id: 'P1', title: 'Flutter Course', price: 4999),
    Product(id: 'P2', title: 'Mentoring Session', price: 1999),
  ];

  final firstProduct = products.first;
  print(firstProduct.title);
  print(firstProduct.price);
}
```

## Why this example is important

This is the moment where learners see the shift from:

- simple collections of primitive values

to:

- collections of structured objects

That shift is essential in app development.

## When to use each structure

### Use a `List` when

- order matters
- duplicates are allowed
- you want index-based access

### Use a `Set` when

- duplicates should be prevented
- uniqueness matters more than order

### Use a `Map` when

- each value is identified by a key
- lookup by key is important
- the data is still fairly loose or configuration-like

### Use a class when

- the data shape is stable
- the same structure appears repeatedly
- the entity has meaning in the application
- the code becomes hard to read with maps alone

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

## Guided exercise

Choose the best structure for each situation:

1. A list of course modules in order
2. A set of unique selected skills
3. A theme settings object with key-value pairs
4. A reusable course model that appears in many screens

Suggested answers:

1. `List`
2. `Set`
3. `Map`
4. class

## Common mistakes

- using a map for everything, even when the data shape is stable
- forgetting why a set prevents duplicates
- storing app entities too loosely and making later UI code harder

## Mini assignment

Create a mini training catalog:

- a `Course` class with `id`, `title`, and `duration`
- a `List<Course>` with at least three items
- a `Set<String>` for selected course categories
- a `Map<String, String>` for page settings

Then print:

- the first course title
- the number of selected categories
- the current theme setting
