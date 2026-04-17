---
title: Repositories, APIs, and Persistence
description: Structuring data flow with repositories, dio for networking, and local storage patterns.
keywords: [Flutter repository pattern, dio, API integration, local storage, data layer]
---

# Repositories, APIs, and Persistence

This tutorial connects data access patterns to clean architecture.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- implement the repository pattern in a Flutter app
- build an API client with `dio`
- model data with code generation (`freezed`)
- choose the right local persistence approach
- separate networking from UI cleanly

## The data flow

```
API / Database → API Client → Repository → Provider → Widget
```

Each layer has one responsibility:

| Layer | Responsibility |
|-------|---------------|
| **API Client** | HTTP requests, headers, error handling |
| **Model** | Data shape — JSON ↔ Dart conversion |
| **Repository** | Business logic — which data source to use, caching decisions |
| **Provider** | State — expose data to the UI reactively |
| **Widget** | Render — display data, handle user interaction |

## API client with dio

```dart
class ApiClient {
  final Dio _dio;

  ApiClient()
      : _dio = Dio(BaseOptions(
          baseUrl: 'https://api.example.com/v1',
          connectTimeout: const Duration(seconds: 10),
          receiveTimeout: const Duration(seconds: 10),
          headers: {'Content-Type': 'application/json'},
        ));

  Future<List<Product>> fetchProducts() async {
    try {
      final response = await _dio.get('/products');
      return (response.data as List)
          .map((json) => Product.fromJson(json))
          .toList();
    } on DioException catch (e) {
      throw ApiException(
        message: e.message ?? 'Request failed',
        statusCode: e.response?.statusCode,
      );
    }
  }
}
```

## Data model with freezed

```dart
// lib/models/product.dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'product.freezed.dart';
part 'product.g.dart';

@freezed
class Product with _$Product {
  const factory Product({
    required String id,
    required String name,
    required double price,
    String? imageUrl,
    @Default(true) bool available,
  }) = _Product;

  factory Product.fromJson(Map<String, dynamic> json) =>
      _$ProductFromJson(json);
}
```

Run code generation:
```bash
dart run build_runner build --delete-conflicting-outputs
```

## Repository pattern

Abstract the data source so the rest of the app doesn't care where data comes from:

```dart
// Abstract repository
abstract class ProductRepository {
  Future<List<Product>> getProducts();
  Future<Product> getProductById(String id);
}

// API implementation
class ApiProductRepository implements ProductRepository {
  final ApiClient _client;

  ApiProductRepository(this._client);

  @override
  Future<List<Product>> getProducts() => _client.fetchProducts();

  @override
  Future<Product> getProductById(String id) => _client.fetchProduct(id);
}
```

Why abstract? You can swap `ApiProductRepository` for a `MockProductRepository` in tests or a `CachedProductRepository` that checks local storage first.

## Connecting to Riverpod

```dart
@riverpod
ProductRepository productRepository(Ref ref) {
  return ApiProductRepository(ApiClient());
}

@riverpod
Future<List<Product>> products(Ref ref) {
  final repo = ref.watch(productRepositoryProvider);
  return repo.getProducts();
}
```

## Local persistence options

| Package | Best for | Complexity |
|---------|----------|-----------|
| `shared_preferences` | Simple key-value (settings, flags) | Low |
| `flutter_secure_storage` | Tokens, passwords, secrets | Low |
| `drift` | Relational data with SQL queries | Medium |
| `hive` | Fast NoSQL local storage | Medium |
| `isar` | Complex queries, large datasets | Medium-High |

### When to persist locally

```dart
// Cache API response locally
class CachedProductRepository implements ProductRepository {
  final ApiProductRepository _api;
  final Box<Product> _cache;

  CachedProductRepository(this._api, this._cache);

  @override
  Future<List<Product>> getProducts() async {
    try {
      final products = await _api.getProducts();
      await _cache.putAll({for (var p in products) p.id: p});
      return products;
    } on ApiException {
      // Offline fallback — return cached data
      return _cache.values.toList();
    }
  }
}
```

## Common mistakes

- Making API calls directly from widgets
- Using raw `Map<String, dynamic>` instead of typed models
- Forgetting error handling — happy path only
- Storing tokens in `shared_preferences` (use `flutter_secure_storage`)
- Creating repositories that just pass through without adding value
- Not running `build_runner` after changing freezed models

## Practice exercises

1. Build an `ApiClient` with dio that fetches a list of items from a public API
2. Create a `freezed` model and verify JSON round-trip serialization
3. Implement a `Repository` that wraps the API client and exposes clean methods
4. Add a `CachedRepository` that falls back to local data when offline
5. Connect the repository to a Riverpod provider and display data in a widget
