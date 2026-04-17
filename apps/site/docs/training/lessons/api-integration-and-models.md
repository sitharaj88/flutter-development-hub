---
title: API Integration and Models
description: Connecting Flutter apps to backend data with dio, typed models, and proper error handling.
keywords: [Flutter API, dio, JSON, data model, REST API, Flutter networking]
---

# API Integration and Models

This lesson takes apps from static demos to real data-connected applications.

## Lesson goal

- fetch data from a REST API with `dio`
- convert JSON into typed Dart models
- handle loading, success, and error states
- keep networking out of the UI layer

## Fetching data with dio

```dart
import 'package:dio/dio.dart';

class ApiClient {
  final Dio _dio = Dio(BaseOptions(
    baseUrl: 'https://api.example.com',
    connectTimeout: const Duration(seconds: 10),
  ));

  Future<List<Map<String, dynamic>>> fetchProducts() async {
    final response = await _dio.get('/products');
    return List<Map<String, dynamic>>.from(response.data);
  }
}
```

## Data model

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

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'] as String,
      name: json['name'] as String,
      price: (json['price'] as num).toDouble(),
      imageUrl: json['image_url'] as String?,
    );
  }
}
```

## Putting it together

```dart
Future<List<Product>> getProducts() async {
  try {
    final jsonList = await apiClient.fetchProducts();
    return jsonList.map(Product.fromJson).toList();
  } on DioException catch (e) {
    throw Exception('Failed to load products: ${e.message}');
  }
}
```

## Displaying with loading and error states

```dart
class ProductListScreen extends StatefulWidget {
  const ProductListScreen({super.key});

  @override
  State<ProductListScreen> createState() => _ProductListScreenState();
}

class _ProductListScreenState extends State<ProductListScreen> {
  late Future<List<Product>> _products;

  @override
  void initState() {
    super.initState();
    _products = getProducts();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Products')),
      body: FutureBuilder<List<Product>>(
        future: _products,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          }
          final products = snapshot.data!;
          return ListView.builder(
            itemCount: products.length,
            itemBuilder: (context, index) {
              final product = products[index];
              return ListTile(
                title: Text(product.name),
                trailing: Text('\$${product.price.toStringAsFixed(2)}'),
              );
            },
          );
        },
      ),
    );
  }
}
```

## The data flow

```
API (JSON) → ApiClient (dio) → Model (fromJson) → Repository → UI
```

| Layer | Responsibility |
|-------|---------------|
| `ApiClient` | HTTP calls, headers, timeouts |
| `Model` | JSON → Dart conversion |
| `Repository` | Business logic, caching |
| `UI` | Display and user interaction |

## Common mistakes

- Making API calls directly from widgets
- Using raw `Map<String, dynamic>` in UI code
- Not handling errors — only coding the happy path
- Forgetting to handle loading state before data arrives

## Practice exercises

1. Fetch a list of items from a public API and display them in a `ListView`
2. Create a `fromJson` factory for a model with at least 4 fields
3. Add loading and error states to an API-backed screen
4. Move the API call into a separate `ApiClient` class
