## Docker images

This folder contains the docker images used to export Godot games, which are based upon `ubuntu`.

We have two types of standard images:
1. Base image: `{version}`
2. Platoform-specific image: `{version}-{platform}`

Mono builds are currently not supported, but may be in the future.

### Base image

It's an image which contains the Godot engine and its related export templates.

This serves as a base for platform-specific images, and should not be used directly.

### Platform-specific image

It's an image which targets a specific export platform, which:
- is optimized for size for the specific platform
- includes platform-specific software (e.g. Windows codesign, Android SDK, etc.)
