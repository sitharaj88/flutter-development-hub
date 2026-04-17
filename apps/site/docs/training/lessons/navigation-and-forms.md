---
title: Navigation and Forms
description: Building multi-screen flows with GoRouter and handling user input with form validation.
keywords: [Flutter navigation, GoRouter, Flutter forms, form validation, user flow]
---

# Navigation and Forms

Most useful apps need screen flow and input handling. This lesson ties them together.

## Lesson goal

- implement declarative navigation with GoRouter
- build forms with proper validation
- design multi-screen flows (login, signup, detail)
- handle loading, success, and error states in forms

## GoRouter navigation

```dart
import 'package:go_router/go_router.dart';

final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
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
// Navigate
context.go('/');                  // Replace current route
context.push('/product/123');     // Push onto stack
context.pop();                    // Go back
```

## Form validation

```dart
class ContactForm extends StatefulWidget {
  const ContactForm({super.key});

  @override
  State<ContactForm> createState() => _ContactFormState();
}

class _ContactFormState extends State<ContactForm> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    super.dispose();
  }

  void _submit() {
    if (_formKey.currentState!.validate()) {
      // Process form data
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Form submitted')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _nameController,
            decoration: const InputDecoration(labelText: 'Name'),
            validator: (value) {
              if (value == null || value.trim().isEmpty) {
                return 'Name is required';
              }
              return null;
            },
          ),
          const SizedBox(height: 16),
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
            keyboardType: TextInputType.emailAddress,
            validator: (value) {
              if (value == null || !value.contains('@')) {
                return 'Enter a valid email';
              }
              return null;
            },
          ),
          const SizedBox(height: 24),
          FilledButton(
            onPressed: _submit,
            child: const Text('Submit'),
          ),
        ],
      ),
    );
  }
}
```

## Connecting navigation and forms

A login flow that validates, submits, and navigates:

```dart
Future<void> _login() async {
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
```

## Flow design checklist

| Element | Question |
|---------|---------|
| **Screen sequence** | What screens does the user pass through? |
| **Validation** | What input rules apply to each field? |
| **Loading state** | What happens during submission? |
| **Success** | Where does the user go on success? |
| **Error** | How is the error shown? Can the user retry? |

## Common mistakes

- Using `Navigator.push` and `go_router` in the same app (pick one)
- Not disposing `TextEditingController` instances
- Forgetting `mounted` check after async operations
- Only coding the happy path — no error or loading feedback

## Practice exercises

1. Set up GoRouter with 3 routes: home, product list, product detail
2. Build a contact form with name and email validation
3. Create a login flow that navigates to home on success and shows error on failure
4. Pass a product ID as a route parameter and display the detail
