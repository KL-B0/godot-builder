import { Parameter, engineVersions, targetPlatforms } from './supported'

import * as core from '@actions/core'
import * as fs from 'node:fs'
import * as path from 'node:path'


class Config {
  public readonly engineVersion: string;
  public readonly targetPlatform: string;
  public readonly exportPreset: string;
  public readonly projectPath: string;
  public readonly exportPath: string;
  public readonly exportName: string;

  constructor() {
    this.engineVersion = this.getParameter(Parameter.EngineVersion);
    this.targetPlatform = this.getParameter(Parameter.TargetPlatform);
    this.exportPreset = this.getParameter(Parameter.ExportPreset);
    this.projectPath = this.getParameter(Parameter.ProjectPath);
    this.exportPath = this.getParameter(Parameter.ExportPath);
    this.exportName = this.getParameter(Parameter.ExportName);
  }

  private getParameter(parameter: Parameter): string {
    return Config.processParameter(parameter, core.getInput(parameter));
  }

  public static processParameter(parameter: Parameter, value: string): string {
    switch (parameter) {
      case Parameter.EngineVersion:
        if (!engineVersions.includes(value))
          throw 'Engine version "${value}" is not supported';
        break;
      case Parameter.TargetPlatform:
        if (!targetPlatforms.includes(value))
          throw 'Target platform "${value}" is not supported';
        break;
      case Parameter.ExportPreset:
        // TODO add check
        break;
      case Parameter.ProjectPath:
        if (!fs.existsSync(path.join(value, 'project.godot')))
          throw 'No project was found at "${value}"'
        break;
    }
    return value
  }
}


export default Config;
