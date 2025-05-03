# Contributing to coRules

Thank you for your interest in contributing to coRules! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

Before submitting a bug report, please check existing issues to avoid duplicates. When reporting a bug:

1. Use a clear and descriptive title
2. Describe the exact steps to reproduce the problem
3. Provide specific examples, such as code snippets or configuration files
4. Describe the observed behavior and explain what you expected to happen
5. Include environment details (OS, Node.js version, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please include:

1. A clear and descriptive title
2. A detailed description of the proposed functionality
3. Explanation of why this enhancement would benefit users
4. Any examples of how the feature would work

### Pull Requests

We welcome pull requests! To submit a PR:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run tests and linters (`npm run test && npm run lint`)
5. Commit with clear, descriptive messages following [conventional commits](https://www.conventionalcommits.org/)
6. Push to your branch (`git push origin feature/your-feature-name`)
7. Open a pull request

#### Pull Request Guidelines

- Follow the project's code style and conventions
- Include tests for any new functionality
- Update documentation as needed
- Keep PRs focused on a single concern
- Link any related issues in the PR description

## Development Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/corules.git
   cd corules
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Build the project
   ```bash
   npm run build
   ```

4. Run tests
   ```bash
   npm test
   ```

## Project Structure

```
corules/
├── src/              # Source code
│   ├── bin/          # CLI entry point
│   ├── commands/     # Command implementations
│   ├── lib/          # Core library code
│   ├── templates/    # Template definitions
│   └── types/        # TypeScript type definitions
├── template.cursor/  # Cursor IDE templates
├── template.github/  # GitHub templates
├── template.vscode/  # VS Code templates
└── tests/            # Test files
```

## Adding New Templates

To add a new template:

1. Create appropriate files in the correct template directory
2. Register the template in `src/templates/defaults.ts`
3. Add documentation for the new template
4. Add tests to validate the template generation

## License

By contributing to this project, you agree that your contributions will be licensed under its [MIT License](LICENSE).