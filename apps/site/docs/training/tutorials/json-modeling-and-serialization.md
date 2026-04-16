---
title: JSON Modeling and Serialization
description: A detailed tutorial on turning API data into clean Dart models.
---

# JSON Modeling and Serialization

One of the most practical Dart skills for Flutter is translating JSON into readable models.

## Lesson objective

By the end of this lesson, a learner should be able to:

- explain why raw JSON should not stay in the UI layer
- create a simple model class from JSON
- write `fromJson` and `toJson` methods
- handle optional fields more carefully

## What to teach

- why raw JSON should not stay everywhere in the UI layer
- how to create model classes from response structures
- how `fromJson` and `toJson` patterns improve clarity

## Plain-language explanation

JSON is usually the transport format. It is how data moves between systems.

Your Dart model is the application format. It is how your app wants to understand that data.

That means the conversion step matters:

- incoming JSON is often messy, incomplete, or loosely typed
- application models should be clearer and safer

The goal is not just to "parse JSON." The goal is to turn incoming data into something the rest of the app can trust.

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

## Add a fuller example

```dart
class Course {
  final String id;
  final String title;
  final int durationInDays;
  final String? level;

  Course({
    required this.id,
    required this.title,
    required this.durationInDays,
    this.level,
  });

  factory Course.fromJson(Map<String, dynamic> json) {
    return Course(
      id: json['id'] as String,
      title: json['title'] as String,
      durationInDays: json['durationInDays'] as int,
      level: json['level'] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'durationInDays': durationInDays,
      'level': level,
    };
  }
}
```

## What this teaches

- JSON arrives as a `Map<String, dynamic>`
- the model constructor converts that map into meaningful fields
- nullable fields should be modeled honestly
- `toJson` prepares the object for sending or storing again

## Add a `toJson` example

```dart
Map<String, dynamic> toJson() {
  return {
    'id': id,
    'name': name,
  };
}
```

## Runnable example

```dart
void main() {
  final json = {
    'id': 'C1',
    'title': 'Flutter UI Foundations',
    'durationInDays': 5,
    'level': 'Intermediate',
  };

  final course = Course.fromJson(json);

  print(course.title);
  print(course.durationInDays);
  print(course.toJson());
}
```

## Expected output

```text
Flutter UI Foundations
5
{id: C1, title: Flutter UI Foundations, durationInDays: 5, level: Intermediate}
```

## Why this matters

- it makes UI code cleaner
- it reduces repeated map lookups
- it improves refactoring and review quality

## Why raw JSON in UI is a problem

This is harder to maintain:

```dart
final title = json['title'];
final duration = json['durationInDays'];
```

That code may appear in many places, and every location has to remember the same keys.

This is easier to maintain:

```dart
final course = Course.fromJson(json);
print(course.title);
```

Now the conversion logic lives in one place.

## Handling optional fields

Many API responses contain optional values. Teach this honestly:

```dart
final String? level;
```

If the API may omit the field, the model should reflect that reality.

If a fallback is needed, the app can decide that later:

```dart
final displayLevel = course.level ?? 'General';
```

## Practice ideas

1. Create a model with `fromJson` from a simple response shape.
2. Add a `toJson` method for sending data back.
3. Discuss what should happen when a field is missing or nullable.

## Guided exercise

Build a `Trainer` model with:

- `id`
- `name`
- optional `company`

Then add:

- `factory Trainer.fromJson(...)`
- `Map<String, dynamic> toJson()`

Suggested structure:

```dart
class Trainer {
  final String id;
  final String name;
  final String? company;

  Trainer({
    required this.id,
    required this.name,
    this.company,
  });

  factory Trainer.fromJson(Map<String, dynamic> json) {
    return Trainer(
      id: json['id'] as String,
      name: json['name'] as String,
      company: json['company'] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'company': company,
    };
  }
}
```

## Common mistakes

- keeping raw maps in UI code for too long
- not thinking about missing or optional fields
- mixing transport data structure with app-facing model intent

## Review questions

- Why is `fromJson` useful even in small projects?
- Why should optional JSON fields often become nullable Dart fields?
- What is the main difference between transport data and model data?

## Short answers

- `fromJson` keeps parsing logic in one place and makes the rest of the code cleaner
- optional JSON fields should often become nullable fields because the incoming data may really be missing
- transport data is how data arrives, while model data is how the app chooses to understand and use it
