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

## Plain-language explanation

A function is a named block of reusable logic.

You can teach it like this:

- a variable stores a value
- a function stores a behavior

That framing helps beginners understand why functions matter. They are not just for shorter code. They are for clearer code.

## Topics to teach

- positional and named parameters
- optional parameters
- return values
- arrow syntax for simple expressions
- choosing names that communicate intent

## Why functions matter so much

Without functions, code quickly becomes:

- repeated
- harder to test
- harder to explain
- harder to improve later

With functions, learners can separate responsibilities:

- validation
- formatting
- calculation
- model transformation

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

## Positional versus named parameters

Teach the difference with a simple contrast.

Positional:

```dart
String buildLabel(String name, String role) {
  return '$name - $role';
}
```

Named:

```dart
String buildLabel({
  required String name,
  required String role,
}) {
  return '$name - $role';
}
```

Named parameters are often easier to read at the call site:

```dart
final label = buildLabel(
  name: 'Sitharaj',
  role: 'Trainer',
);
```

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

## Tiny beginner example

```dart
int add(int a, int b) {
  return a + b;
}

void main() {
  print(add(2, 3));
}
```

## Expected output

```text
5
```

This example is simple, but it teaches the most important pattern:

- input comes in through parameters
- logic runs inside the function
- output comes back through `return`

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

## A practical app example

```dart
String buildCourseSummary({
  required String title,
  required int durationInDays,
  bool isCorporate = false,
}) {
  final audience = isCorporate ? 'Corporate' : 'Public';
  return '$title - $durationInDays days - $audience';
}

void main() {
  final summary = buildCourseSummary(
    title: 'Flutter Delivery Program',
    durationInDays: 7,
    isCorporate: true,
  );

  print(summary);
}
```

## Expected output

```text
Flutter Delivery Program - 7 days - Corporate
```

## Why this example is useful

- it uses named parameters clearly
- it shows a default value
- it returns a value instead of printing inside the function
- it resembles a real business or app use case

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

## One strong teaching point

This is usually better:

```dart
String buildTitle(String name) {
  return 'Hello $name';
}
```

than this:

```dart
void buildTitle(String name) {
  print('Hello $name');
}
```

The first version is easier to reuse because the caller decides what to do with the result.

## Arrow syntax

For short expressions, Dart also allows arrow syntax:

```dart
bool isAdult(int age) => age >= 18;
```

This is useful for very small functions, but it should not replace readable block functions when the logic becomes more detailed.

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

## Guided exercise

Write a function called `calculateTotalPrice` that:

- accepts `price`
- accepts `quantity`
- accepts optional `discountPercent`
- returns the final total

Possible answer:

```dart
double calculateTotalPrice({
  required double price,
  required int quantity,
  double discountPercent = 0,
}) {
  final subtotal = price * quantity;
  final discount = subtotal * (discountPercent / 100);
  return subtotal - discount;
}
```

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
