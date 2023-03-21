import {existsSync, mkdirSync} from 'node:fs'
import path from 'node:path'

import Image from './image'

import {getActionFolder, getWorkspace} from './action'
import BuildConfig from './build-config'

//export async function run(image: string, parameters: any, entryPoint): void {

//}

export function getUnixCommand(
  image: Image,
  config: BuildConfig,
  debug: boolean,
  runnerPath: string
): string {
  const githubHome = path.join(runnerPath, '_github_home')
  if (!existsSync(githubHome)) mkdirSync(githubHome)
  const githubWorkflow = path.join(runnerPath, '_github_workflow')
  if (!existsSync(githubWorkflow)) mkdirSync(githubWorkflow)

  return `docker run \
    -w /github/workspace/ \
    --rm \
    -e GITHUB_WORKSPACE=/github/workspace \
    -e EXPORT_PRESET=${config.exportPreset} \
    -e EXPORT_PATH=${config.exportPath} \
    -e EXPORT_NAME=${config.exportName} \
    ${debug ? `-e DEBUG=1` : ``} \
    -v "${githubHome}":"/root:z" \
    -v "${githubWorkflow}":"/github/workflow:z" \
    -v "${getWorkspace()}":"/github/workspace:z" \
    -v "${getActionFolder()}/runners/linux/build.sh:/build.sh:z" \
    --entrypoint /build.sh \
    ${image.generateTag()}`
}
