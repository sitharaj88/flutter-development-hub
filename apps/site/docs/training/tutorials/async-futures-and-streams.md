---
title: Async, Futures, and Streams
description: A deeper tutorial on asynchronous thinking in Dart and Flutter.
---

# Async, Futures, and Streams

Modern apps are asynchronous by nature. Data loads later, user interactions happen over time, and multiple operations can overlap.

## Learning goals

- understand what it means for work to finish later
- use `Future`, `async`, and `await` with confidence
- recognize where streams become useful

## A simple Future example

```dart
Future<String> fetchGreeting() async {
  await Future.delayed(const Duration(seconds: 1));
  return 'Hello from Dart';
}
```

This is a good first step for teaching that some work completes later and must be awaited.

## App examples

- loading data from a server
- waiting for authentication to complete
- reacting to changing values over time

## Stream example

```dart
Stream<int> countdown() async* {
  for (int i = 3; i >= 1; i--) {
    await Future.delayed(const Duration(seconds: 1));
    yield i;
  }
}
```

This helps learners see the difference between one result and multiple values over time.

## Futures versus Streams

- use a `Future` when one result arrives later
- use a `Stream` when values continue to arrive over time

For Flutter beginners, Futures usually need to be comfortable before Streams become useful.

## Teaching focus

- avoid teaching async only as syntax
- connect it to user experience, loading states, and resilience
- show how poor async handling leads to confusing bugs

## Common mistakes

- forgetting to `await` a Future
- blocking logic mentally as if async code were synchronous
- updating UI assumptions before data actually arrives
- not thinking about error states in async work

## Practice ideas

1. Simulate loading a user profile with `Future.delayed`.
2. Show a loading state while a Future completes.
3. Explain the difference between one delayed response and ongoing value updates.

## Review questions

- What is the difference between a `Future` and a `Stream`?
- Why should async code be taught through app behavior, not syntax alone?
- What kind of bugs appear when developers forget that work completes later?
