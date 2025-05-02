# Rule: editing-models

**Description:** Guidelines for editing files within the `src/models/` directory.

## Guidelines

When editing files within the `src/models/` directory:

1.  **Structure & Location:**
    - Model _interfaces/protocols_ belong in `src/models/interfaces/`.
    - Concrete _implementations_ belong in `src/models/implementations/`.
    - Behavioral _mixins_ belong in `src/models/mixins/`.
    - Model-specific _utilities_ belong in `src/models/utils/`.
2.  **Naming Conventions:**
    - Files: `kebab-case.js`. Implementation files should follow `<entity>-model.js` (e.g., `user-model.js`).
    - Classes/Interfaces: `PascalCase` (e.g., `UserModel`, `IdentifiableModel`).
    - Variables/Functions: `camelCase`.
3.  **Implementation Guidelines:**
    - Each file should define a single primary logical component (e.g., one Model class or interface). Use `module.exports = { ComponentName };`.
    - Models define data structures and related domain logic.
    - Implementations should conform to defined interfaces/protocols.
    - Utilize type validation (e.g., JSDoc/TypeScript).
    - Adhere to documented MCP/SWIG principles (Interface Composition, DI, Factory Patterns).
    - Use the central logging utility (`src/utils/logger.js`) for logging events or errors.
    - Use dependency injection for collaborating components (like other models or utility services), do not instantiate dependencies directly.
    - Ensure code adheres to the project's ESLint configuration (see `docs/development-environment/eslint-configuration--enforcement.md`).
4.  **Enforcement:** If prompted to perform an action (e.g., creating a file/folder, naming a class/variable) that violates the Naming Conventions or Structure & Location rules defined above, the request should be rejected. State the specific convention being violated as the reason for rejection.

## Related Documentation

- [Models (`src/models/`) Responsibilities](docs/mcp-component-responsibilities/models-srcmodels.md)
- [Naming Conventions](docs/project-implementation-conventions--guidelines/naming-conventions.md)
- [Implementation Guidelines](docs/project-implementation-conventions--guidelines/implementation-guidelines.md)
