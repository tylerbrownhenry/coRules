import { ArchitectureTemplate, StrictnessLevel, IdeFlavor } from '../types/config';

export const architectureTemplates: Record<string, ArchitectureTemplate> = {
  'monorepo': {
    name: 'Monorepo',
    description: 'A monorepo structure with multiple packages or services',
    folders: ['packages', 'apps', 'libs'],
    patterns: {
      'packages': 'Contains individual packages that can be published',
      'apps': 'Contains applications that use the packages',
      'libs': 'Contains shared libraries used across the repo'
    }
  },
  'microservices': {
    name: 'Microservices',
    description: 'A microservices architecture with separate services',
    folders: ['services', 'gateway', 'shared'],
    patterns: {
      'services': 'Contains individual microservices',
      'gateway': 'API gateway for routing requests',
      'shared': 'Shared code between services'
    }
  },
  'mvc': {
    name: 'MVC',
    description: 'Model-View-Controller architecture',
    folders: ['models', 'views', 'controllers', 'routes'],
    patterns: {
      'models': 'Data models and database interactions',
      'views': 'UI templates or presentation logic',
      'controllers': 'Request handlers and business logic',
      'routes': 'API route definitions'
    }
  },
  'feature-based': {
    name: 'Feature-based',
    description: 'Organization by features rather than technical role',
    folders: ['features', 'shared', 'services'],
    patterns: {
      'features': 'Feature modules containing all related code',
      'shared': 'Shared utilities and components',
      'services': 'Shared services used across features'
    }
  },
  'ddd': {
    name: 'Domain-driven Design',
    description: 'Organization based on domain concepts',
    folders: ['domains', 'application', 'infrastructure', 'interfaces'],
    patterns: {
      'domains': 'Domain models and business logic',
      'application': 'Application services and use cases',
      'infrastructure': 'External services and database access',
      'interfaces': 'API and UI interfaces'
    }
  }
};

export const strictnessLevels: Record<string, StrictnessLevel> = {
  'minimal': {
    name: 'Minimal',
    description: 'Very few constraints, AI can suggest almost anything',
    level: 1,
    features: ['basic suggestions']
  },
  'relaxed': {
    name: 'Relaxed',
    description: 'Basic code style enforcement',
    level: 2,
    features: ['basic suggestions', 'code style', 'linting']
  },
  'medium': {
    name: 'Medium',
    description: 'Documentation and consistency checks',
    level: 3,
    features: ['basic suggestions', 'code style', 'linting', 'documentation', 'consistency']
  },
  'strict': {
    name: 'Strict',
    description: 'Type and signature verification',
    level: 4,
    features: ['basic suggestions', 'code style', 'linting', 'documentation', 'consistency', 'type checking', 'signature verification']
  },
  'rigorous': {
    name: 'Rigorous',
    description: 'Full test coverage enforcement, comprehensive checks',
    level: 5,
    features: ['basic suggestions', 'code style', 'linting', 'documentation', 'consistency', 'type checking', 'signature verification', 'test coverage', 'import checks', 'refactoring guidelines']
  }
};

export const ideFlavors: Record<string, IdeFlavor> = {
  'vscode': {
    name: 'VS Code',
    description: 'Microsoft Visual Studio Code',
    outputPath: '.vscode',
    templatePath: 'template.vscode',
    fileExtension: '.json'
  },
  'cursor': {
    name: 'Cursor',
    description: 'Cursor IDE',
    outputPath: '.cursor',
    templatePath: 'template.cursor',
    fileExtension: '.cursor-rules.md'
  },
  'github': {
    name: 'GitHub Copilot',
    description: 'GitHub Copilot AI assistant',
    outputPath: '.github',
    templatePath: 'template.github',
    fileExtension: '.md'
  },
  'jetbrains': {
    name: 'JetBrains AI Assistant',
    description: 'JetBrains IDEs AI assistance',
    outputPath: '.jetbrains',
    templatePath: 'template.jetbrains',
    fileExtension: '.jetbrains-rules.md'
  }
};