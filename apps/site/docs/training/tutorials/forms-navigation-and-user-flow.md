---
title: Forms, Navigation, and User Flow
description: Building connected user flows with GoRouter navigation and form validation in Flutter.
keywords: [Flutter forms, GoRouter, navigation, user flow, form validation]
---

# Forms, Navigation, and User Flow

Apps are not just screens — they are **journeys**. This tutorial connects navigation and form behavior into complete user experiences.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- build forms with proper validation and feedback
- implement declarative navigation with GoRouter
- design flows that feel connected rather than fragmented
- handle loading, success, and error states in form submissions

## Setting up GoRouter

```dart
// lib/app/router.dart
import 'package:go_router/go_router.dart';

final router = GoRouter(
  initialLocation: '/login',
  routes: [
    GoRoute(
      path: '/login',
      builder: (context, state) => const LoginScreen(),
    ),
    GoRoute(
      path: '/home',
      builder: (context, state) => const HomeScreen(),
    ),
    GoRoute(
      path: '/product/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        return ProductDetailScreen(productId: id);
      },
    ),
  ],
);
```

```dart
// Navigate programmatically
context.go('/home');           // Replace current route
context.push('/product/123');  // Push onto stack
context.pop();                 // Go back
```

## Building a login form

```dart
class LoginForm extends StatefulWidget {
  const LoginForm({super.key});

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _isLoading = false;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() => _isLoading = true);

    try {
      await authRepository.login(
        _emailController.text.trim(),
        _passwordController.text,
      );
      if (mounted) context.go('/home');
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Login failed: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            key: const Key('email'),
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
            keyboardType: TextInputType.emailAddress,
            validator: (value) {
              if (value == null || value.trim().isEmpty) {
                return 'Email is required';
              }
              if (!value.contains('@')) return 'Enter a valid email';
              return null;
            },
          ),
          const SizedBox(height: 16),
          TextFormField(
            key: const Key('password'),
            controller: _passwordController,
            decoration: const InputDecoration(labelText: 'Password'),
            obscureText: true,
            validator: (value) {
              if (value == null || value.length < 6) {
                return 'Password must be at least 6 characters';
              }
              return null;
            },
          ),
          const SizedBox(height: 24),
          FilledButton(
            onPressed: _isLoading ? null : _submit,
            child: _isLoading
                ? const SizedBox(
                    height: 20,
                    width: 20,
                    child: CircularProgressIndicator(strokeWidth: 2),
                  )
                : const Text('Sign In'),
          ),
        ],
      ),
    );
  }
}
```

## Good validation patterns

| Pattern | Example |
|---------|---------|
| **Real-time feedback** | Validate on field change, show error immediately |
| **On-submit validation** | Validate all fields when the user taps Submit |
| **Inline errors** | Show error text below the specific field |
| **Disabled submit** | Disable the button until required fields are filled |
| **Loading state** | Show spinner and disable form during submission |

:::tip Validation timing
Validate on submit first, then switch to real-time validation for fields the user already attempted. This avoids showing errors before the user has finished typing.
:::

## Multi-step flow example

```dart
// GoRouter with nested routes for a multi-step flow
GoRoute(
  path: '/onboarding',
  builder: (context, state) => const OnboardingShell(),
  routes: [
    GoRoute(
      path: 'profile',
      builder: (context, state) => const ProfileStep(),
    ),
    GoRoute(
      path: 'preferences',
      builder: (context, state) => const PreferencesStep(),
    ),
    GoRoute(
      path: 'complete',
      builder: (context, state) => const CompleteStep(),
    ),
  ],
),
```

Navigate through steps:
```dart
// In ProfileStep
context.go('/onboarding/preferences');

// In PreferencesStep
context.go('/onboarding/complete');
```

## Common mistakes

- Validating only after full submission when earlier guidance would help
- Navigating without preserving form data in a multi-step flow
- Forgetting to check `mounted` before calling `setState` after async operations
- Not disposing `TextEditingController` instances (causes memory leaks)
- Building forms that technically work but give no feedback during loading or errors
- Using `Navigator.push` instead of GoRouter (mixes navigation approaches)

## Practice exercises

1. Build a login form with email/password validation and loading state
2. Create a multi-step registration flow (profile → preferences → confirmation)
3. Add route parameters to display product details from a list tap
4. Handle form submission errors with user-friendly SnackBar messages
