---
title: Debugging Workflow
description: Systematic debugging techniques for Flutter apps using DevTools, breakpoints, and structured investigation.
keywords: [Flutter debugging, DevTools, breakpoints, widget inspector, Flutter errors]
---

# Debugging Workflow

Debugging is controlled investigation, not random guessing. This tutorial teaches a repeatable approach.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- debug systematically instead of randomly changing code
- use Flutter DevTools effectively
- read and interpret Flutter error messages
- isolate problems and verify fixes

## The debugging process

```
1. Reproduce → 2. Isolate → 3. Inspect → 4. Fix → 5. Verify
```

| Step | What to do |
|------|-----------|
| **Reproduce** | Make the bug happen reliably — note exact steps |
| **Isolate** | Narrow down which file, widget, or function is involved |
| **Inspect** | Check data values, widget tree, network responses |
| **Fix** | Change one thing at a time |
| **Verify** | Confirm the fix works and nothing else broke |

## Reading Flutter error messages

Flutter error messages are verbose but structured. Learn to read them:

```
══╡ EXCEPTION CAUGHT BY WIDGETS LIBRARY ╞══
The following assertion was thrown building MyWidget:
A RenderFlex overflowed by 42 pixels on the right.

The relevant error-causing widget was:
  Row  file:///lib/features/home/home_screen.dart:28:12
```

**Key parts:**
1. **Which library** caught it (`WIDGETS LIBRARY`)
2. **What happened** (`RenderFlex overflowed`)
3. **Which widget** caused it (`Row`)
4. **Exact file and line** (`home_screen.dart:28`)

## Using print debugging effectively

Strategic print statements for quick investigation:

```dart
Future<List<Product>> fetchProducts() async {
  debugPrint('fetchProducts: starting request');

  final response = await dio.get('/products');
  debugPrint('fetchProducts: status=${response.statusCode}');
  debugPrint('fetchProducts: items=${response.data.length}');

  final products = (response.data as List)
      .map((json) => Product.fromJson(json))
      .toList();
  debugPrint('fetchProducts: parsed ${products.length} products');

  return products;
}
```

:::tip Use debugPrint, not print
`debugPrint` throttles output so long messages aren't truncated by the system. Always prefer it over `print` in Flutter apps.
:::

## Flutter DevTools

| Tool | When to use |
|------|------------|
| **Widget Inspector** | Widget tree not rendering as expected, layout issues |
| **Performance Overlay** | Jank, slow animations, unnecessary rebuilds |
| **Network Profiler** | API calls failing, slow responses, wrong payloads |
| **Memory View** | Memory leaks, growing allocations |
| **Logging View** | Reviewing debugPrint output in a structured timeline |
| **CPU Profiler** | Finding expensive functions causing frame drops |

Launch DevTools from VS Code:

```
// VS Code: Ctrl+Shift+P → "Flutter: Open DevTools"
// Terminal: flutter run → press 'd' to open DevTools
```

## Common Flutter errors and fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `RenderFlex overflowed` | Content wider/taller than parent | Wrap in `Expanded`, `Flexible`, or `SingleChildScrollView` |
| `setState() called after dispose()` | Async callback fires after widget unmounts | Check `mounted` before `setState`, or use a state management solution |
| `Null check operator used on null` | `!` used on a null value | Use null-aware operators (`?.`, `??`) or fix the data source |
| `type 'Null' is not a subtype of type 'String'` | JSON field is null when String expected | Make field nullable (`String?`) or provide default |
| `Looking up a deactivated widget's ancestor` | Using `context` after widget removed from tree | Store reference or check `mounted` |

## Breakpoint debugging

VS Code breakpoint workflow:

1. Click the line number gutter to set a breakpoint (red dot)
2. Run the app in debug mode (`F5`)
3. When execution hits the breakpoint, inspect:
   - **Variables panel** — see current values
   - **Call Stack** — trace how you got here
   - **Watch** — add expressions to monitor
4. Step through: **F10** (step over), **F11** (step into), **Shift+F11** (step out)

## Common mistakes

- Changing several things at once — makes it impossible to know what fixed it
- Assuming the first suspicion is correct without verifying
- Not reproducing the issue consistently before attempting a fix
- Declaring a fix complete without testing the full flow
- Ignoring analyzer warnings — they often point to the problem

## Practice exercises

1. Introduce a `RenderFlex overflow` error and fix it using the Widget Inspector
2. Add `debugPrint` statements to trace the flow of an API call
3. Set a breakpoint in a repository method and inspect the response data
4. Find and fix a `setState after dispose` error in a timer-based widget
