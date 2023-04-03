import BuildConfig from './build-config'

class Image {
  readonly targetPlatform: string
  readonly engineVersion: string
  readonly androidSupport: boolean
  readonly blenderSupport: boolean

  constructor(config: BuildConfig) {
    this.targetPlatform = config.targetPlatform
    this.engineVersion = config.engineVersion
    this.androidSupport = false
    this.blenderSupport = false
  }

  generateTag(): string {
    return `klb0/godot:${this.engineVersion}-${this.targetPlatform}`
  }
}

export default Image
