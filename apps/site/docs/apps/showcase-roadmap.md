---
title: Showcase Roadmap
description: Planned apps and code artifacts that demonstrate real Flutter engineering capability.
keywords: [Flutter showcase, demo apps, Flutter examples, portfolio apps]
---

# Showcase Roadmap

The `apps/` directory will hold working Flutter applications that prove engineering capability beyond documentation.

## Planned showcase apps

| Phase | App | Purpose | Status |
|-------|-----|---------|--------|
| **1** | Signature showcase app | Demonstrate UI quality, architecture, and data flow | 📋 Planned |
| **2** | Training lab starter | Guided exercises with feature milestones for learners | 📋 Planned |
| **3** | Architecture reference | Clean architecture patterns (Riverpod, repositories, testing) | 📋 Planned |
| **4** | Internal tooling | Practice operations (enquiry tracker, batch dashboard) | 📋 Planned |

## Phase 1: Signature showcase app

A single, polished application that demonstrates:

- **Material 3** theming with `ColorScheme.fromSeed`
- **GoRouter** navigation with deep linking
- **Riverpod** state management with code generation
- **Repository pattern** with dio and freezed models
- **Responsive design** across mobile, tablet, and desktop
- **Unit, widget, and integration tests** with CI/CD pipeline

**Candidate ideas:**
- Training platform demo with course catalog and progress tracking
- Productivity dashboard with task management and analytics
- Service booking flow with multi-step forms and confirmation

## Phase 2: Training lab starter

An app scaffolded for teaching:

- Feature milestone branches (`step-1-ui`, `step-2-state`, `step-3-api`)
- Guided exercises with `// TODO:` markers for learners
- Starter structure following [project conventions](/docs/resources/engineering-standards)
- Room for assignments and extension tasks
- Accompanying tutorial documentation

## Phase 3: Architecture reference

A production-style codebase focused on:

- **Feature-based module structure** with clean boundaries
- **Repository pattern** with abstract interfaces and API implementations
- **Sealed class state modeling** with exhaustive switch handling
- **Testing strategy** — unit, widget, golden, and integration tests
- **CI/CD pipeline** with GitHub Actions
- **Code generation** with freezed, json_serializable, and riverpod_generator

## Phase 4: Internal tooling

Tools that support the practice itself:

| Tool | Purpose |
|------|---------|
| Enquiry tracker | Manage incoming training and consulting enquiries |
| Training batch dashboard | Track cohort progress, assignments, and outcomes |
| Evaluation system | Structured learner assessment and review |

## Technical standards for all showcase apps

Every app in the showcase follows the same engineering standards:

- Dart 3.x with sealed classes, patterns, and records
- Material 3 components and theming
- Riverpod for state management
- `very_good_analysis` for linting
- Feature-based project structure
- Minimum 80% test coverage on business logic
- README with setup instructions and architecture diagram

## Next steps

- [**Engineering Standards**](/docs/resources/engineering-standards) — Quality conventions for all code
- [**Engineering Roadmap**](/docs/flutter-development/engineering-roadmap) — Platform growth plan
- [**Tools & Stack**](/docs/training/tools-and-stack) — Development toolchain reference
