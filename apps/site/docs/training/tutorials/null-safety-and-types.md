---
title: Null Safety and Types
description: A deeper tutorial on Dart's type system and why null safety matters in real apps.
---

# Null Safety and Types

Null safety is not just a language feature. It is part of building more predictable applications with fewer runtime surprises.

## Lesson objective

By the end of this lesson, a learner should be able to:

- explain nullable and non-nullable values
- use `?`, `??`, and `?.` safely
- avoid risky null assumptions
- model optional data more realistically

## What learners need to understand

- the difference between nullable and non-nullable values
- why some values are guaranteed and others are optional
- how type discipline makes code easier to trust and maintain

## A simple example

```dart
String? nickname;
String fullName = 'Sitharaj';
```

In this example:

- `nickname` may contain a value or may be `null`
- `fullName` must always contain a non-null string

That small difference changes how the code must be written.

## Common beginner issues

- forcing values without understanding risk
- mixing types accidentally
- storing values loosely instead of modeling them clearly
- overusing nullable types when the value should really be required

## Important Dart tools here

- nullable types with `?`
- null-aware access like `?.`
- null-coalescing with `??`
- late initialization when used carefully

## Another useful example

```dart
class Profile {
  final String name;
  final String? bio;

  Profile({
    required this.name,
    this.bio,
  });
}
```

Here:

- `name` is required and always expected
- `bio` is optional and may be unavailable

This is a strong beginner example because it mirrors realistic app data.

## Example of safer fallback logic

```dart
String displayName(String? nickname, String fullName) {
  return nickname ?? fullName;
}
```

## Step-by-step lesson example

```dart
void main() {
  String? nickname;
  const fullName = 'Sitharaj Raj';

  final label = nickname ?? fullName;
  print(label);
}
```

## What this example teaches

- `nickname` is allowed to be missing
- `fullName` is always available
- `??` chooses the safe fallback when the first value is null

## Expected output

```text
Sitharaj Raj
```

## Another real app example

```dart
class TrainerProfile {
  final String name;
  final String? company;

  TrainerProfile({
    required this.name,
    this.company,
  });
}
```

This mirrors real app data where some information is required and some is optional.

## Why it matters in Flutter

- UI logic depends heavily on whether data exists yet
- APIs often return partial or delayed data
- loading and empty states become easier to handle with proper type awareness

## Common mistakes to discuss

- using `!` too casually
- not understanding when `late` is appropriate
- trying to avoid null safety instead of learning it
- making everything nullable to avoid compiler feedback

## Practice ideas

1. Write a function that returns a fallback value when input is null.
2. Compare nullable and non-nullable versions of a user model field.
3. Explain why an API response often creates nullable situations.

## Challenge task

Create a profile example with:

- a required name
- an optional bio
- an optional website

Then write a function that returns safe fallback text for missing values.

## Review questions

- What does `String?` actually mean?
- When is `??` safer than `!`?
- Why do app models often need a mix of required and optional fields?

## Short answers

- `String?` means the variable may hold a string or may be null
- `??` is safer than `!` because it provides fallback behavior instead of forcing a risky assumption
- app models mix required and optional fields because real data is often incomplete or delayed

## Teaching outcome

- learners become more deliberate about data correctness and flow safety
