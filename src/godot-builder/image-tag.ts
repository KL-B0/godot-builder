import BuildConfig from './build-config'

class ImageTag {
  readonly engineVersion: string
  readonly androidSupport: boolean
  readonly blenderSupport: boolean

  constructor(config: BuildConfig) {
    this.engineVersion = config.engineVersion
    this.androidSupport = false
    this.blenderSupport = false
  }

  generateTag(): string {
    return this.engineVersion
  }
}

export default ImageTag
