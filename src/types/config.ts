export interface Config {
  architecture: string;
  strictness: string;
  flavors: string[];
  rules: string[];
}

export interface ArchitectureTemplate {
  name: string;
  description: string;
  folders: string[];
  patterns: Record<string, string>;
}

export interface StrictnessLevel {
  name: string;
  description: string;
  level: number;
  features: string[];
}

export interface IdeFlavor {
  name: string;
  description: string;
  outputPath: string;
  templatePath: string;
  fileExtension: string;
}

export interface RuleCategory {
  name: string;
  description: string;
  templates: Record<string, string>;
}