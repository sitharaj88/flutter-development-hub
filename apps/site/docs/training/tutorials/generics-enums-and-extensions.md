---
title: Generics, Enums, and Extensions
description: A detailed tutorial on Dart language features that improve type safety and expressiveness.
---

# Generics, Enums, and Extensions

These features help Dart code become more expressive and reusable once the basics are stable.

## Lesson objective

By the end of this lesson, a learner should be able to:

- explain what problem generics solve
- use enums instead of fragile string values
- write a small extension method
- recognize where these features improve code clarity

## Generics

- help functions and classes work with different types safely
- appear often in collections and reusable APIs

## Plain-language explanation for generics

Generics answer this question:

`How can one class or function work with different data types safely?`

Instead of writing a separate version for every type, Dart allows a placeholder type such as `T`.

### Example

```dart
class ResponseBox<T> {
  final T data;

  ResponseBox(this.data);
}
```

## Runnable generic example

```dart
class Box<T> {
  final T value;

  Box(this.value);
}

void main() {
  final nameBox = Box<String>('Sitharaj');
  final countBox = Box<int>(3);

  print(nameBox.value);
  print(countBox.value);
}
```

## Expected output

```text
Sitharaj
3
```

## Why this is useful

- one class works with many types
- type safety is preserved
- the code stays reusable without becoming vague

## Enums

- represent a fixed set of known values
- useful for status, role, theme mode, or loading state

## Plain-language explanation for enums

Enums are best explained as:

- a small fixed list of allowed values

This is much safer than random strings.

### Example

```dart
enum LoadState {
  loading,
  success,
  failure,
}
```

## Runnable enum example

```dart
enum EnrollmentStatus {
  pending,
  confirmed,
  cancelled,
}

void main() {
  final status = EnrollmentStatus.confirmed;

  if (status == EnrollmentStatus.confirmed) {
    print('Seat confirmed');
  }
}
```

## Expected output

```text
Seat confirmed
```

## Why enums matter

Without an enum, learners may write:

```dart
const status = 'confirmd';
```

That typo can cause bugs.

With enums, the allowed values are controlled and easier to read.

## Extensions

- let you add helper behavior to existing types
- useful for formatting and small convenience logic

## Plain-language explanation for extensions

Extensions let you attach a small helper to an existing type without modifying that original type.

This is useful for:

- string formatting
- date labels
- small display helpers

### Example

```dart
extension TitleCase on String {
  String titleLabel() {
    if (isEmpty) return this;
    return this[0].toUpperCase() + substring(1);
  }
}
```

## Runnable extension example

```dart
extension PriceFormatter on double {
  String asCurrency() {
    return 'Rs. ${toStringAsFixed(2)}';
  }
}

void main() {
  final price = 4999.0;
  print(price.asCurrency());
}
```

## Expected output

```text
Rs. 4999.00
```

## Why these matter

- they improve readability
- they reduce fragile string-based logic
- they make app models and helpers cleaner

## A realistic combined example

```dart
enum LoadState {
  loading,
  success,
  failure,
}

class ApiResponse<T> {
  final LoadState state;
  final T? data;

  ApiResponse({
    required this.state,
    this.data,
  });
}
```

This is a strong teaching example because it combines:

- enum for fixed status values
- generic type for reusable data handling
- a realistic app-style model

## Practice ideas

1. Replace string status values with an enum.
2. Create a generic wrapper type for loading data.
3. Write a small extension that formats a string for display.

## Guided exercise

Build:

- an enum called `UserRole` with `student`, `trainer`, and `admin`
- a generic class called `ResultBox<T>`
- an extension on `String` that adds `greetingLabel()`

Then create a small `main()` function that uses all three.

## Common mistakes

- introducing generics before the learner understands the problem they solve
- keeping status values as random strings instead of fixed enums
- writing extensions that hide logic in surprising places

## Review questions

- Why are enums usually better than string status values?
- What does `T` represent in a generic class?
- When should an extension stay small and predictable?

## Short answers

- enums are better because they restrict values and reduce typo-based bugs
- `T` represents a type placeholder that is decided when the class or function is used
- an extension should stay small when it adds convenience without hiding important logic
