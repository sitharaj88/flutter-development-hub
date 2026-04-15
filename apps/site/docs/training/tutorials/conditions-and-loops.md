---
title: Conditions and Loops
description: A deeper tutorial on decision-making and repetition in programs.
---

# Conditions and Loops

Conditions and loops are how a program becomes dynamic. They allow software to react differently based on user input, application state, or repeated sets of data.

## Conditions

Conditions help a program choose between outcomes.

### Common app uses

- show an error if a password is too short
- allow checkout only if the cart has items
- display different screens based on whether the user is logged in

### Example

```dart
bool canCheckout(int itemCount) {
  if (itemCount > 0) {
    return true;
  } else {
    return false;
  }
}
```

This can later be simplified, but it is a good starting point for teaching how decisions work.

## Loops

Loops help a program process repeated data efficiently.

### Common app uses

- render a list of products
- calculate the total of multiple cart items
- search through data for a matching value

### Example

```dart
int totalPrice(List<int> prices) {
  int total = 0;

  for (final price in prices) {
    total = total + price;
  }

  return total;
}
```

This example is simple, but it shows why loops matter in any real app with repeated data.

## Teaching focus

- explain not only the syntax but the reason for each branch or repetition
- highlight off-by-one mistakes and infinite loop risks
- connect logic to real app behaviors

## Conditions versus loops

- use a condition when the program needs to choose
- use a loop when the program needs to repeat
- many real features need both at the same time

For example, a cart may loop through products and also use conditions to decide whether a discount applies.

## Common mistakes

- writing conditions that never become true
- forgetting what happens in the `else` case
- creating loops that never stop
- modifying the wrong variable inside a loop
- using loops where a single decision would be clearer

## Guided exercise ideas

1. Write a function that returns `"Pass"` or `"Fail"` based on marks.
2. Count how many even numbers exist in a list.
3. Search for a username in a list and return whether it exists.
4. Print different messages for admin and regular users.

## Exercises

- write a grade calculator with conditions
- loop through a list to count matching items
- build a menu system with repeated options and decisions

## Review questions

- When should you use a condition instead of a loop?
- What causes an infinite loop?
- How can loops help with repeated app data such as product lists or notifications?
