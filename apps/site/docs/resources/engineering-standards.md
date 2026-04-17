---
title: Engineering Standards
description: Flutter engineering standards for project structure, naming, state management, testing, and code quality.
keywords: [Flutter standards, code quality, project structure, naming conventions, Flutter best practices]
---

# Engineering Standards

Engineering standards separate a one-off code exercise from a **repeatable, scalable delivery practice**. These standards apply to training projects, consulting engagements, and production codebases.

:::info Living standards
These standards evolve as the practice grows. They are specific enough to guide implementation but flexible enough for real project context.
:::

## Project structure

Use **feature-based folder organization**:

![Project Structure — lib/ with app/, features/, shared/, and main.dart](/img/diagrams/project-structure.svg)

## Naming conventions

| Element | Convention | Example |
|---------|-----------|--------|
| Files | `snake_case` | `user_profile_screen.dart` |
| Classes | `PascalCase` | `UserProfileScreen` |
| Variables | `camelCase` | `userName`, `isLoading` |
| Constants | `camelCase` or `SCREAMING_SNAKE` | `maxRetryCount`, `API_BASE_URL` |
| Screens | Suffix with `Screen` | `LoginScreen`, `HomeScreen` |
| Widgets | Descriptive, noun-based | `UserCard`, `PriceTag` |
| Models | Domain noun | `User`, `Product`, `Order` |
| Repositories | Suffix with `Repository` | `UserRepository` |
| Providers/Notifiers | Suffix with role | `AuthProvider`, `CartNotifier` |

## State management

| Principle | Guideline |
|-----------|----------|
| Scope | Keep state as local as possible |
| Immutability | Use immutable models with `copyWith` |
| Separation | Business logic out of `build()` methods |
| Pattern | Choose one pattern per project (Riverpod, Bloc, Provider) |
| Testing | State logic must be testable without widgets |

## Code quality expectations

```dart
// ✅ Good: Clear, testable, single responsibility
class PriceCalculator {
  double calculateTotal(List<CartItem> items, {double taxRate = 0.1}) {
    final subtotal = items.fold(0.0, (sum, item) => sum + item.price * item.quantity);
    return subtotal * (1 + taxRate);
  }
}

// ❌ Bad: Mixed concerns, untestable, magic numbers
class CartScreen extends StatefulWidget {
  // Business logic mixed into widget...
  double getTotal() {
    var t = 0.0;
    for (var i in items) t += i.price * i.qty * 1.1; // What is 1.1?
    return t;
  }
}
```

## Testing expectations

| Layer | What to test | Minimum coverage |
|-------|-------------|------------------|
| Models | Serialization, equality, edge cases | All models |
| Business logic | Calculations, validation, state transitions | All logic classes |
| Repositories | API integration, error handling | Critical paths |
| Widgets | Key interactions, state changes | Main screens |

## API and data patterns

- Use the **repository pattern** to abstract data sources
- Handle loading, success, and error states explicitly
- Never call APIs directly from widgets
- Use `try/catch` at the repository level, not in UI code

:::caution Anti-patterns to avoid
- Calling `setState` from API callbacks in large screens
- Storing API responses as raw `Map<String, dynamic>`
- Mixing navigation logic with business logic
- Using `late` without null safety justification
:::

## Next steps

- [**Flutter Learning Path**](/docs/resources/flutter-learning-path) — The staged learning journey
- [**Knowledge System**](/docs/resources/knowledge-system) — How the portal is organized
- [**State & Architecture**](/docs/training/state-and-architecture) — Architecture training module
