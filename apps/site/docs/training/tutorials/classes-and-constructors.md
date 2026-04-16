---
title: Classes and Constructors
description: A detailed tutorial on object-oriented Dart for app modeling.
---

# Classes and Constructors

Dart classes are essential for app modeling. They help learners turn loose values into structured entities.

## Lesson objective

By the end of this lesson, a learner should be able to:

- explain what a class represents
- create objects from a class
- use constructors to build valid instances
- prefer classes over raw maps when the structure is stable

## Core concepts

- classes and objects
- fields and methods
- constructors
- named constructors
- getters and setters where useful

## Example

```dart
class Product {
  final String id;
  final String title;
  final double price;

  Product({
    required this.id,
    required this.title,
    required this.price,
  });
}
```

## Worked explanation

- the class groups related values together
- the constructor makes object creation clear and explicit
- `required` signals which values must exist for the object to make sense

## Plain-language explanation

You can teach a class like this:

- a class is a blueprint
- an object is one real instance created from that blueprint

For example:

- `Product` is the blueprint
- one product such as "Flutter Bootcamp" is an object

That explanation is often enough to reduce fear around object-oriented programming.

## First runnable example

```dart
class Student {
  final String name;
  final String batch;

  Student({
    required this.name,
    required this.batch,
  });
}

void main() {
  final student = Student(
    name: 'Asha',
    batch: 'Weekend',
  );

  print(student.name);
  print(student.batch);
}
```

## Expected output

```text
Asha
Weekend
```

## Why constructors matter

A constructor answers the question:

`What information must exist before this object is valid?`

That is a powerful teaching idea because it connects syntax to meaning.

## Named constructor example

```dart
class Product {
  final String id;
  final String title;
  final double price;

  Product({
    required this.id,
    required this.title,
    required this.price,
  });

  Product.empty()
      : id = '',
        title = '',
        price = 0;
}
```

This is a helpful teaching example because it shows that classes can provide multiple ways to create valid objects.

## Expanded example with behavior

```dart
class Course {
  final String title;
  final int durationInDays;
  final bool isCorporate;

  Course({
    required this.title,
    required this.durationInDays,
    required this.isCorporate,
  });

  Course.demo()
      : title = 'Demo Course',
        durationInDays = 1,
        isCorporate = false;

  String summary() {
    final audience = isCorporate ? 'Corporate' : 'Public';
    return '$title - $durationInDays days - $audience';
  }
}

void main() {
  final course = Course(
    title: 'Flutter Engineering',
    durationInDays: 10,
    isCorporate: true,
  );

  final demoCourse = Course.demo();

  print(course.summary());
  print(demoCourse.summary());
}
```

## What this example teaches

- fields hold object data
- constructors create valid objects
- named constructors provide alternate creation paths
- methods can belong to the object when they describe that object's behavior

## Expected output

```text
Flutter Engineering - 10 days - Corporate
Demo Course - 1 days - Public
```

## Why this matters in apps

- APIs return structured data
- UI screens often need clearly modeled entities
- classes make code more readable than large maps everywhere

Typical Flutter examples:

- `UserProfile`
- `Product`
- `CartItem`
- `CourseSession`
- `DashboardCard`

## Teaching focus

- model a product, user, or order
- explain why constructors improve clarity
- compare class-based modeling with map-based shortcuts

## Class versus map discussion

This comparison is useful in training:

```dart
final userMap = {
  'id': 'U1',
  'name': 'Sitharaj',
};
```

versus:

```dart
class User {
  final String id;
  final String name;

  User({
    required this.id,
    required this.name,
  });
}
```

Explain the difference:

- a map is quick but loose
- a class is clearer, safer, and easier to reuse
- the class becomes more valuable as the project grows

## Guided exercise

Create a `Trainer` class with:

- `name`
- `specialization`
- `yearsOfExperience`

Then:

- add a `summary()` method
- create one object
- print the summary

Possible answer:

```dart
class Trainer {
  final String name;
  final String specialization;
  final int yearsOfExperience;

  Trainer({
    required this.name,
    required this.specialization,
    required this.yearsOfExperience,
  });

  String summary() {
    return '$name teaches $specialization with $yearsOfExperience years of experience';
  }
}
```

## Common mistakes

- putting unrelated behavior into the same model
- forgetting to mark required fields clearly
- using maps everywhere instead of introducing a proper class when the structure is stable
- creating constructors that hide too much setup logic too early

## Practice ideas

1. Create a `UserProfile` class with required fields.
2. Add a named constructor for an empty or guest version.
3. Compare a class-based and map-based implementation of the same data.

## Review questions

- Why is a class often clearer than a map for stable app data?
- When is a named constructor useful?
- What makes a model class easier to understand and reuse?

## Short answers

- a class is clearer than a map when the entity has a stable shape and meaning
- a named constructor is useful when the class needs more than one valid creation path
- a model class is easier to understand when the fields are focused, the constructor is explicit, and the naming is clear
