import * as inquirer from 'inquirer';
import * as fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import { Config } from '../types/config';
import { architectureTemplates, strictnessLevels, ideFlavors } from '../templates/defaults';

export async function initCommand() {
  console.log(chalk.blue('Welcome to coRules! Let\'s setup your configuration.'));
  
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'architecture',
      message: 'What project architecture are you using?',
      choices: Object.keys(architectureTemplates)
    },
    {
      type: 'list',
      name: 'strictness',
      message: 'Select a strictness level for AI assistants:',
      choices: Object.keys(strictnessLevels),
      default: 'medium'
    },
    {
      type: 'checkbox',
      name: 'flavors',
      message: 'Select which AI assistant flavors to generate rules for:',
      choices: Object.keys(ideFlavors),
      default: ['vscode', 'github', 'cursor']
    },
    {
      type: 'checkbox',
      name: 'rules',
      message: 'Select which rule categories to include:',
      choices: [
        { name: 'Code formatting (Prettier)', value: 'prettier' },
        { name: 'Linting rules', value: 'linting' },
        { name: 'Documentation requirements', value: 'docs' },
        { name: 'Import checking', value: 'imports' },
        { name: 'Type checking', value: 'types' },
        { name: 'Testing requirements', value: 'testing' },
        { name: 'Refactoring guidelines', value: 'refactoring' }
      ],
      default: ['prettier', 'linting', 'docs']
    }
  ]);

  const config: Config = {
    architecture: answers.architecture,
    strictness: answers.strictness,
    flavors: answers.flavors,
    rules: answers.rules
  };

  const configPath = path.join(process.cwd(), 'corules.config.js');
  
  const configContent = `module.exports = ${JSON.stringify(config, null, 2)};`;
  
  await fs.writeFile(configPath, configContent, 'utf8');
  console.log(chalk.green('✓ Configuration created successfully!'));
  console.log(chalk.yellow(`Next step: Run ${chalk.bold('corules generate')} to create your AI rule files.`));
}