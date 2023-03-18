import * as core from '@actions/core'

import { BuildConfig, ImageTag } from './godot-builder'

async function main() {
  try {
    const buildConfig = new BuildConfig()
    const imageTag = new ImageTag(buildConfig)


  } catch (error) {
    core.error((error as Error).message)
  }
}

main()
