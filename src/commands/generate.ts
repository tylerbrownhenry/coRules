import * as fs from 'fs-extra';
import * as path from 'path';
import * as Mustache from 'mustache';
import chalk from 'chalk';
import { Config } from '../types/config';
import { ideFlavors } from '../templates/defaults';

interface GenerateOptions {
  config: string;
}

export async function generateCommand(options: GenerateOptions) {
  try {
    const configPath = path.resolve(process.cwd(), options.config);
    
    // Check if config file exists
    if (!fs.existsSync(configPath)) {
      console.error(chalk.red(`Error: Configuration file not found at ${configPath}`));
      console.log(chalk.yellow(`Run ${chalk.bold('corules init')} to create a configuration file.`));
      process.exit(1);
    }
    
    console.log(chalk.blue('Loading configuration...'));
    const config: Config = require(configPath);
    
    // Generate rule files for each specified flavor
    for (const flavorId of config.flavors) {
      const flavor = ideFlavors[flavorId];
      
      if (!flavor) {
        console.warn(chalk.yellow(`Warning: Flavor "${flavorId}" not found, skipping.`));
        continue;
      }
      
      console.log(chalk.blue(`Generating ${flavor.name} rules...`));
      
      // Ensure output directory exists
      const outputDir = path.join(process.cwd(), flavor.outputPath);
      await fs.ensureDir(outputDir);
      
      // Load and process templates
      const templateDir = path.join(__dirname, '../../', flavor.templatePath);
      
      // Get list of all files in the template directory
      const templateFiles = await getTemplateFiles(templateDir);
      
      for (const templateFile of templateFiles) {
        const relativePath = path.relative(templateDir, templateFile);
        const outputPath = path.join(outputDir, relativePath)
          .replace('.template', ''); // Remove .template extension
          
        // Create output directory if it doesn't exist
        await fs.ensureDir(path.dirname(outputPath));
        
        // Read template content
        const templateContent = await fs.readFile(templateFile, 'utf8');
        
        // Render template with config
        const rendered = Mustache.render(templateContent, {
          config,
          architecture: config.architecture,
          strictness: config.strictness,
          rules: config.rules,
        });
        
        // Write to output file
        await fs.writeFile(outputPath, rendered, 'utf8');
        console.log(chalk.green(`  ✓ Created ${path.relative(process.cwd(), outputPath)}`));
      }
    }
    
    console.log(chalk.green('✓ Rule generation complete!'));
  } catch (error) {
    console.error(chalk.red('Error generating rules:'), error);
    process.exit(1);
  }
}

async function getTemplateFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  const files = await Promise.all(entries.map((entry) => {
    const resolvedPath = path.resolve(dir, entry.name);
    return entry.isDirectory() ? 
      getTemplateFiles(resolvedPath) : 
      [resolvedPath];
  }));
  
  return files.flat();
}