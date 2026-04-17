---
title: Curriculum
description: A complete 8-module Flutter curriculum from programming fundamentals to capstone delivery.
keywords: [Flutter curriculum, Dart syllabus, Flutter modules, training structure]
---

# Curriculum

The curriculum is a **complete learning ladder** from programming foundations to professional app delivery. Each module builds on the previous one, with clear entry requirements, learning outcomes, and practical deliverables.

:::info Design principles
- Foundations come before framework complexity
- Syntax is always tied to real implementation meaning
- Design is taught alongside development, not after it
- Architecture and quality appear early enough to change habits
- Capstone work proves learning, not just attendance
:::

## Module overview

| Module | Title | Duration | Key outcome |
|--------|-------|----------|-------------|
| 1 | Programming Fundamentals | ~1 week | Logic confidence and code-reading ability |
| 2 | Dart for App Development | ~1.5 weeks | Language mastery for Flutter work |
| 3 | Flutter Core | ~1.5 weeks | Widget composition and screen building |
| 4 | App Design & UX | ~1 week | Usable, scannable, responsive interfaces |
| 5 | State & Architecture | ~1 week | Maintainable app structure |
| 6 | Backend & Data | ~1 week | API integration and data persistence |
| 7 | Testing & Release | ~1 week | Quality habits and deployment readiness |
| 8 | Capstone | ~1–2 weeks | Complete app with justified decisions |

---

## Module 1: Programming Fundamentals

**Purpose:** Build logic confidence before Flutter complexity appears.

**Key topics:**
- Variables, conditions, loops, and functions
- Step-by-step problem solving and computational thinking
- Debugging mindset and code reading

**Expected outcome:** Learners can reason through small programming problems and explain simple logic clearly.

**Sample exercise:**
```dart
// Write a function that checks if a number is prime
bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
```

---

## Module 2: Dart for App Development

**Purpose:** Build the language foundation behind Flutter.

**Key topics:**
- Types, null safety, functions, collections, and classes
- Async programming with `Future`, `async`, and `await`
- JSON modeling and clean code organization

**Expected outcome:** Learners can model app data, write reusable logic, and read Flutter-oriented Dart confidently.

**Sample exercise:**
```dart
class User {
  final String name;
  final String email;
  final DateTime joinedAt;

  const User({required this.name, required this.email, required this.joinedAt});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      name: json['name'] as String,
      email: json['email'] as String,
      joinedAt: DateTime.parse(json['joined_at'] as String),
    );
  }

  String get displayName => name.isNotEmpty ? name : email.split('@').first;
}
```

---

## Module 3: Flutter Core

**Purpose:** Teach the visual and structural foundations of Flutter apps.

**Key topics:**
- Widget tree and composition patterns
- Layouts with `Row`, `Column`, `Stack`, `Expanded`, and constraints
- Forms, navigation, and local interactions
- Reusable UI patterns and widget extraction

**Expected outcome:** Learners can build structured screens, complete app flows, and reusable components.

---

## Module 4: App Design & UX

**Purpose:** Move learners from working UI to usable UI.

**Key topics:**
- User flow planning and wireframing
- Visual hierarchy, spacing, and readability
- Responsive layouts for different screen sizes
- Loading, empty, error, and success states
- Design systems and component consistency

**Expected outcome:** Learners create interfaces that are easier to use, scan, and maintain.

---

## Module 5: State & Architecture

**Purpose:** Move from demo apps toward maintainable app structure.

**Key topics:**
- Local versus shared state decisions
- Provider, Riverpod, or Bloc patterns
- Feature-based project organization
- Separation of UI, logic, and data responsibilities

**Expected outcome:** Learners begin structuring medium-sized apps with clear architecture boundaries.

---

## Module 6: Backend & Data

**Purpose:** Connect Flutter apps to real-world data and persistence.

**Key topics:**
- REST API integration with `http` or `dio`
- JSON serialization and model mapping
- Authentication flows and token management
- Local persistence with `shared_preferences` and SQLite
- Repository pattern and clean data flow

**Expected outcome:** Learners can connect apps to data sources with confidence and proper architecture.

---

## Module 7: Testing & Release

**Purpose:** Improve reliability, debugging quality, and release discipline.

**Key topics:**
- Unit testing with `test` package
- Widget testing fundamentals
- Debugging workflow and DevTools
- Performance awareness and common pitfalls
- Release builds, signing, and deployment basics

**Expected outcome:** Learners develop professional quality habits and deployment confidence.

**Sample test:**
```dart
import 'package:test/test.dart';

void main() {
  group('User model', () {
    test('displayName falls back to email prefix', () {
      final user = User(name: '', email: 'dev@example.com', joinedAt: DateTime.now());
      expect(user.displayName, equals('dev'));
    });
  });
}
```

---

## Module 8: Capstone

**Purpose:** Turn the entire curriculum into visible proof of understanding.

**Key topics:**
- Project scoping and feature planning
- End-to-end app execution with all learned patterns
- Design and architecture decision documentation
- Presentation, review, and refinement

**Expected outcome:** Learners produce a meaningful project artifact that demonstrates their full capability growth.

:::tip Capstone examples
- Task management app with categories, priorities, and local persistence
- Weather dashboard with API integration and location-based data
- Expense tracker with charts, filtering, and data export
- Mini e-commerce flow with product listing, cart, and checkout
:::

## Delivery formats

The curriculum adapts to different contexts:

- **Student cohort** — Full 8 modules over 8–12 weeks
- **Corporate enablement** — Modules 3–7 focused on team needs
- **Institutional bootcamp** — Intensive 2–3 week compressed format
- **Blended learning + implementation** — Curriculum alongside real project delivery
