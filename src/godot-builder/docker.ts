import {getExecOutput, ExecOptions} from '@actions/exec'

// import { getActionFolder } from './action'
import {getActionFolder, getWorkspace} from './action'
import BuildConfig from './build-config'
import Image from './image'

export async function run(
  image: Image,
  config: BuildConfig,
  debug = false,
  options: ExecOptions | undefined = undefined
): Promise<string> {
  await getExecOutput('ls /home/runner/work/godot-builder/godot-builder/')
  await getExecOutput('ls /home/runner/work/godot-builder/dist/runners/linux')

  const result = await getExecOutput(
    getUnixCommand(image, config, debug),
    undefined,
    options
  )
  return `stdout: ${result.stdout} \n stderr: ${result.stderr}`
}

function getUnixCommand(
  image: Image,
  config: BuildConfig,
  debug = false
): string {
  return `docker run \
    -w /github/workspace/ \
    --rm \
    -e GITHUB_WORKSPACE=/github/workspace \
    -e PROJECT_PATH="${config.projectPath}" \
    -e EXPORT_PRESET="${config.exportPreset}" \
    -e EXPORT_PATH="${config.exportPath}" \
    -e EXPORT_NAME="${config.exportName}" \
    ${debug ? '-e DEBUG=1' : ''} \
    -v ${getWorkspace()}:/github/workspace \
    -v "${getActionFolder()}/runners/linux/:/scripts/" \
    --entrypoint /bin/bash \
    ${image.generateTag()} \
    -c scripts/build.sh`
}
