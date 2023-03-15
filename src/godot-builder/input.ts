import * as core from '@actions/core';
import fs from 'node:fs';
import path from 'node:path';

import { engineVersions, targetPlatforms } from './input-validation';


class Input {
  public static getInput(parameter: string): string | undefined {
    const input = core.getInput(parameter);
    if (input || input !== '')
      return input
  }

  static get engineVersion(): string {
    const engineVersion = Input.getInput('engine-version') || 'latest';
    if (!engineVersions.includes(engineVersion))
      throw 'Engine version "${engineVersion}" is not supported';

    return engineVersion
  }

  static get targetPlatform(): string {
    const targetPlatform = Input.getInput('target-platform');
    if (!targetPlatform)
      throw 'No target platform was specified';

    if (!targetPlatforms.includes(targetPlatform))
      throw 'Target platform "${targetPlatform}" is not supported';

    return targetPlatform
  }

  static get projectPath(): string {
    const projectPath = Input.getInput('project-path') || './';
    if (!fs.existsSync(path.join(projectPath, 'project.godot')))
      throw 'No project was found at "${projectPath}"'

    return projectPath
  }

  static get exportPreset(): string {
    const exportPreset = Input.getInput('export-preset');
    const exportPresetsPath = path.join(Input.projectPath, 'export_presets.cfg');

    if (!exportPreset)
      throw 'No export preset was specified';

    if (!fs.existsSync(exportPresetsPath))
      throw 'No export presets configuration was found';

    if (!fs.readFileSync(exportPresetsPath).includes(exportPreset))
      throw 'Export preset "${exportPreset}" is not present in the configuration';

    return exportPreset;
  }

  static get exportPath(): string {
    return Input.getInput('export-path') || 'out/';
  }

  static get exportName(): string {
    const exportName = Input.getInput('export-name');

    if (!exportName)
      throw 'No export name was specified';

    return exportName;
  }
}

export default Input
