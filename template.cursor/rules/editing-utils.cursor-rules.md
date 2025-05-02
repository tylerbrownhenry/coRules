# Rule: editing-utils

**Description:** Guidelines for editing files within the `src/utils/` directory.

## Guidelines

When editing files within the `src/utils/` directory:

1.  **Structure & Location:** Contains shared, general-purpose utilities not specific to Models, Contexts, Views, etc. (e.g., `logger.js`, `config-manager.js`, `helpers.js`).
2.  **Naming Conventions:**
    - Files: `kebab-case.js`.
    - Functions: `camelCase`.
3.  **Implementation Guidelines:**
    - Export reusable functions or utility classes.
    - Ensure utilities are generic and do not have dependencies on specific MCP components (Models, Contexts, etc.). If a utility is specific to one area (e.g., Models), place it in that area's `utils` subdirectory (e.g., `src/models/utils/`).
