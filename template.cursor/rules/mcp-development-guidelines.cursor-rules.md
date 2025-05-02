# Rule: mcp-development-guidelines

**Description:** General development guidelines based on MCP architecture and project conventions, mirroring Copilot instructions.

## Guidelines

When generating or modifying code, ensure adherence to the following core principles:

1.  **MCP Architecture:**
    - Follow the Model-Context-Protocol (MCP) pattern.
    - Emphasize Dependency Injection (DI) for Models, Contexts, and Services. Do not instantiate dependencies directly within components.
2.  **Project Conventions:**
    - Prioritize Convention over Configuration principles where established.
    - Respect Auto-Discovery mechanisms if applicable to the component type.
3.  **Naming Conventions:**
    - Strictly follow the documented Naming Conventions (e.g., `kebab-case` for files, `PascalCase` for classes/interfaces, `camelCase` for variables/functions). Reference `docs/project-implementation-conventions--guidelines/naming-conventions.md`.
4.  **Testing:**
    - Ensure appropriate unit tests are created or updated for new/modified functionality.
    - Place unit tests in corresponding directories under `tests/unit/`.
    - Name test files using `.test.js` or `.spec.js` suffixes.
    - Mock external dependencies in unit tests.
5.  **Utilities:**
    - Utilize the designated central logging utility (e.g., `src/utils/logger.js`).
    - Access configuration via the designated system (e.g., `src/utils/config-manager.js`).
6.  **ESLint:**
    - Ensure all code adheres to the project's ESLint configuration (see `docs/development-environment/eslint-configuration--enforcement.md`).

**Related Documentation:**

- [GitHub Configuration & Copilot](docs/development-environment/github-configuration--copilot-github.md)
- [Naming Conventions](docs/project-implementation-conventions--guidelines/naming-conventions.md)
- [Implementation Guidelines](docs/project-implementation-conventions--guidelines/implementation-guidelines.md)
- [MCP Protocol Design Principles](docs/mcp-protocol-design-principles/mcp-protocol-design-principles.md)
- [ESLint Configuration & Enforcement](docs/development-environment/eslint-configuration--enforcement.md)
