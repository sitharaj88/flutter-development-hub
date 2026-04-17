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
| Constants | `camelCase` | `maxRetryCount`, `apiBaseUrl` |
| Screens | Suffix with `Screen` | `LoginScreen`, `HomeScreen` |
| Widgets | Descriptive, noun-based | `UserCard`, `PriceTag` |
| Models | Domain noun | `User`, `Product`, `Order` |
| Repositories | Suffix with `Repository` | `UserRepository` |
| Providers/Notifiers | Suffix with role | `AuthProvider`, `CartNotifier` |

## State management

| Principle | Guideline |
|-----------|----------|
| Scope | Keep state as local as possible |
| Immutability | Use immutable models with `copyWith` (preferably via `freezed`) |
| Separation | Business logic out of `build()` methods |
| Pattern | **Riverpod** recommended for new projects; Bloc as enterprise alternative |
| State modeling | Use Dart 3 sealed classes for exhaustive state representation |
| Testing | State logic must be testable without widgets |

## Linting and analysis

Every project must have strict linting configured:

```yaml
# analysis_options.yaml
include: package:very_good_analysis/analysis_options.yaml

linter:
  rules:
    prefer_const_constructors: true
    prefer_const_declarations: true
    avoid_print: true
    require_trailing_commas: true
```

Run analysis as part of every PR: `flutter analyze --fatal-infos`

## Code generation

Use code generation to eliminate boilerplate:

| Tool | Purpose | Command |
|------|---------|--------|
| `freezed` | Immutable models with `copyWith`, `==`, JSON | `dart run build_runner build` |
| `json_serializable` | JSON serialization only | `dart run build_runner build` |
| `riverpod_generator` | Type-safe provider generation | `dart run build_runner build` |
| `auto_route_generator` | Type-safe route generation | `dart run build_runner build` |

## Dart 3 conventions

| Feature | When to use |
|---------|------------|
| **Sealed classes** | State representation, API results, exhaustive type sets |
| **Records** | Returning multiple values, lightweight data without classes |
| **Patterns** | Switch expressions, JSON destructuring, list matching |
| **Class modifiers** (`final`, `base`, `interface`) | Library API design, controlling inheritance |
| **Switch expressions** | Replace verbose `switch` statements with expressions |

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
| Integration | Complete user flows | Happy path + key error paths |
| Golden | Visual regression of key components | Design-system components |

## API and data patterns

- Use the **repository pattern** to abstract data sources
- Handle loading, success, error, and empty states explicitly using **sealed classes**
- Never call APIs directly from widgets
- Use `try/catch` at the repository level, not in UI code
- Use `dio` for HTTP with interceptors for auth tokens and logging
- Use `freezed` models for API responses in production code

## Performance standards

| Area | Standard |
|------|----------|
| Frame rate | 60fps minimum on target devices |
| Widget rebuilds | Only affected subtrees should rebuild |
| `const` usage | All static widget subtrees must use `const` |
| Image handling | Cached, appropriately sized, with loading placeholders |
| List views | Always use `ListView.builder` for dynamic lists |
| Impeller | Default renderer — verify smooth rendering on target platforms |

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
