---
title: State Management Basics
description: A lesson on how app data changes and how to manage that change clearly.
---

# State Management Basics

This lesson helps learners understand one of the most important shifts in app development: data changes over time, and the UI needs to respond correctly.

## Lesson goal

- understand what state means in an app
- separate simple local state from larger shared state
- avoid messy patterns where everything is mixed together

## What to teach

- local UI state
- shared application state
- update flows and re-rendering
- choosing patterns based on app complexity

## Plain-language explanation

State is simply changing information in the app.

Examples:

- whether the user is logged in
- which tab is selected
- how many items are in the cart
- whether data is loading

Once learners understand that, state management becomes less intimidating.

## Real examples

- login status
- cart item count
- selected filters
- remote data and refresh behavior

## Good teaching prompts

- what changes over time in this screen?
- which widget needs to know about that change?
- is this only local to one screen or shared across many parts of the app?

## What learners should be able to do after this lesson

- identify state more clearly
- distinguish local state from shared state
- make more sensible early architectural choices

## Teaching outcome

- learners stop treating state as random variables and begin seeing it as a central app design concern
