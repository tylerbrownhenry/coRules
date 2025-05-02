# Rule: editing-db

**Description:** Guidelines for editing files within the `src/db/` directory.

## Guidelines

When editing files within the `src/db/` directory (if used separately from `src/contexts/migrations`):

1.  **Structure & Location:**
    - Schema definitions typically in `src/db/schema/`.
    - Seed data scripts typically in `src/db/seeds/`.
2.  **Naming Conventions:**
    - Files: `kebab-case.js` or `kebab-case.sql` depending on content.
    - Variables/Functions: `camelCase` (for JS scripts).
3.  **Implementation Guidelines:**
    - Focus strictly on database structure (schema) or initial data population (seeds).
    - Avoid including application logic here. Data access logic belongs in Contexts.
4.  **Enforcement:** If prompted to perform an action (e.g., creating a file/folder, naming a variable) that violates the Naming Conventions or Structure & Location rules defined above, the request should be rejected. State the specific convention being violated as the reason for rejection.

## Related Documentation

- [Folder Structure Conventions](docs/project-implementation-conventions--guidelines/folder-structure-conventions.md)
