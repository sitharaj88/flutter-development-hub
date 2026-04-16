---
title: Layouts and Constraints
description: A deeper tutorial on spacing, alignment, and Flutter's layout behavior.
---

# Layouts and Constraints

Many Flutter frustrations come from not understanding layout rules. This tutorial should make layout feel predictable.

## Lesson objective

By the end of this lesson, a learner should be able to:

- explain Flutter layout using parent-child constraints
- understand why overflow happens
- choose between fixed, flexible, and expanded sizing more confidently
- reason about alignment and spacing instead of guessing

## Concepts to emphasize

- parent-child layout relationships
- width and height constraints
- how flexible and fixed sizing interact
- alignment and spacing consistency

## Plain-language explanation

One of the most useful ideas in Flutter is:

- parents give constraints
- children choose a size within those constraints
- parents place children on the screen

If learners understand that sentence, a lot of layout confusion disappears.

## Why learners get stuck here

Many beginners think:

- every widget decides its own size freely

But Flutter layout is not like that. Size and position are shaped by the parent-child relationship.

## A small example

```dart
Row(
  children: [
    Container(width: 100, height: 60, color: Colors.blue),
    Container(width: 100, height: 60, color: Colors.green),
  ],
)
```

This is simple, but it lets you talk about:

- horizontal layout
- fixed widths
- sibling widgets sharing a parent

## Why `Expanded` matters

`Expanded` tells Flutter:

- let this child take the remaining available space

Example:

```dart
Row(
  children: [
    const Icon(Icons.search),
    const SizedBox(width: 12),
    Expanded(
      child: TextField(),
    ),
  ],
)
```

This is a great real-world example because search bars, forms, and dashboard rows use this pattern constantly.

## Useful teaching examples

- why a widget overflows
- why `Expanded` changes layout behavior
- how nested rows and columns can become hard to manage
- how constraints affect cards, lists, and dashboard sections

## Overflow discussion

When a learner sees a yellow-black overflow warning, that is a teaching moment:

- the child needed more space than the parent could give
- the fix is not random trial and error
- the fix comes from understanding size, direction, and constraints

## Good teaching example sequence

1. show a row that overflows
2. explain why it overflows
3. fix it with `Expanded`, wrapping, or better structure
4. compare the result visually

## Outcome

- learners stop guessing and start reasoning about layout behavior

## Common mistakes

- nesting too many rows and columns without a clear structure
- using fixed sizes where flexible layout is needed
- adding containers only for spacing instead of using more appropriate layout widgets
- treating `Expanded` as a magic fix without understanding why it works
