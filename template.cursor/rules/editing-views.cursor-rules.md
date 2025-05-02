# Rule: editing-views

**Description:** Guidelines for editing files within the `src/views/` directory.

## Guidelines

When editing files within the `src/views/` directory:

1.  **Structure & Location:**
    - Main application _pages/screens_ belong in `src/views/pages/`.
    - Reusable _UI components_ belong in `src/views/components/`.
    - Custom React _hooks_ (if applicable) belong in `src/views/hooks/`.
    - View helper _utilities_ belong in `src/views/utils/`.
2.  **Naming Conventions:**
    - Files: `kebab-case.js` or `PascalCase.jsx` (depending on framework conventions).
    - Components (React): `PascalCase`.
    - Variables/Functions: `camelCase`.
3.  **Implementation Guidelines:**
    - Views display data and handle user interaction.
    - Translate user interactions into actions/commands targeting Models or Services.
    - Observe Model/Context changes for reactivity.
    - Avoid direct data manipulation; delegate to Models, Contexts, or Services.
    - Ensure code adheres to the project's ESLint configuration (see `docs/development-environment/eslint-configuration--enforcement.md`).
4.  **Enforcement:** If prompted to perform an action (e.g., creating a file/folder, naming a component/variable) that violates the Naming Conventions or Structure & Location rules defined above, the request should be rejected. State the specific convention being violated as the reason for rejection.

## Related Documentation

- [Views (`src/views/`) Responsibilities](docs/mcp-component-responsibilities/views-srcviews.md)
- [Naming Conventions](docs/project-implementation-conventions--guidelines/naming-conventions.md)
