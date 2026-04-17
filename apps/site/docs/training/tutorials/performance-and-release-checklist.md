---
title: Performance and Release Checklist
description: Preparing Flutter apps for production — performance optimization, release builds, and deployment verification.
keywords: [Flutter performance, release checklist, Flutter optimization, app deployment, Impeller]
---

# Performance and Release Checklist

Ship quality is part of development, not a last-minute step.

## Lesson objective

By the end of this tutorial, a learner should be able to:

- identify common Flutter performance problems
- apply optimization techniques for smooth 60fps
- follow a release checklist before deployment
- build and verify release artifacts

## Performance checklist

### Widget rebuild optimization

```dart
// ❌ Bad: rebuilds entire list on every change
ListView(
  children: items.map((item) => ExpensiveWidget(item: item)).toList(),
);

// ✅ Good: only builds visible items, reuses widgets
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ExpensiveWidget(item: items[index]),
);
```

### Use const constructors

```dart
// ❌ Rebuilds every time parent rebuilds
Container(
  padding: EdgeInsets.all(16),
  child: Text('Hello'),
);

// ✅ Skipped during rebuild — Flutter knows it hasn't changed
const Padding(
  padding: EdgeInsets.all(16),
  child: Text('Hello'),
);
```

### Avoid expensive operations in build()

```dart
// ❌ Bad: sorts on every rebuild
@override
Widget build(BuildContext context) {
  final sorted = List.of(items)..sort((a, b) => a.name.compareTo(b.name));
  return ListView.builder(
    itemCount: sorted.length,
    itemBuilder: (context, i) => Text(sorted[i].name),
  );
}

// ✅ Good: sort when data changes, not on every build
final _sortedItems = ValueNotifier<List<Item>>([]);

void _updateItems(List<Item> items) {
  _sortedItems.value = List.of(items)..sort((a, b) => a.name.compareTo(b.name));
}
```

## Performance targets

| Metric | Target | How to verify |
|--------|--------|--------------|
| Frame rate | **60 fps** consistently | Performance Overlay, DevTools timeline |
| Jank frames | Zero during scrolling and transitions | DevTools Performance view |
| App startup | Under 2 seconds on mid-range devices | Profile mode testing |
| Image loading | Lazy load + appropriate resolution | `cached_network_image` with size hints |
| Memory | No leaks, stable during navigation | DevTools Memory view |

## Impeller renderer

Flutter's **Impeller** rendering engine (default since Flutter 3.16) eliminates shader compilation jank:

- Pre-compiles all shaders at build time
- No more "first-run jank" on animations
- Enabled by default on iOS and Android
- Verify with: `flutter run --enable-impeller` (or check it's not disabled)

## Release build checklist

### Before building

- [ ] All tests pass: `flutter test`
- [ ] No analyzer warnings: `flutter analyze`
- [ ] Debug prints removed or gated behind `kDebugMode`
- [ ] API endpoints point to production
- [ ] App version and build number updated
- [ ] Environment configuration set correctly

### Build commands

```bash
# Android release
flutter build appbundle --release

# iOS release
flutter build ipa --release

# Web release (WASM)
flutter build web --wasm

# macOS release
flutter build macos --release

# Windows release
flutter build windows --release
```

### After building

- [ ] Test on real devices (not just emulators)
- [ ] Verify deep links and navigation
- [ ] Check app size is reasonable
- [ ] Verify crash reporting is connected (Sentry, Crashlytics)
- [ ] Smoke test critical flows: login, main feature, payment (if applicable)

## Environment configuration

```dart
enum Environment { dev, staging, production }

class AppConfig {
  final String apiBaseUrl;
  final Environment environment;

  const AppConfig._({required this.apiBaseUrl, required this.environment});

  static const dev = AppConfig._(
    apiBaseUrl: 'https://dev-api.example.com',
    environment: Environment.dev,
  );

  static const production = AppConfig._(
    apiBaseUrl: 'https://api.example.com',
    environment: Environment.production,
  );
}
```

## Common performance mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| `ListView` instead of `ListView.builder` | Builds all items upfront | Use `.builder` for any list > 20 items |
| Missing `const` constructors | Unnecessary widget rebuilds | Add `const` wherever possible |
| Large images without sizing | Memory spikes, slow rendering | Use `cacheWidth`/`cacheHeight` |
| Expensive work in `build()` | Frame drops | Move computation to state/provider |
| Animated opacity on large subtrees | Render layer explosion | Use `FadeTransition` instead |
| Uncached network images | Re-downloads on every rebuild | Use `cached_network_image` |

## Common mistakes

- Skipping real-device testing — emulators hide performance problems
- Not testing on lower-end hardware
- Leaving debug prints in production builds
- Not verifying environment configuration before release
- Shipping without crash reporting connected

## Practice exercises

1. Profile a scrolling list with DevTools and identify rebuild waste
2. Add `const` constructors throughout a screen and measure the difference
3. Replace a `ListView` with `ListView.builder` in a 100-item list
4. Build a release APK and verify the app size
5. Set up environment-specific configuration for dev and production
