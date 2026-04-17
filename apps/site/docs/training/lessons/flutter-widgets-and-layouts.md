---
title: Flutter Widgets and Layouts
description: Building Flutter screens with the widget tree, core layout patterns, and Material 3 components.
keywords: [Flutter widgets, Flutter layout, widget tree, Row, Column, Material 3]
---

# Flutter Widgets and Layouts

Everything in Flutter is built from widgets. This lesson teaches how to compose them into real screens.

## Lesson goal

- understand the widget tree and composition
- build layouts with `Row`, `Column`, `Stack`, and `Expanded`
- use Material 3 components for professional UI
- extract reusable widgets from repeated patterns

## Basic widget composition

```dart
class ProfileCard extends StatelessWidget {
  final String name;
  final String email;

  const ProfileCard({super.key, required this.name, required this.email});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            CircleAvatar(child: Text(name[0])),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(name, style: Theme.of(context).textTheme.titleMedium),
                  Text(
                    email,
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: Theme.of(context).colorScheme.onSurfaceVariant,
                    ),
                  ),
                ],
              ),
            ),
            const Icon(Icons.chevron_right),
          ],
        ),
      ),
    );
  }
}
```

## Core layout widgets

| Widget | Purpose | Key behavior |
|--------|---------|-------------|
| `Column` | Vertical layout | Children stack top-to-bottom |
| `Row` | Horizontal layout | Children flow left-to-right |
| `Stack` | Overlapping layout | Children layered on top of each other |
| `Expanded` | Fill remaining space | Takes up available room in Row/Column |
| `SizedBox` | Fixed spacing | Precise gaps between elements |
| `Padding` | Inner spacing | Space between a widget and its container |

## Dashboard layout example

```dart
class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Dashboard')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Overview', style: Theme.of(context).textTheme.headlineSmall),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(child: _StatCard(label: 'Courses', value: '12')),
                const SizedBox(width: 12),
                Expanded(child: _StatCard(label: 'Students', value: '248')),
                const SizedBox(width: 12),
                Expanded(child: _StatCard(label: 'Hours', value: '86')),
              ],
            ),
            const SizedBox(height: 24),
            Text('Recent Activity', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 12),
            Expanded(
              child: ListView.builder(
                itemCount: 10,
                itemBuilder: (context, index) => ListTile(
                  leading: const Icon(Icons.article),
                  title: Text('Activity item ${index + 1}'),
                  subtitle: const Text('2 hours ago'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _StatCard extends StatelessWidget {
  final String label;
  final String value;

  const _StatCard({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Text(value, style: Theme.of(context).textTheme.headlineMedium),
            const SizedBox(height: 4),
            Text(label, style: Theme.of(context).textTheme.bodySmall),
          ],
        ),
      ),
    );
  }
}
```

## Widget extraction rule

When you see **repeated patterns**, extract a widget:

```dart
// ❌ Repeated code
Card(child: Padding(padding: EdgeInsets.all(16), child: Text('Item 1')))
Card(child: Padding(padding: EdgeInsets.all(16), child: Text('Item 2')))
Card(child: Padding(padding: EdgeInsets.all(16), child: Text('Item 3')))

// ✅ Extracted reusable widget
class ItemCard extends StatelessWidget {
  final String title;
  const ItemCard({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Text(title),
      ),
    );
  }
}
```

## Practice exercises

1. Build a profile card with avatar, name, email, and a trailing icon
2. Create a dashboard layout with a stats row and a scrollable list
3. Extract a repeated card pattern into a reusable widget
4. Use `Stack` to overlay a badge on top of an avatar
