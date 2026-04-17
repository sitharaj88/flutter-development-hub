---
title: State Management Basics
description: Understanding local and shared state in Flutter with setState and Riverpod.
keywords: [Flutter state, setState, Riverpod, state management, local state, shared state]
---

# State Management Basics

Data changes over time, and the UI needs to respond correctly. This lesson teaches how.

## Lesson goal

- understand what state means in an app
- distinguish local state from shared state
- manage local state with `setState`
- see how Riverpod handles shared state

## What is state?

| Example | Type | Scope |
|---------|------|-------|
| Checkbox value | Local | One widget |
| Password visibility | Local | One widget |
| Selected tab | Local | One screen |
| Logged-in user | Shared | Whole app |
| Cart contents | Shared | Multiple screens |
| API loading status | Shared | Feature level |

## Local state with setState

```dart
class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(
        child: Text(
          '$_count',
          style: Theme.of(context).textTheme.displayMedium,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _count++),
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

**Rule:** Use `setState` when the state belongs to **one widget only**.

## Shared state with Riverpod

When multiple screens need the same data:

```dart
// Define a provider
@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
}

// Use it in any widget
class CounterDisplay extends ConsumerWidget {
  const CounterDisplay({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    return Text('Count: $count');
  }
}
```

## When to use what

| Situation | Approach |
|-----------|----------|
| Toggle visibility in one widget | `setState` |
| Tab selection on one screen | `setState` |
| Auth status across the app | Riverpod provider |
| Cart shared between screens | Riverpod provider |
| API data with loading/error | Riverpod async provider |

## Common mistakes

- Using Riverpod for a simple checkbox toggle
- Using `setState` for data three screens need
- Putting all state in one giant provider
- Not handling loading and error states

## Practice exercises

1. Build a counter with `setState` — increment, decrement, and reset buttons
2. Build a favorites toggle — tap a heart icon to add/remove from a list
3. Convert the favorites list to a Riverpod provider shared across two screens
