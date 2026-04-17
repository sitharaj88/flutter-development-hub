---
title: Project Structure and Feature Modules
description: Organizing Flutter projects by feature for clarity, scalability, and team collaboration.
keywords: [Flutter project structure, feature modules, folder organization, clean architecture]
---

# Project Structure and Feature Modules

As soon as an app grows past a demo, folder structure directly affects delivery speed and code quality.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- organize Flutter code by feature instead of file type
- separate UI, data, and logic within each feature
- set up a scalable project structure from the start
- understand how structure affects team collaboration

## The problem: type-based structure

Beginners often organize by file type:

```
lib/
├── models/
│   ├── user.dart
│   ├── product.dart
│   └── order.dart
├── screens/
│   ├── login_screen.dart
│   ├── product_list_screen.dart
│   └── order_screen.dart
├── widgets/
│   ├── user_avatar.dart
│   ├── product_card.dart
│   └── order_summary.dart
└── services/
    ├── auth_service.dart
    ├── product_service.dart
    └── order_service.dart
```

**Why this breaks down:** To work on the "products" feature, you need to touch 4 different folders. Related files are scattered.

## The solution: feature-based structure

```
lib/
├── app/
│   ├── app.dart
│   ├── router.dart
│   └── theme.dart
├── features/
│   ├── auth/
│   │   ├── data/
│   │   │   ├── auth_repository.dart
│   │   │   └── auth_api_client.dart
│   │   ├── models/
│   │   │   └── user.dart
│   │   ├── providers/
│   │   │   └── auth_provider.dart
│   │   └── ui/
│   │       ├── login_screen.dart
│   │       └── widgets/
│   │           └── login_form.dart
│   ├── products/
│   │   ├── data/
│   │   │   └── product_repository.dart
│   │   ├── models/
│   │   │   └── product.dart
│   │   ├── providers/
│   │   │   └── products_provider.dart
│   │   └── ui/
│   │       ├── product_list_screen.dart
│   │       ├── product_detail_screen.dart
│   │       └── widgets/
│   │           ├── product_card.dart
│   │           └── product_grid.dart
│   └── cart/
│       ├── data/
│       ├── models/
│       ├── providers/
│       └── ui/
└── shared/
    ├── models/
    │   └── api_exception.dart
    ├── providers/
    │   └── dio_provider.dart
    └── widgets/
        ├── app_bar.dart
        └── error_view.dart
```

## Layer responsibilities

| Layer | Folder | Contains |
|-------|--------|----------|
| **UI** | `ui/` | Screens, widgets, page-level layout |
| **Providers** | `providers/` | Riverpod providers — state and business logic |
| **Data** | `data/` | Repositories, API clients — data access |
| **Models** | `models/` | Data classes (often with `freezed`) |

## Shared code

Code used across multiple features goes in `shared/`:

```dart
// lib/shared/widgets/error_view.dart
class ErrorView extends StatelessWidget {
  final String message;
  final VoidCallback? onRetry;

  const ErrorView({super.key, required this.message, this.onRetry});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(message, style: Theme.of(context).textTheme.bodyLarge),
          if (onRetry != null) ...[
            const SizedBox(height: 16),
            FilledButton.icon(
              onPressed: onRetry,
              icon: const Icon(Icons.refresh),
              label: const Text('Retry'),
            ),
          ],
        ],
      ),
    );
  }
}
```

## Scaffolding with very_good_cli

Start with a well-structured project from the beginning:

```bash
# Install the CLI
dart pub global activate very_good_cli

# Create a new project with opinionated structure
very_good create flutter_app my_app
```

This generates a project with:
- Feature-based folder structure
- `very_good_analysis` linting rules
- Test scaffolding
- CI/CD configuration

## Rules of thumb

| Guideline | Reason |
|-----------|--------|
| One feature = one folder | Everything related is together |
| Features don't import from each other's `data/` | Keeps coupling low |
| Shared code must be truly shared | Don't move code to `shared/` preemptively |
| Keep `main.dart` minimal | App setup only, delegate to `app/` |
| Don't create folders you don't need yet | Add structure as complexity grows |

## Common mistakes

- Creating deep folder hierarchies for a 3-screen app
- Putting everything in `shared/` because it's "reusable"
- Mixing feature-specific widgets into a global `widgets/` folder
- Using folder names that the team can't explain clearly
- Importing across features at the data layer (creates hidden coupling)

## Practice exercises

1. Restructure a flat `lib/` folder into feature-based modules
2. Move a shared widget from a feature folder to `shared/widgets/`
3. Create a new feature module with `data/`, `models/`, `providers/`, `ui/` layers
4. Set up a project using `very_good_cli` and explore the generated structure
