import {getExecOutput, ExecOptions} from '@actions/exec'

// import { getActionFolder } from './action'
import {getWorkspace} from './action'
import BuildConfig from './build-config'
import Image from './image'

export async function run(
  image: Image,
  config: BuildConfig,
  // debug = false,
  options: ExecOptions | undefined = undefined
): Promise<string> {
  await getExecOutput('docker --version')

  const result = await getExecOutput(
    'docker run',
    [
      // '-w /github/workspace/',
      '--rm',
      '-e GITHUB_WORKSPACE=/github/workspace',
      `-e PROJECT_PATH="${config.projectPath}"`,
      `-e EXPORT_PRESET="${config.exportPreset}"`,
      `-e EXPORT_PATH="${config.exportPath}"`,
      `-e EXPORT_NAME="${config.exportName}"`,
      //`${debug ? '-e DEBUG=1' : ''}`,
      `-v "${getWorkspace()}":/github/workspace`,
      // `-v "/home/runner/work/godot-builder/dist/runners/linux/build.sh:/build.sh"`,
      //`--entrypoint /build.sh`,
      `${image.generateTag()}`
    ],
    options
  )

  return `stdout: ${result.stdout} \n stderr: ${result.stderr}`
}
