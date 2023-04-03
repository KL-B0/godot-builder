import {getExecOutput, ExecOptions} from '@actions/exec'

import {getActionFolder, getWorkspace} from './action'
import BuildConfig from './build-config'
import Image from './image'

export default async function dockerExport(
  image: Image,
  config: BuildConfig,
  options: ExecOptions | undefined = undefined
): Promise<number> {
  const result = await getExecOutput(
    getUnixCommand(image, config),
    undefined,
    options
  )
  return result.exitCode
}

export function getUnixCommand(image: Image, config: BuildConfig): string {
  return `docker run \
    -w /github/workspace/ \
    --rm \
    -e GITHUB_WORKSPACE=/github/workspace \
    -e PROJECT_PATH="${config.projectPath}" \
    -e EXPORT_PRESET="${config.exportPreset}" \
    -e EXPORT_PATH="${config.exportPath}" \
    -e EXPORT_NAME="${config.exportName}" \
    ${config.exportMode === 'debug' ? '-e DEBUG=1' : ''} \
    -v ${getWorkspace()}:/github/workspace \
    -v "${getActionFolder()}/runners/linux/build.sh:/build.sh" \
    --entrypoint /bin/bash \
    ${image.generateTag()} \
    -c /build.sh`
}
