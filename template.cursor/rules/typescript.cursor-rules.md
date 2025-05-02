# TypeScript Rules

## Coding Style

1. **Strict TypeScript**: Always use TypeScript's strict mode with the following flags enabled:

   - `strict: true`
   - `noImplicitAny: true`
   - `strictNullChecks: true`

2. **Type Definitions**:

   - Always define explicit return types for functions and methods
   - Use interfaces for object shapes
   - Use type aliases for complex types
   - Use generics where appropriate

3. **File Structure**:
   - Use `.ts` extension for TypeScript files
   - Use `.d.ts` extension for declaration files
   - Keep type definitions close to their usage, either in the same file or in a separate `.d.ts` file in the same directory

## Naming Conventions

1. **Files**: Use kebab-case for filenames, e.g., `user-service.ts`
2. **Classes**: Use PascalCase for class names, e.g., `UserService`
3. **Interfaces**: Use PascalCase with a descriptive name (not "I" prefix), e.g., `User` not `IUser`
4. **Type Aliases**: Use PascalCase, e.g., `UserData`
5. **Functions and Methods**: Use camelCase, e.g., `getUserById`
6. **Variables**: Use camelCase, e.g., `userData`
7. **Constants**: Use UPPER_SNAKE_CASE for true constants, e.g., `MAX_USERS`

## Import/Export Guidelines

1. **Prefer named exports** over default exports
2. **Group imports** by external packages first, then internal modules
3. **Use relative paths** for imports within the same module
4. **Use absolute paths** for imports across different modules

## Documentation

1. **JSDoc Comments**: Use JSDoc-style comments for classes, interfaces, and functions
2. **Required Documentation**: All public APIs should have documentation comments

## MCP-Specific Guidelines

1. **Tool Definitions**: Use Zod for schema validation in MCP tool definitions
2. **Error Handling**: Provide clear error messages and use typed error responses
3. **Type Safety**: Ensure complete type safety for all MCP communication
