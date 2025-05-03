/**
 * coRules - Professional configuration generator for AI coding assistants
 * @module coRules
 */

// Core functionality
export { generateRules } from './lib/generator';
export { loadConfig, saveConfig } from './lib/config';
export { validateConfig } from './lib/validator';

// Types
export { Config, ArchitectureTemplate, StrictnessLevel, IdeFlavor, RuleCategory } from './types/config';

// Templates and defaults
export { architectureTemplates, strictnessLevels, ideFlavors } from './templates/defaults';

// Version information
export { version } from '../package.json';

/**
 * Initialize a new coRules configuration
 * @param options - Configuration options
 * @returns Promise that resolves when configuration is created
 */
export async function initializeConfig(options?: {
  configPath?: string;
  interactive?: boolean;
}) {
  const { initCommand } = await import('./commands/init');
  return initCommand(options);
}

/**
 * Generate AI rule files based on configuration
 * @param options - Generation options
 * @returns Promise that resolves when rule files are generated
 */
export async function generate(options: {
  configPath?: string;
  outputDir?: string;
  flavors?: string[];
}) {
  const { generateCommand } = await import('./commands/generate');
  return generateCommand(options);
}

/**
 * Update existing AI rule files
 * @param options - Update options
 * @returns Promise that resolves when rule files are updated
 */
export async function update(options: {
  configPath?: string;
  outputDir?: string;
}) {
  const { updateCommand } = await import('./commands/update');
  return updateCommand(options);
}