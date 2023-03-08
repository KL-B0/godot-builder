const supportedGodotVersions = [
  '4.0'
]

const supportedTargetPlatforms = [
  'windows'
]

class Config {
  public readonly godotVersion: string;
  public readonly targetPlatform: string;
  public readonly exportPreset: string;
  public readonly projectPath: string;
  public readonly exportPath: string;
  public readonly exportName: string;

  constructor() {
    this.godotVersion = this.getConfig(SupportedConfigs.GodotVersion);
    this.targetPlatform = this.getConfig(SupportedConfigs.TargetPlatform);
    this.exportPreset = this.getConfig(SupportedConfigs.ExportPreset);
    this.projectPath = this.getConfig(SupportedConfigs.ProjectPath);
    this.exportPath = this.getConfig(SupportedConfigs.ExportPath);
    this.exportName = this.getConfig(SupportedConfigs.ExportName);
  }

  private getConfig(config: SupportedConfigs): string {
    return config
  }

  public static validateGodotVersion(godotVersion: string): void {
    if (!supportedGodotVersions.includes(godotVersion))
      throw "...";
  }
}

const enum SupportedConfigs {
  GodotVersion = 'godot-version',
  TargetPlatform = 'target-platform',
  ExportPreset = 'export-preset',
  ProjectPath = 'project-path',
  ExportPath = 'export-path',
  ExportName = 'export-name'
}

export default Config;
