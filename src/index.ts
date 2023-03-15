import * as core from '@actions/core'

import {BuildConfig} from './godot-builder'

async function main() {
  try {
    const buildConfig = new BuildConfig()
    console.log(buildConfig.engineVersion)
  } catch (error) {
    core.error((error as Error).message)
  }
}

main()
