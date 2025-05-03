#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from '../commands/init';
import { generateCommand } from '../commands/generate';
import { updateCommand } from '../commands/update';
import pkg from '../../package.json';

const program = new Command();

program
  .name('corules')
  .description('Generate consistent AI assistant rules across different IDE environments')
  .version(pkg.version);

program
  .command('init')
  .description('Initialize a new coRules configuration file')
  .action(initCommand);

program
  .command('generate')
  .description('Generate AI rule files based on configuration')
  .option('-c, --config <path>', 'path to config file', './corules.config.js')
  .action(generateCommand);

program
  .command('update')
  .description('Update existing AI rule files')
  .option('-c, --config <path>', 'path to config file', './corules.config.js')
  .action(updateCommand);

program.parse(process.argv);