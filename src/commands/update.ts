import * as fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import { generateCommand } from './generate';

interface UpdateOptions {
  config: string;
}

export async function updateCommand(options: UpdateOptions) {
  try {
    const configPath = path.resolve(process.cwd(), options.config);
    
    // Check if config file exists
    if (!fs.existsSync(configPath)) {
      console.error(chalk.red(`Error: Configuration file not found at ${configPath}`));
      console.log(chalk.yellow(`Run ${chalk.bold('corules init')} to create a configuration file.`));
      process.exit(1);
    }
    
    console.log(chalk.blue('Updating AI rule files...'));
    
    // The update command reuses the generate command's functionality
    // but could perform additional checks or updates in the future
    await generateCommand(options);
    
    console.log(chalk.green('✓ Rule files updated successfully!'));
  } catch (error) {
    console.error(chalk.red('Error updating rule files:'), error);
    process.exit(1);
  }
}