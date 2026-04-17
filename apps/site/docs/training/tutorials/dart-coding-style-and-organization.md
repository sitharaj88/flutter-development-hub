---
title: Dart Coding Style and Organization
description: Writing clean, readable Dart with modern conventions, effective linting, and sensible code organization.
keywords: [Dart style guide, Dart conventions, code organization, linting, very_good_analysis]
---

# Dart Coding Style and Organization

Readable code is professional code. This tutorial covers the conventions that make Dart projects clean and maintainable.

## Naming conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Classes, enums, typedefs | `UpperCamelCase` | `ProductRepository`, `AuthState` |
| Variables, functions, parameters | `lowerCamelCase` | `fetchProducts`, `isLoading` |
| Constants | `lowerCamelCase` | `defaultPadding`, `maxRetries` |
| Libraries, files | `snake_case` | `product_repository.dart` |
| Private members | Leading underscore | `_isInitialized`, `_cache` |

:::warning Constants are camelCase in Dart
Unlike Java or C, Dart uses `lowerCamelCase` for constants — not `SCREAMING_SNAKE_CASE`.
```dart
// ❌ Wrong
const MAX_RETRY_COUNT = 3;

// ✅ Correct
const maxRetryCount = 3;
```
:::

## Naming for clarity

```dart
// ❌ Unclear names
String doStuff(String s) {
  return s.trim().toLowerCase();
}

List<dynamic> get(String t) { ... }

// ✅ Names that explain intent
String normalizeEmail(String email) {
  return email.trim().toLowerCase();
}

Future<List<Product>> fetchProductsByCategory(String category) { ... }
```

## Linting with very_good_analysis

Set up strict linting from the start:

```yaml
# analysis_options.yaml
include: package:very_good_analysis/analysis_options.yaml

linter:
  rules:
    public_member_api_docs: false  # Optional: relax for app code
```

This enforces:
- `prefer_const_constructors`
- `always_use_package_imports`
- `avoid_dynamic_calls`
- `unawaited_futures`
- And 100+ other production-quality rules

## Code organization within a file

```dart
// 1. Imports (sorted: dart, package, relative)
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../models/product.dart';
import 'widgets/product_card.dart';

// 2. Part directives (for code generation)
part 'products_provider.g.dart';

// 3. Constants
const _defaultPageSize = 20;

// 4. Main class/function
@riverpod
class Products extends _$Products {
  @override
  Future<List<Product>> build() => _fetch();

  Future<List<Product>> _fetch() async { ... }
}
```

## Function design

```dart
// ❌ One function doing too much
Future<void> handleLogin(String email, String password) async {
  final trimmed = email.trim().toLowerCase();
  if (!trimmed.contains('@')) throw Exception('Invalid');
  final response = await dio.post('/auth', data: {'email': trimmed, 'password': password});
  final token = response.data['token'];
  await secureStorage.write(key: 'token', value: token);
  await loadUserProfile();
  navigateToHome();
}

// ✅ Small, focused functions
String normalizeEmail(String email) => email.trim().toLowerCase();

void validateEmail(String email) {
  if (!email.contains('@')) throw const FormatException('Invalid email');
}

Future<String> authenticate(String email, String password) async {
  final response = await dio.post('/auth', data: {
    'email': email,
    'password': password,
  });
  return response.data['token'] as String;
}

Future<void> persistToken(String token) async {
  await secureStorage.write(key: 'token', value: token);
}
```

## Modern Dart 3 style

```dart
// Use switch expressions instead of if/else chains
String statusLabel(OrderStatus status) => switch (status) {
  OrderStatus.pending => 'Pending',
  OrderStatus.shipped => 'Shipped',
  OrderStatus.delivered => 'Delivered',
  OrderStatus.cancelled => 'Cancelled',
};

// Use records for multiple return values
(String name, int age) parseProfile(Map<String, dynamic> json) {
  return (json['name'] as String, json['age'] as int);
}

// Use patterns for destructuring
final (name, age) = parseProfile(data);
```

## Import organization

```dart
// ✅ Sorted by: dart → package → relative
import 'dart:convert';
import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../shared/models/api_exception.dart';
import '../models/product.dart';
```

Use `package:` imports for your own app code (not relative) when `always_use_package_imports` is enabled.

## Common mistakes

- Using `SCREAMING_SNAKE_CASE` for constants (Dart uses camelCase)
- Mixing relative and package imports inconsistently
- Writing functions longer than ~30 lines without splitting
- Using `dynamic` when a typed parameter or generic would work
- Not enabling a linter — relying on manual code review for style
- Putting unrelated utilities in a single `helpers.dart` file

## Review questions

- What makes Dart code easier to review?
- Why is consistent naming more important than clever naming?
- How does file structure affect long-term maintainability?
- When should you split a function into smaller ones?

## Practice exercises

1. Rename unclear variables and functions in a provided code snippet
2. Set up `very_good_analysis` in a new Flutter project and fix all warnings
3. Refactor a 50-line function into 3–4 smaller focused functions
4. Organize imports in a file following the dart → package → relative convention
