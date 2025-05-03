# coRules

[![npm version](https://img.shields.io/npm/v/corules.svg)](https://www.npmjs.com/package/corules)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.3-blue)](https://www.typescriptlang.org/)

> Professional configuration generator for AI coding assistants across multiple IDE platforms

## Overview

coRules streamlines the configuration of AI coding assistants by providing a standardized approach to generating rule files across various IDE environments (.vscode, .cursor, .github, etc.). The tool enables development teams to maintain consistent AI assistance behavior in their projects through customizable templates and rule sets.

## Features

- **Architecture-Aware Templates**: Pre-configured templates optimized for various project architectures (monorepo, microservices, MVC, etc.)
- **Configurable Strictness**: Five customizable levels of AI constraints, from minimal guidance to comprehensive enforcement
- **Multi-Platform Support**: Generate compatible configurations for multiple AI coding assistants (GitHub Copilot, Cursor, VS Code, JetBrains)
- **Extensible Rule Categories**: Enable or disable specific rule categories based on project needs (formatting, documentation, testing, etc.)

## Installation

```bash
# Install globally
npm install -g corules

# Or as a dev dependency in your project
npm install --save-dev corules
```

## Quick Start

### 1. Initialize Configuration

Run the interactive setup to create your configuration file:

```bash
corules init
```

This will guide you through selecting:
- Project architecture
- AI strictness level
- Target IDE platforms
- Rule categories to include

### 2. Generate Rules

Generate AI assistant rule files based on your configuration:

```bash
corules generate
```

### 3. Update Existing Rules

Update your rule files when your configuration changes:

```bash
corules update
```

## Configuration Options

### Project Architectures

- **Monorepo**: For projects with multiple packages or services
- **Microservices**: For distributed service-oriented architectures
- **MVC**: For traditional Model-View-Controller applications
- **Feature-based**: For modular organization by features/capabilities
- **Domain-driven**: For projects structured around business domains

### Strictness Levels

| Level | Name | Description |
|-------|------|-------------|
| 1 | Minimal | Very few constraints, AI can suggest almost anything |
| 2 | Relaxed | Basic code style enforcement |
| 3 | Medium | Documentation and consistency checks |
| 4 | Strict | Type and signature verification |
| 5 | Rigorous | Full test coverage enforcement, comprehensive checks |

### Supported IDE Platforms

- **VS Code**: Microsoft Visual Studio Code
- **Cursor**: Cursor IDE
- **GitHub Copilot**: GitHub's AI pair programmer
- **JetBrains**: IntelliJ, WebStorm, PyCharm, etc.

### Rule Categories

- Code formatting (Prettier)
- Linting guidelines
- Documentation requirements
- Import management
- Type checking
- Test coverage
- Refactoring guidelines

## Custom Templates

coRules supports custom templates for specialized project needs. See our [custom template documentation](https://github.com/yourusername/corules/wiki/Custom-Templates) for more details.

## Advanced Usage

For advanced configuration options, integrating with CI/CD pipelines, and team-wide settings, see our [advanced usage documentation](https://github.com/yourusername/corules/wiki/Advanced-Usage).

## Contributing

Contributions are welcome! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
