# Rule: editing-contexts

**Description:** Guidelines for editing files within the `src/contexts/` directory.

## Guidelines

When editing files within the `src/contexts/` directory:

1.  **Structure & Location:**
    - Abstract _definitions/interfaces_ belong in `src/contexts/base/`.
    - Concrete _provider implementations_ (SQLite, API, etc.) belong in `src/contexts/providers/`.
    - Database schema _migrations_ belong in `src/contexts/migrations/`.
    - Context-related _utilities_ belong in `src/contexts/utils/`.
2.  **Naming Conventions:**
    - Files: `kebab-case.js`. Provider files should follow `<type>-context.js` (e.g., `sqlite-context.js`). Migration files follow `<seq>-<description>.js` (e.g., `001-initial-schema.js`).
    - Classes/Interfaces: `PascalCase` (e.g., `SqliteContext`, `DataContext`).
    - Variables/Functions: `camelCase`.
3.  **Implementation Guidelines:**
    - Each file should define a single primary logical component (e.g., one Context provider class). Use `module.exports = { ComponentName };`.
    - Contexts manage data persistence and abstract the underlying storage mechanism.
    - Implement CRUD operations based on defined protocols.
    - Often implement the Repository pattern for specific model types.
    - Handle transactions where applicable.
    - Adhere to documented MCP/SWIG principles (Interface Composition, DI, Factory Patterns).
    - Access configuration values via the central utility (e.g., `src/utils/config-manager.js`). Avoid hardcoding.
    - Use the central logging utility (`src/utils/logger.js`) for logging events or errors.
    - Use dependency injection for configuration or other services.
    - Ensure code adheres to the project's ESLint configuration (see `docs/development-environment/eslint-configuration--enforcement.md`).
4.  **Enforcement:** If prompted to perform an action (e.g., creating a file/folder, naming a class/variable) that violates the Naming Conventions or Structure & Location rules defined above, the request should be rejected. State the specific convention being violated as the reason for rejection.

## Related Documentation

- [Contexts (`src/contexts/`) Responsibilities](docs/mcp-component-responsibilities/contexts-srccontexts.md)
- [Naming Conventions](docs/project-implementation-conventions--guidelines/naming-conventions.md)
- [Implementation Guidelines](docs/project-implementation-conventions--guidelines/implementation-guidelines.md)
- [Folder Structure Conventions](docs/project-implementation-conventions--guidelines/folder-structure-conventions.md)
