import * as core from '@actions/core'

import {BuildConfig, Image, runDockerExport} from './godot-builder'

async function main() {
  try {
    const buildConfig = new BuildConfig()
    const image = new Image(buildConfig)

    await runDockerExport(image, buildConfig)
  } catch (error) {
    core.error((error as Error).message)
  }
}

main()
