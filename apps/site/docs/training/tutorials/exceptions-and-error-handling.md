---
title: Exceptions and Error Handling
description: A detailed tutorial on safe failure handling in Dart applications.
---

# Exceptions and Error Handling

Real applications fail in real ways. Good Dart training should teach learners how to handle failure clearly instead of pretending everything always works.

## Core ideas

- exceptions signal that something went wrong
- `try`, `catch`, and `finally` help manage risky operations
- error handling should support user experience as well as developer clarity

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

## Teaching focus

- avoid hiding every error silently
- decide what the app should do when something goes wrong
- connect error handling to loading, empty, and failure states in UI

## Common mistakes

- swallowing errors with no useful response
- using exceptions for normal control flow too often
- exposing technical failure details directly to end users

## Practice ideas

1. Parse user input safely with fallback behavior.
2. Simulate a failing API call and describe the UI response.
3. Compare weak and strong error-handling approaches.

## Review questions

- When should you catch an error and when should you let it surface?
- Why is silent failure dangerous?
- How do error states affect user experience in Flutter apps?
