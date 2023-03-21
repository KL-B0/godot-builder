import {existsSync, mkdirSync} from 'node:fs'
import path from 'node:path'
import {getExecOutput, ExecOptions} from '@actions/exec'

import {getActionFolder, getWorkspace} from './action'
import BuildConfig from './build-config'
import Image from './image'

import * as core from '@actions/core'

export async function run(
  image: Image,
  config: BuildConfig,
  debug = false,
  options: ExecOptions | undefined = undefined
): Promise<number> {
  const githubHome = path.join('', '_github_home')
  if (!existsSync(githubHome)) mkdirSync(githubHome)
  const githubWorkflow = path.join('', '_github_workflow')
  if (!existsSync(githubWorkflow)) mkdirSync(githubWorkflow)

  const result = await getExecOutput(
    'docker run',
    [
      '-w /github/workspace/',
      '-rm',
      '-e GITHUB_WORKSPACE=/github/workspace',
      `-e PROJECT_PATH = ${config.projectPath}`,
      `-e EXPORT_PRESET = ${config.exportPreset}`,
      `-e EXPORT_PATH = ${config.exportPath}`,
      `-e EXPORT_NAME = ${config.exportName}`,
      `${debug ? '-e DEBUG=1' : ''}`,
      `-v "${githubHome}": "/root:z"`,
      `-v "${githubWorkflow}": "/github/workflow:z"`,
      `-v "${getWorkspace()}": "/github/workspace:z"`,
      `-v "${getActionFolder()}/runners/linux/build.sh:/build.sh:z"`,
      `--entrypoint /build.sh`,
      `${image.generateTag()}`
    ],
    options
  )

  core.debug(result.stdout)

  return 0
}
