---
title: Testing Strategy
description: What to test, how to test it, and how testing supports Flutter delivery quality.
keywords: [Flutter testing, unit test, widget test, integration test, test strategy]
---

# Testing Strategy

Testing is part of quality thinking, not an isolated afterthought.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- explain what different test types are for
- write unit tests for business logic
- write widget tests for UI behavior
- connect testing to delivery risk reduction

## The testing pyramid

| Level | What it tests | Speed | Confidence |
|-------|--------------|-------|-----------|
| **Unit tests** | Pure functions, models, business logic | Fast | Logic correctness |
| **Widget tests** | UI components, user interactions | Medium | Component behavior |
| **Integration tests** | Full flows across screens | Slow | End-to-end reliability |
| **Golden tests** | Visual pixel comparison | Medium | UI regression detection |

## Unit test example

Test a pure function that calculates a discounted price:

```dart
// lib/utils/pricing.dart
double applyDiscount(double price, double discountPercent) {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw ArgumentError('Invalid price or discount');
  }
  return price * (1 - discountPercent / 100);
}
```

```dart
// test/utils/pricing_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:my_app/utils/pricing.dart';

void main() {
  group('applyDiscount', () {
    test('applies 20% discount correctly', () {
      expect(applyDiscount(100, 20), 80.0);
    });

    test('returns original price for 0% discount', () {
      expect(applyDiscount(50, 0), 50.0);
    });

    test('returns 0 for 100% discount', () {
      expect(applyDiscount(75, 100), 0.0);
    });

    test('throws for negative price', () {
      expect(() => applyDiscount(-10, 20), throwsArgumentError);
    });
  });
}
```

## Widget test example

Test that a login form validates input and calls the callback:

```dart
// test/widgets/login_form_test.dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:my_app/features/auth/login_form.dart';

void main() {
  testWidgets('shows error when email is empty', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: Scaffold(body: LoginForm())),
    );

    // Tap submit without entering email
    await tester.tap(find.byType(ElevatedButton));
    await tester.pumpAndSettle();

    expect(find.text('Email is required'), findsOneWidget);
  });

  testWidgets('submit button is disabled while loading', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: Scaffold(body: LoginForm())),
    );

    await tester.enterText(find.byKey(const Key('email')), 'test@test.com');
    await tester.enterText(find.byKey(const Key('password')), 'password');
    await tester.tap(find.byType(ElevatedButton));
    await tester.pump();

    final button = tester.widget<ElevatedButton>(find.byType(ElevatedButton));
    expect(button.onPressed, isNull); // Disabled during loading
  });
}
```

## What to test — decision guide

| Scenario | Test type | Priority |
|----------|----------|----------|
| Price calculation logic | Unit test | **High** — silent breakage risk |
| Form validation rules | Unit or widget test | **High** — user-facing |
| Login/logout flow | Widget test | **High** — critical path |
| Loading → success → error states | Widget test | **Medium** — common patterns |
| Complex list filtering | Unit test | **Medium** — logic-heavy |
| Button color matches design | Golden test | **Low** — visual only |
| Tap-through full checkout | Integration test | **Medium** — end-to-end |

## Testing with mocks

Use `mocktail` to isolate dependencies:

```dart
import 'package:mocktail/mocktail.dart';

class MockAuthRepository extends Mock implements AuthRepository {}

void main() {
  late MockAuthRepository mockAuth;

  setUp(() {
    mockAuth = MockAuthRepository();
  });

  test('returns user on successful login', () async {
    when(() => mockAuth.login('test@test.com', 'pass'))
        .thenAnswer((_) async => User(name: 'Test'));

    final user = await mockAuth.login('test@test.com', 'pass');
    expect(user.name, 'Test');
  });
}
```

## Common mistakes

- Chasing 100% coverage instead of testing what matters
- Testing implementation details instead of behavior
- Not testing error paths (empty states, network failures)
- Writing tests that break every time the UI changes slightly
- Skipping `pumpAndSettle()` when animations are involved

## Practice exercises

1. Write unit tests for a `CartService` that adds items and calculates totals
2. Write a widget test that verifies a search bar filters a list
3. Add a mock repository and test a screen that shows loading → data → error states
