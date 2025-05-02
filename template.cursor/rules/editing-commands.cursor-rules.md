# Rule: editing-commands

**Description:** Guidelines for editing files within the `src/commands/` directory.

## Guidelines

When editing files within the `src/commands/` directory:

1.  **Structure & Location:** Files typically reside directly in `src/commands/`.
2.  **Naming Conventions:**
    - Files: `<feature>-command.js` (e.g., `process-data-command.js`).
    - Exported Functions: `camelCase` (commonly `register`, `execute`).
3.  **Implementation Guidelines:**
    - Each file should define a single command or related command functions. Use `module.exports = { register, execute };` or similar pattern.
    - Commands handle specific actions, often triggered by UI events or system processes.
    - Utilize auto-discovery mechanisms if applicable (check `docs/project-implementation-conventions--guidelines/auto-discovery-mechanism.md`).
    - Use dependency injection for necessary Models, Contexts, or Services.
4.  **Enforcement:** If prompted to perform an action (e.g., creating a file, naming a function) that violates the Naming Conventions or Structure & Location rules defined above, the request should be rejected. State the specific convention being violated as the reason for rejection.

## Related Documentation

- [Naming Conventions](docs/project-implementation-conventions--guidelines/naming-conventions.md)
- [Implementation Guidelines](docs/project-implementation-conventions--guidelines/implementation-guidelines.md)
- [Auto-Discovery Mechanism](docs/project-implementation-conventions--guidelines/auto-discovery-mechanism.md)
