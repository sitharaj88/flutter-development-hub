---
title: Dart Phase Roadmap
description: The phase-by-phase path for mastering Dart as part of Flutter training.
---

# Dart Phase Roadmap

This roadmap turns the Dart track into a clear sequence instead of a random set of topics.

## Phase 1: Basics

- variables, `final`, and `const`
- operators and expressions
- simple value handling and decision logic

### What learners should be able to do

- choose sensible variable declarations
- write clear boolean expressions
- explain how values are compared and combined
- reason about simple app logic without guessing

### Good teaching examples

- login-attempt counter
- cart quantity and price calculation
- profile-completion checks
- simple score calculator

### Teaching note

Do not rush this phase. Many later mistakes come from weak understanding here, especially around variable choice and boolean logic.

## Phase 2: Functions and logic

- functions and parameters
- return values
- cleaner logic and reusable code

### What learners should be able to do

- write reusable functions for validation and formatting
- choose between positional and named parameters
- return values clearly instead of mixing unrelated work
- refactor repeated logic into smaller helpers

### Good teaching examples

- email validation helper
- password strength checker
- welcome-message builder
- price formatter

### Teaching note

This is the phase where learners start writing cleaner code instead of longer code.

## Phase 3: Data structures

- lists, sets, and maps
- choosing the right collection
- simple data manipulation tasks

### What learners should be able to do

- store repeated data in the right structure
- search, transform, and summarize collections
- explain why a class is better than a loose map in stable app models

### Good teaching examples

- product catalog list
- unique selected tags in a set
- settings stored in a map
- order items with totals

### Teaching note

Learners should practice choosing the right structure, not just memorizing definitions.

## Phase 4: Safety and type discipline

- nullable versus non-nullable values
- null-aware operators
- safer data flow and cleaner assumptions

### What learners should be able to do

- write safer fallback logic
- understand where nullable data comes from
- avoid fragile code that depends on unsafe assumptions

### Good teaching examples

- optional user bio
- fallback display name
- delayed API data
- nullable website and phone fields

### Teaching note

Spend time explaining why the compiler protects the learner. Null safety becomes easier once the learner sees it as guidance, not punishment.

## Phase 5: Object-oriented Dart

- classes and constructors
- object modeling for app entities
- methods, fields, and structure

### What learners should be able to do

- create model classes for stable app data
- use constructors clearly
- distinguish between raw maps and structured models
- write small model methods when behavior belongs to the object

### Good teaching examples

- `UserProfile`
- `Product`
- `OrderItem`
- `CourseSession`

## Phase 6: Intermediate language design

- inheritance
- interfaces
- mixins
- enums, generics, and extensions

### What learners should be able to do

- understand code reuse patterns without overcomplicating design
- explain where enums improve clarity
- recognize when generics make APIs more reusable
- use extensions to improve readability in small ways

### Teaching note

Keep this phase practical. Beginners do not need abstraction for its own sake.

## Phase 7: Async Dart

- `Future`
- `async` and `await`
- `Stream`
- reasoning about delayed and ongoing data

### What learners should be able to do

- explain what it means for work to finish later
- await a future properly
- understand the difference between one future result and multiple stream events
- connect async code to loading, success, and error states

### Good teaching examples

- fake network request with `Future.delayed`
- OTP countdown with a stream
- loading a profile from a service
- simple retry flow

## Phase 8: Reliability

- exceptions and error handling
- predictable failure management
- safer parsing and input handling

### What learners should be able to do

- catch and explain common failures
- provide fallback behavior where appropriate
- distinguish between validation problems and system failures
- write safer parsing logic

### Good teaching examples

- parsing numbers from text input
- fake API failure handling
- invalid form data
- missing JSON fields

## Phase 9: Dart for apps

- JSON modeling
- serialization patterns
- code organization and clean style

### What learners should be able to do

- convert raw JSON into models
- serialize models back into map form
- keep code separated by responsibility
- write Dart that is easier to review and maintain

## Phase 10: Practice and consolidation

- mini problems
- refactoring exercises
- interview-style review
- app-focused modeling tasks

## Recommended delivery rhythm

1. teach the concept
2. show one or two worked examples
3. give a short guided exercise
4. discuss common mistakes
5. finish with a small review checkpoint

## Suggested learner milestones

Use this roadmap as a sequence of checkpoints:

1. can explain basic declarations and boolean logic
2. can write and call small reusable functions
3. can store repeated data in the right collection
4. can handle nullable data safely
5. can model real app entities using classes
6. can read and write async logic without fear
7. can convert JSON into readable models
