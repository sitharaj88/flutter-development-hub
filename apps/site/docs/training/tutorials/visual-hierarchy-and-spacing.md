---
title: Visual Hierarchy and Spacing
description: Making Flutter app screens easier to scan with intentional hierarchy, spacing, and Material 3 typography.
keywords: [Flutter UI design, visual hierarchy, spacing, Material 3 typography, layout]
---

# Visual Hierarchy and Spacing

Good design looks simple, but that simplicity is created through **clear visual hierarchy** and **disciplined spacing**.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- use heading hierarchy and typography to guide the eye
- apply consistent spacing with a spacing scale
- group related content and separate distinct sections
- identify why a layout feels cluttered even when the code works

## Visual hierarchy rules

| Principle | Technique | Example |
|-----------|-----------|--------|
| **One focal point** | Largest text or boldest element | Screen title |
| **Grouped content** | Smaller spacing within groups | Form fields |
| **Separated sections** | Larger spacing between groups | Sections on a page |
| **Muted secondary info** | Lighter color, smaller text | Timestamps, captions |
| **One primary action** | Filled button, prominent placement | "Submit" button |

## Material 3 typography hierarchy

```dart
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Product Details',
      style: Theme.of(context).textTheme.headlineMedium,
    ),
    const SizedBox(height: 8),
    Text(
      'Premium Wireless Headphones',
      style: Theme.of(context).textTheme.titleLarge,
    ),
    const SizedBox(height: 4),
    Text(
      '\$249.99',
      style: Theme.of(context).textTheme.titleMedium?.copyWith(
        color: Theme.of(context).colorScheme.primary,
      ),
    ),
    const SizedBox(height: 16),
    Text(
      'Noise-cancelling headphones with 30-hour battery life '
      'and premium audio quality.',
      style: Theme.of(context).textTheme.bodyLarge?.copyWith(
        color: Theme.of(context).colorScheme.onSurfaceVariant,
      ),
    ),
  ],
)
```

## Spacing scale

Use consistent spacing values instead of random pixel counts:

```dart
// Define a spacing scale
abstract class AppSpacing {
  static const double xs = 4;
  static const double sm = 8;
  static const double md = 16;
  static const double lg = 24;
  static const double xl = 32;
  static const double xxl = 48;
}
```

```dart
// ❌ Random spacing — inconsistent feel
Padding(padding: EdgeInsets.only(top: 13, left: 7, bottom: 22))

// ✅ Scale-based spacing — consistent rhythm
Padding(padding: EdgeInsets.symmetric(
  horizontal: AppSpacing.md,
  vertical: AppSpacing.lg,
))
```

## Card with proper hierarchy

```dart
Card(
  child: Padding(
    padding: const EdgeInsets.all(AppSpacing.md),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Primary info — catches the eye first
        Text('Flutter Workshop', style: textTheme.titleMedium),
        const SizedBox(height: AppSpacing.xs),

        // Secondary info — supports the title
        Text(
          'March 15–17, 2025 • Online',
          style: textTheme.bodyMedium?.copyWith(
            color: colorScheme.onSurfaceVariant,
          ),
        ),
        const SizedBox(height: AppSpacing.sm),

        // Tertiary info — least prominent
        Text(
          '24 seats remaining',
          style: textTheme.bodySmall?.copyWith(
            color: colorScheme.outline,
          ),
        ),
        const SizedBox(height: AppSpacing.md),

        // Action — clear and prominent
        FilledButton(
          onPressed: () {},
          child: const Text('Register'),
        ),
      ],
    ),
  ),
)
```

## Spacing within vs. between

| Context | Spacing | Value |
|---------|---------|-------|
| Between label and input | Tight | `4–8 px` |
| Between form fields | Medium | `16 px` |
| Between sections | Large | `24–32 px` |
| Page padding | Consistent | `16–24 px` |
| Between cards in a list | Medium | `12–16 px` |

## Common mistakes

- Using inconsistent spacing values (`13px` here, `17px` there)
- Making headings, labels, and body text the same size and weight
- Placing unrelated items too close together (false grouping)
- Adding color or decoration when spacing was the real problem
- Using `SizedBox(height: 10)` everywhere instead of a spacing scale

## Practice exercises

1. Take a screen with uniform text sizes and add a clear heading → title → body hierarchy
2. Create a spacing constants class and apply it to a form screen
3. Compare two versions of the same card: one with random spacing, one with a consistent scale
4. Build a settings screen where sections are visually grouped using spacing alone (no dividers)
