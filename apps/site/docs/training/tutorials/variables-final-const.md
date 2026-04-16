---
title: Variables, final, and const
description: A detailed tutorial on storing values in Dart and understanding mutability.
---

# Variables, final, and const

One of the first Dart concepts learners must understand is how values are stored and whether those values can change.

## Lesson objective

By the end of this lesson, a learner should be able to:

- declare values clearly in Dart
- choose between `var`, explicit types, `final`, and `const`
- explain why some values should stay fixed and others should change
- read simple Dart declarations without confusion

## Plain-language explanation

Beginners usually ask:

- "Why do I need so many ways to declare a value?"
- "When should I use `var`?"
- "Are `final` and `const` basically the same?"

The easiest way to teach this is:

- `var` means Dart can infer the type for you
- `String`, `int`, and other explicit types make the value clearer to readers
- `final` means the variable gets one assignment only
- `const` means the value is known before the program runs

That is the core idea learners need before they worry about edge cases.

## Core concepts

- `var` lets Dart infer the type from the assigned value
- explicit types make the intended value clearer
- `final` means the variable can only be assigned once
- `const` means the value is fixed at compile time

## Why this matters

- learners often confuse changing the variable with changing the object
- Flutter code becomes clearer when values that should not change are marked properly
- using `final` and `const` well improves readability and sometimes performance

## A simple mental model

You can explain the four options like this:

- use `var` when the type is obvious and the value may change
- use an explicit type when clarity matters
- use `final` when the value should not be reassigned
- use `const` when the value is truly fixed and compile-time known

## Example

```dart
var name = 'Sitharaj';
final createdAt = DateTime.now();
const appTitle = 'Flutter Training Portal';
```

## Worked explanation

- `name` uses type inference because the value is obvious
- `createdAt` can only be assigned once, but the value is created at runtime
- `appTitle` is fixed and known before the app runs, so `const` is appropriate

## Explicit type example

```dart
String trainerName = 'Sitharaj';
int sessionCount = 3;
bool isLive = true;
```

This example is useful because it shows learners that explicit types are not old-fashioned. They are often helpful for readability.

## Another practical example

```dart
final userId = 'USR-101';
const maxLoginAttempts = 3;
int failedAttempts = 0;
```

This is a helpful example because it shows three different intentions:

- a value that should not change after creation
- a value that is truly constant everywhere
- a value that changes during application flow

## Step-by-step lesson example

```dart
void main() {
  const appName = 'Training Portal';
  final sessionStartedAt = DateTime.now();
  var selectedTab = 'home';

  print(appName);
  print(sessionStartedAt);
  print(selectedTab);

  selectedTab = 'profile';
  print(selectedTab);
}
```

## What this example teaches

- `appName` is a compile-time constant because the value never changes
- `sessionStartedAt` is created at runtime, so `final` is correct
- `selectedTab` changes while the program runs, so it must stay mutable

## A stronger app example

```dart
void main() {
  const brandName = 'Flutter Development Hub';
  final userId = 'U-101';
  int failedAttempts = 0;
  String currentScreen = 'login';

  failedAttempts += 1;
  currentScreen = 'otp';

  print(brandName);
  print(userId);
  print(failedAttempts);
  print(currentScreen);
}
```

## Expected output

```text
Flutter Development Hub
U-101
1
otp
```

## Why this example works in class

- `brandName` is fixed for the whole program
- `userId` should not be reassigned after it is created
- `failedAttempts` changes as the user interacts
- `currentScreen` changes as navigation changes

This makes the declarations feel connected to app behavior, not just syntax.

## Expected output

The exact timestamp will change, but the shape of the output will look like this:

```text
Training Portal
2026-04-15 10:20:30.000
home
profile
```

## Practice walkthrough

Try changing the example:

1. change `selectedTab` to a strongly typed `String`
2. try making `sessionStartedAt` a `const` and see why it fails conceptually
3. add a `failedAttempts` counter and increment it

## Teaching points

- prefer `final` by default when the value should not be reassigned
- use `const` for values that are known at compile time
- explain why `DateTime.now()` can be `final` but not `const`

## Strong explanation angle

- `var` is about convenience
- `final` is about one-time assignment
- `const` is about compile-time immutability

Teaching that distinction clearly prevents a lot of beginner confusion later.

## One common confusion to explain clearly

This surprises many learners:

```dart
final items = ['Flutter', 'Dart'];
items.add('Firebase');
```

This is allowed because:

- `items` cannot be reassigned to a different list
- but the list object itself can still be modified

If you want a truly fixed compile-time collection, `const` behaves differently:

```dart
const items = ['Flutter', 'Dart'];
```

Now the collection is immutable.

## Common mistakes

- thinking `final` and `const` mean the same thing
- overusing `var` when clarity matters more than brevity
- assuming a `final` collection cannot have its contents changed
- changing names and declarations without thinking about intent

## Exercises

1. Rewrite a short snippet using `final` wherever possible.
2. Decide which values in a profile screen should be `var`, `final`, or `const`.
3. Explain why a runtime value cannot be `const`.

## Guided exercise

Classify each of these:

- app name
- current tab
- logged-in user id
- number of items in cart
- maximum retry count

Suggested thinking:

- app name: `const`
- current tab: mutable
- logged-in user id: `final`
- number of items in cart: mutable
- maximum retry count: `const`

## Mini assignment

Create a short Dart program that models:

- an app title
- a user name
- a login-attempt counter
- a session creation time

Then justify which variables should be `const`, `final`, or mutable.

## Challenge task

Build a tiny profile state example with:

- app title
- user name
- login count
- current page

Then explain every declaration line by line.

## Review questions

- When is `var` acceptable and when is an explicit type clearer?
- Why is `const` stronger than `final`?
- What is the practical benefit of preferring `final` for many variables?

## Short answers

- `var` is useful when the type is obvious from the value and readability stays clear
- `final` means assigned once at runtime, while `const` means fixed at compile time
- preferring `final` reduces accidental reassignment and makes intent clearer
