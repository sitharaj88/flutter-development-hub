---
title: Exceptions and Error Handling
description: A detailed tutorial on safe failure handling in Dart applications.
---

# Exceptions and Error Handling

Real applications fail in real ways. Good Dart training should teach learners how to handle failure clearly instead of pretending everything always works.

## Lesson objective

By the end of this lesson, a learner should be able to:

- explain what an exception is
- use `try`, `catch`, and `finally`
- choose sensible fallback behavior
- connect error handling to real app states

## Core ideas

- exceptions signal that something went wrong
- `try`, `catch`, and `finally` help manage risky operations
- error handling should support user experience as well as developer clarity

## Plain-language explanation

You can explain exceptions like this:

- normal flow means the code works as expected
- exceptional flow means something unexpected interrupts that path

Examples:

- the user enters invalid text
- the network request fails
- the data format is not what the app expected

Error handling is how we decide what the program should do next.

## Common app situations

- network request fails
- JSON is missing an expected field
- invalid input causes parsing trouble
- file or storage operations do not succeed

## Example

```dart
int parseAge(String value) {
  try {
    return int.parse(value);
  } catch (_) {
    return 0;
  }
}
```

## Worked explanation

- the risky operation is isolated inside `try`
- the error is handled without crashing the whole flow
- the function returns a predictable fallback instead of breaking the app

## First runnable example

```dart
int parseStudentCount(String value) {
  try {
    return int.parse(value);
  } catch (_) {
    return 0;
  }
}

void main() {
  print(parseStudentCount('25'));
  print(parseStudentCount('twenty'));
}
```

## Expected output

```text
25
0
```

## Why this example helps

- it shows a real failure
- it shows fallback behavior
- it helps learners see that error handling is about keeping the app predictable

## Understanding `try`, `catch`, and `finally`

### `try`

Place risky code here.

### `catch`

Respond when the risky code fails.

### `finally`

Run cleanup logic whether the operation succeeds or fails.

Example:

```dart
void main() {
  try {
    print('Trying to load data');
    throw Exception('Network failed');
  } catch (error) {
    print('Handled error: $error');
  } finally {
    print('Closing loader');
  }
}
```

## Expected output

```text
Trying to load data
Handled error: Exception: Network failed
Closing loader
```

## Teaching focus

- avoid hiding every error silently
- decide what the app should do when something goes wrong
- connect error handling to loading, empty, and failure states in UI

## Real app thinking

When a failure happens, ask:

- should the app retry?
- should it show a fallback value?
- should it show an error message?
- should it stop the current operation?

That is a more useful teaching discussion than syntax alone.

## A realistic service example

```dart
Future<String> fetchDashboardData() async {
  throw Exception('Server unavailable');
}

Future<void> main() async {
  try {
    final result = await fetchDashboardData();
    print(result);
  } catch (error) {
    print('Could not load dashboard: $error');
  }
}
```

## What this teaches

- async code can fail too
- `try` and `catch` are still relevant with `await`
- the app needs a user-facing response when data loading fails

## Common mistakes

- swallowing errors with no useful response
- using exceptions for normal control flow too often
- exposing technical failure details directly to end users

## Good teaching distinction

Do not use exceptions for ordinary validation when a simple condition is enough.

For example, this is usually normal validation:

```dart
if (password.isEmpty) {
  return 'Password is required';
}
```

This is different from an actual exceptional situation such as a failed server response.

## Practice ideas

1. Parse user input safely with fallback behavior.
2. Simulate a failing API call and describe the UI response.
3. Compare weak and strong error-handling approaches.

## Guided exercise

Write a function called `parseDiscount` that:

- accepts a string
- tries to convert it to `double`
- returns `0` when parsing fails

Possible answer:

```dart
double parseDiscount(String value) {
  try {
    return double.parse(value);
  } catch (_) {
    return 0;
  }
}
```

## Review questions

- When should you catch an error and when should you let it surface?
- Why is silent failure dangerous?
- How do error states affect user experience in Flutter apps?

## Short answers

- catch an error when the current layer can respond meaningfully, otherwise let it surface to a higher layer
- silent failure is dangerous because the app may appear broken without giving clues to users or developers
- error states affect user experience by shaping whether the app feels trustworthy, recoverable, and clear during failure
