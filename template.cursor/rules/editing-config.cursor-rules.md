# Rule: editing-config

**Description:** Guidelines for editing files within the `config/` directory.

## Guidelines

When editing files within the `config/` directory:

1.  **Structure & Location:** Contains configuration files (e.g., `default.json`, `production.json`).
2.  **Naming Conventions:** Follow conventions of the configuration library being used (e.g., `node-config` uses environment names like `development.json`, `production.json`).
3.  **Implementation Guidelines:**
    - Store environment-specific settings, API keys, database connection strings, feature flags, etc.
    - Avoid hardcoding sensitive information directly; use environment variables or secrets management where appropriate.
    - Do not include application logic. Access configuration values via a utility (e.g., `src/utils/config-manager.js`).
