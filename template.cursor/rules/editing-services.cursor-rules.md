# Rule: editing-services

**Description:** Guidelines for editing files within the `src/services/` directory.

## Guidelines

When editing files within the `src/services/` directory:

1.  **Structure & Location:** Organize by function (e.g., `src/services/network/`, `src/services/auth/`, `src/services/analytics/`).
2.  **Naming Conventions:**
    - Files: `kebab-case.js` (e.g., `api-client.js`, `auth-service.js`).
    - Classes: `PascalCase` (e.g., `AuthService`).
    - Variables/Functions: `camelCase`.
3.  **Implementation Guidelines:**
    - Each file should define a single primary logical component (e.g., one Service class or related functions). Use `module.exports = { ComponentName };` or export functions directly.
    - Encapsulate application-specific use cases or business logic spanning multiple models/contexts.
    - Handle external system integrations (APIs, third-party services).
    - Access configuration values via the central utility (e.g., `src/utils/config-manager.js`). Avoid hardcoding.
    - Use the central logging utility (`src/utils/logger.js`) for logging events or errors.
    - Use dependency injection for necessary Contexts, Models, or other Services.
4.  **Enforcement:** If prompted to perform an action (e.g., creating a file/folder, naming a class/variable) that violates the Naming Conventions or Structure & Location rules defined above, the request should be rejected. State the specific convention being violated as the reason for rejection.

## Related Documentation

- [Services (`src/services/`) Responsibilities](docs/mcp-component-responsibilities/services-srcservices.md)
- [Naming Conventions](docs/project-implementation-conventions--guidelines/naming-conventions.md)
- [Implementation Guidelines](docs/project-implementation-conventions--guidelines/implementation-guidelines.md)
