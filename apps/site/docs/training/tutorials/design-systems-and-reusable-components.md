---
title: Design Systems and Reusable Components
description: Building consistent Flutter UI with Material 3 theming, reusable widgets, and a shared design language.
keywords: [Flutter design system, reusable components, Material 3, theme, widget library]
---

# Design Systems and Reusable Components

Once learners can build individual screens, they need to learn how to keep apps **consistent** as they grow.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- build a Material 3 theme that enforces consistency
- create reusable widget components
- apply a spacing and typography scale
- understand how design systems improve team speed and product quality

## Material 3 theme as your design system foundation

```dart
// lib/app/theme.dart
ThemeData buildAppTheme() {
  final colorScheme = ColorScheme.fromSeed(
    seedColor: const Color(0xFF6750A4),
    brightness: Brightness.light,
  );

  return ThemeData(
    useMaterial3: true,
    colorScheme: colorScheme,
    textTheme: const TextTheme(
      headlineMedium: TextStyle(fontWeight: FontWeight.w600),
      titleLarge: TextStyle(fontWeight: FontWeight.w500),
    ),
    cardTheme: CardThemeData(
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
        side: BorderSide(color: colorScheme.outlineVariant),
      ),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
      ),
    ),
  );
}
```

## Reusable components

### Status badge

```dart
class StatusBadge extends StatelessWidget {
  final String label;
  final Color color;

  const StatusBadge({super.key, required this.label, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Text(
        label,
        style: Theme.of(context).textTheme.labelSmall?.copyWith(color: color),
      ),
    );
  }
}
```

### Info card

```dart
class InfoCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final IconData icon;
  final VoidCallback? onTap;

  const InfoCard({
    super.key,
    required this.title,
    required this.subtitle,
    required this.icon,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Card(
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Row(
            children: [
              CircleAvatar(
                backgroundColor: colorScheme.primaryContainer,
                child: Icon(icon, color: colorScheme.onPrimaryContainer),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: Theme.of(context).textTheme.titleMedium),
                    const SizedBox(height: 4),
                    Text(
                      subtitle,
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: colorScheme.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
              ),
              if (onTap != null)
                Icon(Icons.chevron_right, color: colorScheme.outline),
            ],
          ),
        ),
      ),
    );
  }
}
```

### Empty state

```dart
class EmptyState extends StatelessWidget {
  final String message;
  final IconData icon;
  final String? actionLabel;
  final VoidCallback? onAction;

  const EmptyState({
    super.key,
    required this.message,
    this.icon = Icons.inbox_outlined,
    this.actionLabel,
    this.onAction,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 64, color: Theme.of(context).colorScheme.outline),
          const SizedBox(height: 16),
          Text(message, style: Theme.of(context).textTheme.bodyLarge),
          if (actionLabel != null && onAction != null) ...[
            const SizedBox(height: 16),
            FilledButton(onPressed: onAction, child: Text(actionLabel!)),
          ],
        ],
      ),
    );
  }
}
```

## Component inventory checklist

Before building custom components, audit your screens:

| Component | Appears on | Should it be shared? |
|-----------|-----------|---------------------|
| Product card | Product list, search results, favorites | **Yes** — exact same pattern |
| Section heading | Home, profile, settings | **Yes** — consistent styling |
| Loading indicator | Every screen with async data | **Yes** — one pattern |
| Error + retry view | Every screen with async data | **Yes** — shared widget |
| Empty state | Lists, search, favorites | **Yes** — parameterized |

## Where to put shared components

```
lib/
├── shared/
│   ├── widgets/
│   │   ├── status_badge.dart
│   │   ├── info_card.dart
│   │   ├── empty_state.dart
│   │   └── error_view.dart
│   └── theme/
│       ├── app_theme.dart
│       └── app_spacing.dart
└── features/
    └── products/
        └── ui/
            └── widgets/
                └── product_card.dart   ← feature-specific
```

## Common mistakes

- Creating reusable components too late — inconsistency has already spread
- Making components so generic they become hard to use (too many parameters)
- Treating reuse as only code reuse, not design consistency
- Hardcoding colors and text styles instead of using `Theme.of(context)`
- Not using `const` constructors on stateless components

## Practice exercises

1. Create a Material 3 theme with `ColorScheme.fromSeed` and apply it to an app
2. Build a reusable `InfoCard` widget and use it on three different screens
3. Audit a 4-screen app: identify repeated patterns and extract shared widgets
4. Create an `EmptyState` and `ErrorView` widget and use them across all async screens
