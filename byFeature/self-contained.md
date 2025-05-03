# Self-Contained Component Structure

This structure organizes components as fully self-contained units, following the Model-Context-Protocol (MCP) architecture. Each component contains all its related files in a dedicated folder.

## Directory Structure Example

```
src/
├── components/
│   ├── UserAuthentication/
│   │   ├── __tests__/                # Component tests
│   │   │   ├── UserAuthentication.test.ts
│   │   │   └── login-flow.test.ts
│   │   ├── __mocks__/                # Mock data and test doubles
│   │   │   ├── user-responses.json
│   │   │   └── auth-service-mock.ts
│   │   ├── README.md                 # Documentation specific to this component
│   │   ├── config.ts                 # Component configuration
│   │   ├── index.ts                  # Public API exports
│   │   ├── UserAuthentication.ts     # Main component implementation
│   │   ├── UserAuthentication.model.ts  # Component model
│   │   └── UserAuthentication.context.ts  # Component context
│   │
│   ├── DataProcessor/
│   │   ├── __tests__/
│   │   │   └── DataProcessor.test.ts
│   │   ├── __mocks__/
│   │   │   └── sample-data.json
│   │   ├── README.md
│   │   ├── config.ts
│   │   ├── index.ts
│   │   ├── DataProcessor.ts
│   │   ├── DataProcessor.model.ts
│   │   └── DataProcessor.context.ts
│   │
│   └── PaymentGateway/
│       ├── __tests__/
│       │   └── PaymentGateway.test.ts
│       ├── __mocks__/
│       │   └── payment-responses.json
│       ├── README.md
│       ├── config.ts
│       ├── index.ts
│       ├── PaymentGateway.ts
│       ├── PaymentGateway.model.ts
│       └── PaymentGateway.context.ts
│
├── services/                          # Cross-component services
│   ├── LoggingService/
│   │   ├── __tests__/
│   │   ├── __mocks__/
│   │   ├── README.md
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── LoggingService.ts
│   └── ...
│
└── utils/                             # Shared utilities
    └── ...
```

## MCP Architecture Alignment

This self-contained structure aligns with the MCP pattern as follows:

1. **Models**: Each component has its own model file (`Component.model.ts`) implementing interfaces from `src/models/interfaces/`
2. **Contexts**: Component-specific contexts (`Component.context.ts`) handle state management and persistence
3. **Protocols/Interfaces**: Defined in central locations and implemented by components
4. **Services**: Components that orchestrate operations across multiple other components

## Component Structure Elements

Each component folder contains:

- **__tests__/**: All test files related to the component
- **__mocks__/**: Mock data and service mocks for testing
- **README.md**: Documentation on component purpose, usage, and API
- **config.ts**: Component-specific configuration 
- **index.ts**: Public API exports that define what's accessible from outside
- **Component.ts**: Main implementation
- **Component.model.ts**: Component data model (optional)
- **Component.context.ts**: Component context for state management (optional)

## When to Use This Structure

- Medium to large applications with clear functional boundaries
- Projects where code is organized by domain or capability
- Systems with multiple developers working on different components
- Applications emphasizing modularity and maintainability

## Advantages

- **Self-containment**: Everything related to a component is in one location
- **Testability**: Tests and mocks are directly associated with their components
- **Documentation**: README files provide component-specific documentation
- **Discoverability**: Clear folder structure makes it easy to find components
- **Maintainability**: Changes to a component are contained within its folder
- **Isolation**: Components are well-encapsulated with clear boundaries

## Disadvantages

- **Potential for duplication**: Common functionality may be duplicated across components
- **Navigation complexity**: More directories to navigate
- **Project structure depth**: Can lead to deeply nested folder structures

## Best Practices

1. **Clear Public APIs**: Each component should export a clean public API via its `index.ts`
2. **Consistent Structure**: Maintain the same folder structure across all components
3. **Self-documentation**: README files should explain component purpose, usage, and API
4. **Configuration separation**: Keep component-specific configuration in `config.ts`
5. **Dependency Injection**: Components should receive dependencies rather than creating them

## Example Implementation

An authentication component might look like:

```typescript
// UserAuthentication/index.ts
export { authenticate, logout, verifyToken } from './UserAuthentication';
export type { User, AuthenticationResult } from './UserAuthentication.model';

// UserAuthentication/UserAuthentication.ts
import { UserModel } from './UserAuthentication.model';
import { config } from './config';
import { AuthContext } from './UserAuthentication.context';

export async function authenticate(username: string, password: string): Promise<AuthenticationResult> {
  // Implementation
}

export async function logout(): Promise<void> {
  // Implementation
}

export function verifyToken(token: string): boolean {
  // Implementation
}

// UserAuthentication/config.ts
export const config = {
  tokenExpiration: 3600,
  authEndpoint: '/api/auth',
  // Other component-specific configuration
};
```

This promotes clear component boundaries while supporting the MCP architecture pattern.