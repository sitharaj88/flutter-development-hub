---
title: State and Architecture
description: The transition from small Flutter demos to maintainable application structure.
---

# State and Architecture

This is the stage where training moves from "can build screens" to "can build apps responsibly."

At this point, the learner already knows how to create UI. Now the real questions become:

- where should data live?
- what should rebuild and when?
- where should business logic go?
- how do we stop screens from becoming messy?
- how do we organize code so the app can grow safely?

That is why state and architecture should be taught together. Poor state choices often create poor architecture, and weak architecture makes state harder to manage.

## Key topics

- local state versus shared app state
- choosing a state management strategy
- feature-based project structure
- separating UI, domain logic, and data access
- repositories, services, and reusable patterns

## What learners should understand first

Before talking about any library or pattern, learners should understand what state actually is:

- the current form field value
- the selected tab
- the logged-in user
- the shopping cart contents
- the loading status of an API request

Once learners see state as changing app information, the rest of the discussion becomes easier.

## What learners should understand

- where business logic should live
- how to keep UI components from becoming messy
- how to organize apps so new features do not break the whole structure
- how architecture affects team speed and maintainability

## A simple teaching progression

1. start with local widget state
2. move to lifted/shared state
3. introduce simple separation of UI and logic
4. show feature-based structure
5. explain repositories and services when data flow becomes more complex

This progression works better than introducing a large state library too early.

## Common beginner problems

- putting all logic inside one screen widget
- mixing API calls directly inside UI code
- duplicating state across multiple widgets
- choosing a complex pattern before understanding the problem
- creating folder structures that look advanced but are hard to explain

## Teaching outcome

When this section is strong, learners start to build apps that are easier to:

- debug
- test
- extend
- review
- maintain as a team

## Training goals

- reduce copy-paste growth patterns
- improve clarity in larger apps
- help teams and advanced learners make stronger engineering choices
