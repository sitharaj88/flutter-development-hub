---
title: Backend and Data Integration
description: API connectivity, persistence, authentication, and structured data handling in production Flutter applications.
keywords: [Flutter API, REST API, dio, JSON serialization, local storage, Flutter backend, Flutter data layer]
---

# Backend and Data Integration

Real apps need data. This module teaches you to connect Flutter UI to working backends and local storage — transforming screen demos into functional products.

:::info This is the turning point
This is where learners move from "I can build screens" to "I can build product behavior." After this module, your apps feel real.
:::

## What learners achieve

After this module, learners can:

- Fetch and display data from **REST APIs**
- Parse JSON into **type-safe Dart models**
- Handle **loading, error, and empty states** properly
- Structure data logic using the **repository pattern**
- Implement basic **authentication flows**
- Add **local persistence** where it improves UX
- Use **code generation** for JSON serialization at scale

## Making HTTP requests

### Using the `dio` package

`dio` is the standard HTTP client for Flutter — it supports interceptors, cancellation, form data, and timeouts:

```dart
import 'package:dio/dio.dart';

class ApiClient {
  final Dio _dio;

  ApiClient({String? baseUrl})
      : _dio = Dio(BaseOptions(
          baseUrl: baseUrl ?? 'https://api.example.com/v1',
          connectTimeout: const Duration(seconds: 10),
          receiveTimeout: const Duration(seconds: 10),
          headers: {'Content-Type': 'application/json'},
        ));

  /// Add auth token to all requests
  void setAuthToken(String token) {
    _dio.options.headers['Authorization'] = 'Bearer $token';
  }

  Future<Response> get(String path) => _dio.get(path);
  Future<Response> post(String path, {dynamic data}) => _dio.post(path, data: data);
  Future<Response> put(String path, {dynamic data}) => _dio.put(path, data: data);
  Future<Response> delete(String path) => _dio.delete(path);
}
```

### Fetching data

```dart
Future<List<Product>> fetchProducts() async {
  try {
    final response = await _dio.get('/products');
    final List<dynamic> data = response.data['items'];
    return data.map((json) => Product.fromJson(json)).toList();
  } on DioException catch (e) {
    switch (e.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.receiveTimeout:
        throw ApiException('Connection timed out. Check your internet.');
      case DioExceptionType.badResponse:
        throw ApiException('Server error: ${e.response?.statusCode}');
      default:
        throw ApiException('Network error: ${e.message}');
    }
  }
}
```

## JSON modeling

### Manual approach (for learning)

```dart
class Product {
  final String id;
  final String name;
  final double price;
  final String? imageUrl;

  const Product({
    required this.id,
    required this.name,
    required this.price,
    this.imageUrl,
  });

  factory Product.fromJson(Map<String, dynamic> json) => Product(
    id: json['id'] as String,
    name: json['name'] as String,
    price: (json['price'] as num).toDouble(),
    imageUrl: json['image_url'] as String?,
  );

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'price': price,
    'image_url': imageUrl,
  };
}
```

### Code generation approach (for production)

For real projects, use `json_serializable` or `freezed` to eliminate boilerplate:

```dart
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:json_annotation/json_annotation.dart';

part 'product.freezed.dart';
part 'product.g.dart';

@freezed
class Product with _$Product {
  const factory Product({
    required String id,
    required String name,
    required double price,
    @JsonKey(name: 'image_url') String? imageUrl,
  }) = _Product;

  factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);
}
```

Then run: `dart run build_runner build`

:::tip freezed vs json_serializable
- **`json_serializable`** — generates `fromJson`/`toJson` only
- **`freezed`** — generates `fromJson`/`toJson` + `copyWith` + `==` + `hashCode` + `toString`
- For production apps, `freezed` is the standard choice
:::

## Repository pattern

Separate data access from UI with a repository:

```dart
abstract class ProductRepository {
  Future<List<Product>> getAll();
  Future<Product> getById(String id);
  Future<void> create(Product product);
}

class ApiProductRepository implements ProductRepository {
  final ApiClient _client;

  ApiProductRepository(this._client);

  @override
  Future<List<Product>> getAll() async {
    final response = await _client.get('/products');
    final List<dynamic> data = response.data['items'];
    return data.map((json) => Product.fromJson(json)).toList();
  }

  @override
  Future<Product> getById(String id) async {
    final response = await _client.get('/products/$id');
    return Product.fromJson(response.data);
  }

  @override
  Future<void> create(Product product) async {
    await _client.post('/products', data: product.toJson());
  }
}
```

