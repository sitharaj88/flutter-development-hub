---
title: Flutter Core
description: Master Flutter's visual foundations — widget composition, layouts, navigation, forms, and reusable UI patterns.
keywords: [Flutter widgets, Flutter UI, widget tree, layouts, navigation, Flutter tutorial]
---

# Flutter Core

This is where learning becomes **visible**. Learners stop writing console logic and start creating interactive, visual applications. Flutter Core is not just "learn some widgets" — it's where you begin to **think in Flutter**.

:::info What you'll learn
How screens are built from smaller pieces · How layout choices affect usability · How input, state, and navigation create app behavior · How reusable structure keeps projects maintainable.
:::

## What learners achieve

After this module, learners can:

- Read common Flutter UI code **without feeling lost**
- Turn a screen design into a **widget tree**
- Build clean layouts with **predictable spacing**
- Capture and **validate user input**
- Implement **multi-screen navigation** flows
- Extract **reusable widgets** from complex screens

## Core concepts

### The widget tree

Everything in Flutter is a widget. Screens are built by **composing** smaller widgets into a tree:

```dart
Scaffold(
  appBar: AppBar(title: const Text('Profile')),
  body: Column(
    children: [
      const CircleAvatar(radius: 48, child: Icon(Icons.person, size: 48)),
      const SizedBox(height: 16),
      const Text('Sitharaj Seenivasan', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
      const Text('Flutter Engineer', style: TextStyle(color: Colors.grey)),
      const SizedBox(height: 24),
      ElevatedButton(onPressed: () {}, child: const Text('Edit Profile')),
    ],
  ),
)
```

:::tip Mental model
Don't think "I'm writing code." Think "I'm describing what the screen looks like." Flutter code **is** the UI — once you see it that way, the nesting makes sense.
:::

### Layout building blocks

| Widget | Purpose | When to use |
|--------|---------|------------|
| `Column` | Vertical arrangement | Stacking items top to bottom |
| `Row` | Horizontal arrangement | Items side by side |
| `Stack` | Layered arrangement | Overlapping elements |
| `Expanded` | Fill available space | Flexible sizing in Row/Column |
| `Padding` | Add space around a widget | Consistent spacing |
| `SizedBox` | Fixed size or gap | Spacing between widgets |
| `Container` | Combined decoration + sizing | Background, border, padding |

```dart
Row(
  children: [
    const CircleAvatar(child: Text('S')),
    const SizedBox(width: 12),
    Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text('Sitharaj', style: TextStyle(fontWeight: FontWeight.bold)),
          Text('Online', style: TextStyle(color: Colors.green, fontSize: 12)),
        ],
      ),
    ),
    IconButton(icon: const Icon(Icons.message), onPressed: () {}),
  ],
)
```

### Navigation

```dart
// Push to a new screen
Navigator.of(context).push(
  MaterialPageRoute(builder: (context) => const DetailScreen()),
);

// Pop back
Navigator.of(context).pop();

// Named routes (for larger apps)
Navigator.of(context).pushNamed('/details', arguments: item);
```

### Forms and validation

```dart
class LoginForm extends StatefulWidget {
  const LoginForm({super.key});

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
            validator: (value) {
              if (value == null || !value.contains('@')) {
                return 'Please enter a valid email';
              }
              return null;
            },
          ),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                // Process login
              }
            },
            child: const Text('Sign In'),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _emailController.dispose();
    super.dispose();
  }
}
```

### Stateless vs. Stateful

| Type | Use when | Example |
|------|----------|---------|
| `StatelessWidget` | UI doesn't change after build | Profile card, info display |
| `StatefulWidget` | UI changes based on interaction | Forms, counters, toggles |

```dart
// Stateless — displays data, never changes internally
class UserCard extends StatelessWidget {
  final String name;
  final String role;

  const UserCard({super.key, required this.name, required this.role});

  @override
  Widget build(BuildContext context) {
    return ListTile(title: Text(name), subtitle: Text(role));
  }
}
```

## Teaching approach

The best way to teach Flutter Core:

1. **Show the screen goal** — what it should look like
2. **Break it into visible parts** — identify the widget structure
3. **Map parts to widgets** — Column, Row, Text, Button...
4. **Code the minimal version** — get it on screen first
5. **Refine** — spacing, interaction, and extraction into reusable widgets

## Practical builds

| Build | Concepts practiced | Difficulty |
|-------|-------------------|------------|
| Profile card screen | Layout, spacing, composition | Beginner |
| Sign-in / Sign-up flow | Forms, validation, navigation | Beginner |
| Product list + detail | ListView, navigation, data passing | Intermediate |
| Settings screen with toggles | StatefulWidget, switches, persistence | Intermediate |
| Dashboard with tabs | TabBar, multiple screens, bottom nav | Intermediate |

## Common mistakes to avoid

:::caution Watch out for these
- **Container overuse** — Don't wrap everything in Container. Use `Padding`, `SizedBox`, or `DecoratedBox` for specific needs.
- **Giant `build()` methods** — If your build method is 100+ lines, extract widgets.
- **Magic numbers** — Don't hardcode `16.0` everywhere. Use theme values or constants.
- **Mixing logic in UI** — Keep business logic out of `build()`. Use separate methods or classes.
:::

## Next steps

- [**App Design & UX**](/docs/training/app-design-and-ux) — Make UI that's usable, not just functional
- [**Widget Tree Tutorial**](/docs/training/tutorials/widget-tree-and-composition) — Deep dive into composition
- [**Layouts Tutorial**](/docs/training/tutorials/layouts-and-constraints) — Master Flutter's layout system
