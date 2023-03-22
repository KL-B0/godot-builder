import * as core from '@actions/core'
import fs from 'node:fs'
import path from 'node:path'

import {engineVersions, targetPlatforms} from './input-validation'

function getInput(parameter: string): string | undefined {
  const input = core.getInput(parameter)
  if (input || input !== '') return input
}

export function engineVersion(): string {
  const version = getInput('engine-version') || 'latest'
  if (!engineVersions.includes(version))
    throw new Error(`Engine version "${engineVersion}" is not supported`)

  return version
}

export function targetPlatform(): string {
  const platform = getInput('target-platform')
  if (!platform) throw new Error('No target platform was specified')

  if (!targetPlatforms.includes(platform))
    throw new Error(`Target platform "${targetPlatform}" is not supported`)

  return platform
}

export function projectPath(): string {
  const projPath = getInput('project-path') || './'
  if (!fs.existsSync(path.join(projPath, 'project.godot')))
    throw new Error(`No project was found at "${projectPath}"`)

  return projPath
}

export function exportPreset(): string {
  const preset = getInput('export-preset')
  const exportPresetsPath = path.join(projectPath(), 'export_presets.cfg')

  if (!preset) throw new Error('No export preset was specified')

  if (!fs.existsSync(exportPresetsPath))
    throw new Error('No export presets configuration was found')

  if (!fs.readFileSync(exportPresetsPath).includes(preset))
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

  if (!name) throw new Error('No export name was specified')

  return name
}