## Handling loading, error, and empty states

Every data-driven screen must handle four states:

```dart
// Using sealed classes for state (Dart 3)
sealed class DataState<T> {}
class Loading<T> extends DataState<T> {}
class Success<T> extends DataState<T> { final T data; Success(this.data); }
class Empty<T> extends DataState<T> {}
class Failure<T> extends DataState<T> { final String message; Failure(this.message); }

// In a widget
Widget buildProductList(DataState<List<Product>> state) => switch (state) {
  Loading()                      => const Center(child: CircularProgressIndicator()),
  Success(:final data)           => ListView.builder(
    itemCount: data.length,
    itemBuilder: (_, i) => ProductTile(data[i]),
  ),
  Empty()                        => const Center(child: Text('No products found')),
  Failure(:final message)        => Center(child: Text('Error: $message')),
};
```

## Authentication flow

```dart
class AuthRepository {
  final ApiClient _client;
  final FlutterSecureStorage _storage;

  AuthRepository(this._client, this._storage);

  Future<User> login(String email, String password) async {
    final response = await _client.post('/auth/login', data: {
      'email': email,
      'password': password,
    });

    final token = response.data['token'] as String;
    await _storage.write(key: 'auth_token', value: token);
    _client.setAuthToken(token);

    return User.fromJson(response.data['user']);
  }

  Future<void> logout() async {
    await _storage.delete(key: 'auth_token');
    _client.setAuthToken('');
  }

  Future<bool> isAuthenticated() async {
    final token = await _storage.read(key: 'auth_token');
    return token != null && token.isNotEmpty;
  }
}
```

## Local persistence

| Solution | Best for | Package |
|----------|----------|---------|
| `shared_preferences` | Simple key-value (settings, flags) | `shared_preferences` |
| `flutter_secure_storage` | Tokens, credentials | `flutter_secure_storage` |
| `drift` | Structured relational data | `drift` |
| `hive` | Fast NoSQL local storage | `hive` |
| `isar` | High-performance embedded DB | `isar` |

```dart
// Simple settings persistence
class SettingsRepository {
  final SharedPreferences _prefs;

  SettingsRepository(this._prefs);

  bool get isDarkMode => _prefs.getBool('dark_mode') ?? false;
  Future<void> setDarkMode(bool value) => _prefs.setBool('dark_mode', value);

  String get locale => _prefs.getString('locale') ?? 'en';
  Future<void> setLocale(String value) => _prefs.setString('locale', value);
}
```

## Backend-as-a-Service options

For learners and MVPs, BaaS platforms accelerate development:

| Service | Strengths | When to use |
|---------|-----------|-------------|
| **Firebase** | Auth, Firestore, push notifications, hosting | Google ecosystem, real-time apps |
| **Supabase** | Postgres, auth, real-time, storage | Open-source Firebase alternative |
| **Appwrite** | Self-hosted, auth, DB, functions | Full control, privacy-sensitive apps |

## Teaching progression

| Step | What to build | Concepts introduced |
|------|--------------|-------------------|
| 1 | Fetch + display one API endpoint | HTTP, JSON, `fromJson` |
| 2 | Handle all four states | Loading, error, empty, success |
| 3 | Add repository pattern | Separation of concerns |
| 4 | Add local persistence | `shared_preferences`, cached data |
| 5 | Add authentication | Tokens, secure storage, login flow |
| 6 | Introduce code generation | `freezed`, `build_runner` |

## Common learner pain points

| Pain point | Solution |
|-----------|----------|
| Decoding JSON directly in widgets | Introduce model classes early |
| Not knowing where API logic lives | Teach repository pattern immediately after first fetch |
| Forgetting loading and error states | Make the 4-state pattern mandatory from day one |
| Storing tokens insecurely | Use `flutter_secure_storage`, never `shared_preferences` for secrets |
| Copying API code across screens | Extract into a shared `ApiClient` class |

## Next steps

- [**State & Architecture**](/docs/training/state-and-architecture) — Manage data flow across the app
- [**Testing & Release**](/docs/training/testing-and-release) — Test your data layer
- [**Engineering Standards**](/docs/resources/engineering-standards) — Repository and API conventions
