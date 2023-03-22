import {
  engineVersion,
  targetPlatform,
  projectPath,
  exportPreset,
  exportPath,
  exportName,
  exportMode
} from './input'

class BuildConfig {
  readonly engineVersion: string
  readonly targetPlatform: string
  readonly projectPath: string
  readonly exportPreset: string
  readonly exportPath: string
  readonly exportName: string
  readonly exportMode: string

  constructor() {
    this.engineVersion = engineVersion()
    this.targetPlatform = targetPlatform()
    this.projectPath = projectPath()
    this.exportPreset = exportPreset()
    this.exportPath = exportPath()
    this.exportName = exportName()
    this.exportMode = exportMode()
  }
}

export default BuildConfig
