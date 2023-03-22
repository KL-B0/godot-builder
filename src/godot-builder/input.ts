import * as core from '@actions/core'
import {existsSync, readFileSync} from 'node:fs'
import {join} from 'node:path'

import {supportedConfigurations, supportedEngineVersions} from './settings'

// General function to acquire input parameters
function getInput(parameter: string): string | undefined {
  const input = core.getInput(parameter)
  if (input || input !== '') return input
}

export function engineVersion(): string {
  const version = getInput('engine-version') || 'latest'

  // Check if the engine version is supported
  if (!supportedEngineVersions.includes(version))
    throw new Error(`Engine version "${engineVersion}" is not supported`)

  return version
}

export function targetPlatform(): string {
  const platform = getInput('target-platform')

  // Check if the target platform is not set
  if (!platform) throw new Error('No target platform was specified')

  // Check if the target platform is supported
  if (!Object.keys(supportedConfigurations).includes(platform))
    throw new Error(`Target platform "${targetPlatform}" is not supported`)

  return platform
}

export function projectPath(): string {
  const projPath = getInput('project-path') || '.'

  // Check if the project path actually exists
  if (!existsSync(join(projPath, 'project.godot')))
    throw new Error(`No project was found at "${projectPath}"`)

  return projPath
}

export function exportPreset(): string {
  const preset = getInput('export-preset')
  const exportPresetsPath = join(projectPath(), 'export_presets.cfg')

  // Check if the export preset is not set
  if (!preset) throw new Error('No export preset was specified')

  // Check if the export presets file actually exists
  if (!existsSync(exportPresetsPath))
    throw new Error('No export presets configuration was found')

  // Check if the export presets file contains the selected configuration
  if (!readFileSync(exportPresetsPath).includes(preset))
    throw new Error(
      `Export preset "${exportPreset}" is not present in the configuration`
    )

  return preset
}

export function exportPath(): string {
  return getInput('export-path') || 'out/'
}

export function exportName(): string {
  const name = getInput('export-name')

  // Check if the export name is not set
  if (!name) throw new Error('No export name was specified')

  return name
}

export function exportMode(): string {
  const mode = getInput('export-mode') || 'release'

  // Check if the export mode if between "debug" and "release"
  if (!['debug', 'release'].includes(mode))
    throw new Error(
      `Export mode must be either "debug" or "release", instead "${mode}" was specified`
    )

  return mode
}
