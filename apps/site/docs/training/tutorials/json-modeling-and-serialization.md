---
title: JSON Modeling and Serialization
description: A detailed tutorial on turning API data into clean Dart models.
---

# JSON Modeling and Serialization

One of the most practical Dart skills for Flutter is translating JSON into readable models.

## What to teach

- why raw JSON should not stay everywhere in the UI layer
- how to create model classes from response structures
- how `fromJson` and `toJson` patterns improve clarity

## Example

```dart
class UserProfile {
  final String id;
  final String name;

  UserProfile({
    required this.id,
    required this.name,
  });

  factory UserProfile.fromJson(Map<String, dynamic> json) {
    return UserProfile(
      id: json['id'] as String,
      name: json['name'] as String,
    );
  }
}
```

## Worked explanation

- the JSON map is treated as raw incoming data
- the factory constructor converts that raw structure into a clear model
- the rest of the app can work with `UserProfile` instead of repeated key lookups

## Add a `toJson` example

```dart
Map<String, dynamic> toJson() {
  return {
    'id': id,
    'name': name,
  };
}
```

## Why this matters

- it makes UI code cleaner
- it reduces repeated map lookups
- it improves refactoring and review quality

## Practice ideas

1. Create a model with `fromJson` from a simple response shape.
2. Add a `toJson` method for sending data back.
3. Discuss what should happen when a field is missing or nullable.

## Common mistakes

- keeping raw maps in UI code for too long
- not thinking about missing or optional fields
- mixing transport data structure with app-facing model intent
