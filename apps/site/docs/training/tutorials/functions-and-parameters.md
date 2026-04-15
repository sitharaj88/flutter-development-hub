---
title: Functions and Parameters
description: A detailed tutorial on function design, parameter styles, and return values in Dart.
---

# Functions and Parameters

Functions are one of the most important Dart features because they shape code clarity, reuse, and testability.

## Lesson objective

By the end of this lesson, a learner should be able to:

- define functions with clear names
- use parameters to pass data into logic
- return values in a clean and predictable way
- choose when named parameters improve readability

## Topics to teach

- positional and named parameters
- optional parameters
- return values
- arrow syntax for simple expressions
- choosing names that communicate intent

## Example

```dart
String formatUserLabel({
  required String firstName,
  String? role,
}) {
  if (role == null || role.isEmpty) {
    return firstName;
  }

  return '$firstName ($role)';
}
```

## Why named parameters matter

- they improve readability in Flutter-heavy code
- they make function calls easier to understand
- they reduce mistakes when many inputs exist

## Teaching angle for Flutter learners

Named parameters appear constantly in Flutter widget constructors, so learning them well in Dart helps learners read UI code much faster.

## Another useful example

```dart
bool isValidLogin({
  required String email,
  required String password,
}) {
  return email.isNotEmpty && password.length >= 8;
}
```

This example is good because it mirrors real app validation and makes the function call self-explanatory.

## Step-by-step lesson example

```dart
String buildWelcomeMessage({
  required String name,
  String role = 'Learner',
}) {
  return 'Welcome $name - $role';
}

void main() {
  final message = buildWelcomeMessage(
    name: 'Sitharaj',
    role: 'Trainer',
  );

  print(message);
}
```

## What this example teaches

- the function has a clear purpose
- `name` is required because the message depends on it
- `role` has a default value, so it is optional
- the function returns a string instead of printing directly

## Expected output

```text
Welcome Sitharaj - Trainer
```

## Why return values matter

If a function returns a value, the rest of the program can decide what to do with it:

- print it
- store it
- display it in the UI
- test it

That is more flexible than hardcoding the behavior inside the function.

## What to discuss with learners

- when a function should return a value
- when a function name is too vague
- when parameters should be named instead of positional
- why large functions are harder to maintain and test

## Exercises

1. Convert a positional-parameter function into one with named parameters.
2. Write a validation helper with a boolean return type.
3. Refactor a long block of repeated logic into one reusable function.

## Common mistakes

- creating functions with names that hide intent
- passing too many parameters without structure
- using a function to do multiple unrelated tasks
- returning inconsistent data types conceptually

## Review questions

- Why are named parameters often easier to read?
- What makes a function easier to reuse?
- When should a function return a value instead of printing or mutating state directly?

## Mini assignment

Build a small set of helper functions for a sign-up flow:

- one to validate email presence
- one to validate password strength
- one to build a display label for the user

Then explain why each function is separated.

## Challenge task

Write three helper functions:

- `isEmailValid`
- `isPasswordStrong`
- `buildAccountSummary`

Then use them inside a `main()` function and print the results.

## Short answers

- named parameters are often easier to read because the meaning of each input is visible at the call site
- reusable functions do one job clearly and avoid hidden side effects
- returning a value is better when other parts of the program need to reuse the result
