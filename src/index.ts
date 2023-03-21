import * as core from '@actions/core'

import {BuildConfig, Image} from './godot-builder'
import {run} from './godot-builder/docker'

async function main() {
  try {
    const buildConfig = new BuildConfig()
    const image = new Image(buildConfig)

    await run(image, buildConfig)
  } catch (error) {
    core.error((error as Error).message)
  }
}

main()
