---
title: Generics, Enums, and Extensions
description: A detailed tutorial on Dart language features that improve type safety and expressiveness.
---

# Generics, Enums, and Extensions

These features help Dart code become more expressive and reusable once the basics are stable.

## Generics

- help functions and classes work with different types safely
- appear often in collections and reusable APIs

### Example

```dart
class ResponseBox<T> {
  final T data;

  ResponseBox(this.data);
}
```

## Enums

- represent a fixed set of known values
- useful for status, role, theme mode, or loading state

### Example

```dart
enum LoadState {
  loading,
  success,
  failure,
}
```

## Extensions

- let you add helper behavior to existing types
- useful for formatting and small convenience logic

### Example

```dart
extension TitleCase on String {
  String titleLabel() {
    if (isEmpty) return this;
    return this[0].toUpperCase() + substring(1);
  }
}
```

## Why these matter

- they improve readability
- they reduce fragile string-based logic
- they make app models and helpers cleaner

## Practice ideas

1. Replace string status values with an enum.
2. Create a generic wrapper type for loading data.
3. Write a small extension that formats a string for display.

## Common mistakes

- introducing generics before the learner understands the problem they solve
- keeping status values as random strings instead of fixed enums
- writing extensions that hide logic in surprising places
