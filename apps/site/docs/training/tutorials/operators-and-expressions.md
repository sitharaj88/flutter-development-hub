---
title: Operators and Expressions
description: A detailed tutorial on arithmetic, comparison, and logical expressions in Dart.
---

# Operators and Expressions

Operators are how Dart compares, combines, and transforms values. Learners need these to build conditions, validations, totals, and display logic.

## Lesson objective

By the end of this lesson, a learner should be able to:

- use arithmetic, comparison, and logical operators correctly
- read and write simple expressions without guessing
- break complex checks into smaller readable pieces
- connect expressions to real application behavior

## Plain-language explanation

An operator is the symbol that performs an action.

An expression is the full piece of code that produces a value.

For example:

```dart
price * quantity
```

Here:

- `*` is the operator
- `price * quantity` is the expression

This distinction helps learners talk about code accurately.

## Main operator groups

- arithmetic operators like `+`, `-`, `*`, `/`, `%`
- comparison operators like `==`, `!=`, `>`, `<`
- logical operators like `&&`, `||`, `!`
- assignment operators like `=`, `+=`, `-=`

## What learners should feel here

By the end of this lesson, learners should stop seeing symbols as random marks and start seeing them as small decision tools:

- arithmetic helps calculate
- comparison helps check
- logical operators help combine checks
- assignment updates stored values

## App examples

- calculating totals and discounts
- comparing password length requirements
- deciding whether a user can continue
- combining multiple conditions in a validation rule

## Example

```dart
bool canSubmit(String email, String password) {
  return email.isNotEmpty && password.length >= 8;
}
```

## Worked breakdown

This expression combines two checks:

- `email.isNotEmpty`
- `password.length >= 8`

The `&&` operator means both conditions must be true for submission to continue.

## Tiny operator examples

```dart
void main() {
  print(5 + 2);
  print(5 > 2);
  print(true && false);
}
```

## Expected output

```text
7
true
false
```

This is a good warm-up before moving into app logic.

## Another practical example

```dart
double discountedTotal(double total, bool hasCoupon) {
  if (hasCoupon) {
    return total * 0.9;
  }

  return total;
}
```

This helps learners connect arithmetic operators with real app behavior.

## Comparison and logical operator example

```dart
bool canAccessDashboard({
  required bool isLoggedIn,
  required bool isVerified,
}) {
  return isLoggedIn && isVerified;
}
```

This example is useful because it shows that logical operators usually represent business rules.

## Step-by-step lesson example

```dart
void main() {
  const itemPrice = 1200.0;
  const quantity = 2;
  const hasCoupon = true;

  final subtotal = itemPrice * quantity;
  final total = hasCoupon ? subtotal * 0.9 : subtotal;
  final canCheckout = total > 0 && quantity > 0;

  print(subtotal);
  print(total);
  print(canCheckout);
}
```

## What this example teaches

- `*` is used for multiplication
- `>` compares values
- `&&` combines two boolean results
- the ternary operator chooses one result based on a condition

## A more detailed classroom example

```dart
void main() {
  const mark1 = 78;
  const mark2 = 82;
  const mark3 = 90;

  final total = mark1 + mark2 + mark3;
  final average = total / 3;
  final isPassed = average >= 50;
  final grade = average >= 85 ? 'A' : 'B';

  print(total);
  print(average);
  print(isPassed);
  print(grade);
}
```

## Expected output

```text
250
83.33333333333333
true
B
```

## Why this example helps

- arithmetic operators calculate totals and averages
- comparison operators decide pass/fail
- the ternary operator chooses one label based on a condition
- every line produces a value that the next line can use

## Expected output

```text
2400.0
2160.0
true
```

## How to explain this in class

Walk through the values in order:

1. calculate the subtotal
2. check whether the coupon changes the total
3. confirm whether checkout should be allowed

This keeps learners focused on reasoning instead of only symbols.

## Teaching points

- expressions always produce a value
- clear boolean expressions improve readability
- complex expressions should sometimes be broken into smaller steps

## Operator precedence

One thing worth explaining carefully:

```dart
final result = 2 + 3 * 4;
```

The multiplication happens before the addition, so the result is `14`, not `20`.

If the learner wants a different order, parentheses make that explicit:

```dart
final result = (2 + 3) * 4;
```

Now the result is `20`.

## Practical exercise ideas

1. Write a discount rule using arithmetic operators.
2. Check whether a user can proceed using multiple conditions.
3. Break a long expression into two clearer intermediate values.

## Common mistakes

- using `=` when comparison is intended conceptually
- making expressions too dense to read
- forgetting precedence and grouping when multiple operators appear together
- hiding too much logic inside one unreadable return statement

## Guided exercise

Write an expression that checks whether a student can receive a certificate.

Conditions:

- attendance is at least 80
- project is submitted
- fees are cleared

Possible answer:

```dart
bool canReceiveCertificate({
  required int attendance,
  required bool projectSubmitted,
  required bool feesCleared,
}) {
  return attendance >= 80 && projectSubmitted && feesCleared;
}
```

## Review questions

- What is the difference between an operator and an expression?
- Why can a complex boolean check become hard to maintain?
- When is it better to split an expression into smaller named values?

## Mini assignment

Write three small expressions for:

1. checking whether a cart can be checked out
2. calculating a discounted total
3. deciding whether a profile is complete

Then refactor the least readable one into clearer intermediate variables.

## Challenge task

Write a short program that:

- stores marks for three subjects
- calculates the average
- checks whether the learner passed
- prints a final message

Try solving it first in one block, then refactor it into clearer intermediate values.

## Short answers

- an operator is the symbol or keyword, while an expression is the full value-producing combination
- complex boolean checks become hard to maintain when too many rules are stacked into one line
- splitting into smaller named values improves readability and debugging
