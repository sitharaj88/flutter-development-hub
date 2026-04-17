---
title: Testing, Debugging, and Performance
description: Building quality habits with unit tests, widget tests, DevTools debugging, and performance awareness.
keywords: [Flutter testing, debugging, performance, unit test, widget test, DevTools]
---

# Testing, Debugging, and Performance

This lesson pushes learners beyond "it works" into a professional quality mindset.

## Lesson goal

- write unit tests for business logic
- write widget tests for UI behavior
- debug with DevTools and structured investigation
- identify common performance problems

## Unit testing

```dart
// lib/utils/pricing.dart
double calculateTotal(List<double> prices, {double taxRate = 0.1}) {
  final subtotal = prices.fold(0.0, (sum, p) => sum + p);
  return subtotal * (1 + taxRate);
}
```

```dart
// test/utils/pricing_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:my_app/utils/pricing.dart';

void main() {
  test('calculates total with default tax', () {
    expect(calculateTotal([10, 20, 30]), closeTo(66.0, 0.01));
  });

  test('calculates total with custom tax', () {
    expect(calculateTotal([100], taxRate: 0.2), closeTo(120.0, 0.01));
  });

  test('returns 0 for empty list', () {
    expect(calculateTotal([]), 0.0);
  });
}
```

## Widget testing

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('counter increments when button tapped', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: CounterScreen()));

    // Verify initial state
    expect(find.text('0'), findsOneWidget);

    // Tap the increment button
    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();

    // Verify updated state
    expect(find.text('1'), findsOneWidget);
  });
}
```

## Debugging with DevTools

| Tool | Use when |
|------|---------|
| **Widget Inspector** | Layout looks wrong, unexpected overflow |
| **Performance Overlay** | Jank, slow scrolling |
| **Network Profiler** | API calls failing or slow |
| **Memory View** | Suspected memory leaks |

**Quick debugging workflow:**
1. Reproduce the issue consistently
2. Read the error message — note the widget and line number
3. Add `debugPrint` to trace data flow
4. Set a breakpoint to inspect values
5. Fix one thing, verify the full flow

## Common performance issues

| Problem | Fix |
|---------|-----|
| `ListView` with all items built upfront | Use `ListView.builder` |
| Missing `const` constructors | Add `const` to static widgets |
| Expensive work in `build()` | Move computation to state or provider |
| Uncached network images | Use `cached_network_image` |

```dart
// ❌ Builds all items immediately
ListView(children: items.map((i) => ItemCard(item: i)).toList())

// ✅ Only builds visible items
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ItemCard(item: items[index]),
)
```

## Practice exercises

1. Write unit tests for a function that validates email addresses
2. Write a widget test that verifies a form shows an error message
3. Use DevTools Widget Inspector to find an overflow issue
4. Replace a `ListView` with `ListView.builder` and compare performance
