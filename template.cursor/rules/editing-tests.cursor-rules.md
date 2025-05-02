# Rule: editing-tests

**Description:** Guidelines for editing files within the `tests/` directory.

## Guidelines

When editing files within the `tests/` directory:

1.  **Structure & Location:**
    - Mirror the `src/` directory structure within `tests/unit/` for unit tests.
    - Place integration tests in `tests/integration/`, potentially organized by feature or component interaction.
2.  **Naming Conventions:**
    - Files: Use a consistent suffix like `.test.js` or `.spec.js` (e.g., `user-model.test.js`, `auth-service.spec.js`). Follow `kebab-case` or `PascalCase` mirroring the component file.
3.  **Implementation Guidelines:**
    - Unit tests should focus on a single component in isolation, mocking dependencies.
    - Integration tests verify interactions between multiple components.
    - Use testing frameworks and libraries consistently.
4.  **Enforcement:** If prompted to perform an action (e.g., creating a file/folder) that violates the Naming Conventions or Structure & Location rules defined above, the request should be rejected. State the specific convention being violated as the reason for rejection.
