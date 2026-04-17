---
title: Programming Fundamentals
description: Build the programming foundation needed for Dart and Flutter — logic, problem-solving, and code confidence.
keywords: [programming basics, coding fundamentals, beginner programming, logic, problem solving]
---

# Programming Fundamentals

Before Flutter becomes comfortable, learners need to feel comfortable with **programming itself**. This module builds the thinking foundation that prevents confusion when Dart syntax and Flutter widgets enter the picture.

:::info Module goal
After this module, learners should be able to **read, write, and explain** simple programs without panic — and understand why structure matters before building larger applications.
:::

## What this module covers

### 1. How programs work

Every program follows the same fundamental pattern:

```
Input → Process → Output
```

Understanding this pattern removes the mystery. A calculator takes numbers (input), performs math (process), and shows a result (output). A login screen takes credentials (input), validates them (process), and navigates or shows an error (output).

### 2. Variables and data types

Variables store values. Types determine what kind of value is stored.

```dart
String name = 'Sitharaj';        // Text
int age = 30;                     // Whole number
double rating = 4.8;              // Decimal number
bool isActive = true;             // True or false
```

:::tip Key insight
Choosing the right type prevents bugs. If a quantity can never be negative, that information should live in the code, not just in the developer's head.
:::

### 3. Conditions and decision-making

Programs make decisions using `if`, `else if`, and `else`:

```dart
void checkAge(int age) {
  if (age < 13) {
    print('Child');
  } else if (age < 18) {
    print('Teenager');
  } else {
    print('Adult');
  }
}
```

**Practice question:** What does `checkAge(15)` print? Why?

### 4. Loops and repetition

When you need to do something multiple times:

```dart
// Print numbers 1 to 5
for (int i = 1; i <= 5; i++) {
  print(i);
}

// Process each item in a list
List<String> tasks = ['Design', 'Build', 'Test'];
for (final task in tasks) {
  print('Working on: $task');
}
```

### 5. Functions and code reuse

Functions package logic into reusable, named blocks:

```dart
double calculateArea(double width, double height) {
  return width * height;
}

void main() {
  double area = calculateArea(5, 3);
  print('Area: $area'); // Area: 15.0
}
```

:::caution Common mistake
Beginners often write the same logic in multiple places instead of extracting it into a function. If you're copying code, you probably need a function.
:::

### 6. Collections

Lists and maps organize multiple values:

```dart
// A list of scores
List<int> scores = [85, 92, 78, 95, 88];

// Find the average
double average = scores.reduce((a, b) => a + b) / scores.length;
print('Average: $average'); // Average: 87.6

// A map of settings
Map<String, bool> settings = {
  'darkMode': true,
  'notifications': false,
};
```

### 7. Problem-solving by decomposition

The most important programming skill is **breaking big problems into smaller steps**:

```
"Build a login screen" breaks down into:
  1. Show email and password fields
  2. Validate email format
  3. Check password length
  4. Show error messages if invalid
  5. Submit if everything passes
  6. Navigate on success
```

Each step is small enough to code confidently.

## Practical exercises

| Exercise | Concept tested | Difficulty |
|----------|---------------|------------|
| Temperature converter (C ↔ F) | Variables, functions, math | Beginner |
| Grade calculator from scores | Conditions, lists, averaging | Beginner |
| Password strength checker | String operations, conditions | Intermediate |
| Shopping cart total with tax | Functions, collections, math | Intermediate |
| Simple contact list (add, search, remove) | Lists, loops, functions | Intermediate |

## Why this matters for Flutter

- **State and UI flows** make more sense when conditions and functions are clear
- **Widget composition** is easier when you understand breaking things into smaller pieces
- **Architecture decisions** become intuitive when problem decomposition is a habit
- **Debugging** is less scary when you can read code step by step

## Expected outcome

After completing this module, learners should be ready to start **Dart** with less fear and stronger reasoning ability. The goal is not memorization — it's building the confidence to **think through code** instead of just typing it.

## Next steps

- [**Dart for Flutter**](/docs/training/dart-for-flutter) — Apply these fundamentals in Dart
- [**Tutorial: Computational Thinking**](/docs/training/tutorials/computational-thinking) — Deep dive into problem-solving
- [**Tutorial: Functions and Modularity**](/docs/training/tutorials/functions-and-modularity) — Master reusable code
