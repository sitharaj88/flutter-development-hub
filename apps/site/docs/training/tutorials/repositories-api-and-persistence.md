---
title: Repositories, APIs, and Persistence
description: A deeper tutorial on structuring data flow from remote sources and local storage.
---

# Repositories, APIs, and Persistence

This tutorial connects data access patterns to architecture quality.

## Lesson objective

By the end of this lesson, a learner should be able to:

- explain the role of a repository in a Flutter app
- separate networking concerns from UI concerns
- understand when local persistence is useful
- describe a cleaner flow from API to model to UI

## What to teach

- API clients and service boundaries
- repository patterns for cleaner data access
- when to persist data locally
- separating UI concerns from networking concerns

## Plain-language explanation

Repositories are helpful because they give the rest of the app one clear place to ask for data.

That means:

- UI code should not worry about HTTP details
- screen widgets should not decode raw JSON directly
- data access can be changed later without rewriting every screen

## A simple flow to teach

1. API client fetches raw data
2. model converts the data into Dart objects
3. repository decides what data to expose to the rest of the app
4. UI renders the result

This flow is easier for learners to reason about than mixing everything inside one widget file.

## Why it matters

- code remains clearer as integrations grow
- network logic becomes easier to test and replace
- apps handle real-world data more reliably

## When persistence helps

Local persistence becomes useful when the app needs to remember:

- user preferences
- tokens or session data
- cached API responses
- last opened items

This helps learners connect storage to user experience, not just implementation detail.

## Common mistakes

- making network requests directly from widgets
- using local storage without clear rules
- storing transport data too loosely instead of converting it into models
- creating repositories that simply pass through everything without adding clarity
