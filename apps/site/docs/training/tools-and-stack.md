---
title: Tools and Stack
description: The complete Flutter development toolchain — IDEs, packages, CI/CD, testing, and deployment tools used in professional development.
keywords: [Flutter tools, Flutter packages, VS Code, Android Studio, CI/CD, Flutter DevTools, development stack]
---

# Tools and Stack

Professional Flutter development uses a well-defined toolchain. This page covers every tool, package, and platform you'll work with across the training program and in production projects.

:::info Version baseline
This stack targets **Flutter 3.x** (stable channel) and **Dart 3.x** with full null safety, records, patterns, and sealed classes.
:::

## Development environment

### Required tools

| Tool | Version | Purpose |
|------|---------|---------|
| **Flutter SDK** | 3.x (stable) | Framework and CLI |
| **Dart SDK** | 3.x (bundled with Flutter) | Language runtime |
| **VS Code** | Latest | Primary IDE (recommended) |
| **Android Studio** | Latest | Android emulator + SDK management |
| **Xcode** | Latest (macOS only) | iOS/macOS builds |
| **Git** | 2.x+ | Version control |
| **Chrome** | Latest | Flutter web debugging |

### VS Code extensions

| Extension | Purpose |
|-----------|---------|
| `Dart-Code.dart-code` | Dart language support |
| `Dart-Code.flutter` | Flutter tools integration |
| `usernamehw.errorlens` | Inline error display |
| `esbenp.prettier-vscode` | Formatting (for config files) |
| `GitHub.copilot` | AI-assisted coding |

### Android Studio plugins

| Plugin | Purpose |
|--------|---------|
| Flutter | Flutter project support |
| Dart | Dart language support |

## Core packages

### State management

| Package | Use case | Recommendation |
|---------|----------|---------------|
| `flutter_riverpod` + `riverpod_annotation` | Recommended default state solution | **Primary choice** |
| `flutter_bloc` | Event-driven state management | Enterprise alternative |
| `provider` | Simple InheritedWidget wrapper | Learning only (legacy for new projects) |

### Networking

| Package | Use case |
|---------|----------|
| `dio` | Full-featured HTTP client with interceptors |
| `retrofit` | Type-safe API client generation on top of `dio` |
| `web_socket_channel` | WebSocket connections |

### Data & serialization

| Package | Use case |
|---------|----------|
| `freezed` + `freezed_annotation` | Immutable models with `copyWith`, `==`, `fromJson` |
| `json_serializable` + `json_annotation` | JSON serialization code generation |
| `build_runner` | Runs code generators (`freezed`, `json_serializable`, `retrofit`) |

### Local storage

| Package | Use case |
|---------|----------|
| `shared_preferences` | Simple key-value (settings, flags) |
| `flutter_secure_storage` | Encrypted storage (tokens, credentials) |
| `drift` | Type-safe reactive SQL database |
| `hive` | Fast, lightweight NoSQL |
| `isar` | High-performance embedded database |

### Navigation

| Package | Use case |
|---------|----------|
| `go_router` | Declarative routing, deep linking, URL-based navigation |
| `auto_route` | Code-generated type-safe routing |

### UI & design

| Package | Use case |
|---------|----------|
| `google_fonts` | Easy Google Fonts integration |
| `flutter_svg` | SVG rendering |
| `cached_network_image` | Image caching and loading |
| `shimmer` | Loading placeholder animations |
| `flutter_animate` | Declarative animations |

### Testing & quality

| Package | Use case |
|---------|----------|
| `flutter_test` | Widget and unit testing (built-in) |
| `mocktail` | Mock generation for testing |
| `bloc_test` | Testing Bloc/Cubit state |
| `golden_toolkit` | Visual regression testing |
| `very_good_analysis` | Strict lint rules (recommended) |
| `patrol` | Native integration testing |

### Firebase (optional)

| Package | Use case |
|---------|----------|
| `firebase_core` | Firebase initialization |
| `firebase_auth` | Authentication |
| `cloud_firestore` | NoSQL real-time database |
| `firebase_messaging` | Push notifications |
| `firebase_analytics` | Usage analytics |

## Debugging tools

### Flutter DevTools

Built into Flutter — accessible via `dart devtools` or VS Code:

| Tool | What it does |
|------|-------------|
| **Widget Inspector** | Explore the widget tree, debug layout issues |
| **Performance Overlay** | Identify jank, frame rendering problems |
| **Network Profiler** | Monitor HTTP requests and responses |
| **Memory Profiler** | Track memory leaks and allocation |
| **CPU Profiler** | Identify expensive operations |
| **Logging View** | View `print()` and `debugPrint()` output |

### Impeller renderer

Flutter's modern rendering engine — default on iOS, increasingly default on Android:

- **Eliminates shader compilation jank** — smoother first-frame rendering
- **Consistent 60/120fps** performance
- No action needed — Impeller is enabled automatically on supported platforms
- Verify with: `flutter run --enable-impeller` (Android) or check DevTools

## CI/CD and deployment

| Tool | Purpose | Best for |
|------|---------|---------|
| **GitHub Actions** | CI/CD pipelines in your repo | Open-source, cost-effective |
| **Codemagic** | Flutter-specialized CI/CD | Easiest Flutter CI setup |
| **Fastlane** | Automated iOS/Android builds + store uploads | App Store/Play Store deployment |
| **Shorebird** | Over-the-air (OTA) code push updates | Instant production patches |

### Example GitHub Actions workflow

```yaml
name: Flutter CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.x'
          channel: stable
      - run: flutter pub get
      - run: dart run build_runner build --delete-conflicting-outputs
      - run: flutter analyze
      - run: flutter test
      - run: flutter build apk --release
```

## Version control practices

| Practice | Guideline |
|----------|----------|
| Branch strategy | `main` (release), `develop` (integration), `feature/*` (work) |
| Commit messages | Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:` |
| Pull requests | Required for all changes to `main` and `develop` |
| Code review | At least one reviewer per PR |
| `.gitignore` | Flutter-standard: ignore `build/`, `.dart_tool/`, `.env` |

## Project scaffolding

| Tool | What it generates |
|------|-----------------|
| `flutter create` | Default Flutter project |
| `very_good_cli` | Production-ready project with testing, CI, and linting pre-configured |
| `mason` | Custom project templates with reusable bricks |

```bash
# Recommended: use Very Good CLI for production projects
dart pub global activate very_good_cli
very_good create flutter_app my_project
```

## Multi-platform targets

Flutter supports **6 platforms** from a single codebase:

| Platform | Status (2026) | Build command |
|----------|--------------|---------------|
| Android | Stable | `flutter build apk` / `flutter build appbundle` |
| iOS | Stable | `flutter build ipa` |
| Web | Stable (WASM) | `flutter build web --wasm` |
| macOS | Stable | `flutter build macos` |
| Windows | Stable | `flutter build windows` |
| Linux | Stable | `flutter build linux` |

:::tip WebAssembly compilation
Flutter web now compiles to WebAssembly (WASM) for significantly better performance than JavaScript. Use `--wasm` flag for production web builds.
:::

## Next steps

- [**Engineering Standards**](/docs/resources/engineering-standards) — Code quality conventions
- [**Testing & Release**](/docs/training/testing-and-release) — Testing and deployment practices
- [**Backend & Data**](/docs/training/backend-and-data) — API and data layer setup
