import * as core from '@actions/core'

import {BuildConfig, Image} from './godot-builder'

async function main() {
  try {
    const buildConfig = new BuildConfig()
    const imageTag = new Image(buildConfig)
    console.log(imageTag.generateTag())
  } catch (error) {
    core.error((error as Error).message)
  }
}

main()
