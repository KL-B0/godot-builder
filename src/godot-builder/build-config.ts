import {
  engineVersion,
  targetPlatform,
  projectPath,
  exportPreset,
  exportPath,
  exportName
} from './input'

class BuildConfig {
  readonly engineVersion: string
  readonly targetPlatform: string
  readonly projectPath: string
  readonly exportPreset: string
  readonly exportPath: string
  readonly exportName: string

  constructor() {
    this.engineVersion = engineVersion()
    this.targetPlatform = targetPlatform()
    this.projectPath = projectPath()
    this.exportPreset = exportPreset()
    this.exportPath = exportPath()
    this.exportName = exportName()
  }
}

export default BuildConfig
