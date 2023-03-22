import path from 'node:path'
import {supportedConfigurations} from './settings'

export function checkRunnerCompatibility(runner: string, target: string): void {
  // Check for an unsupported runner
  if (!['darwin', 'linux'].includes(runner))
    throw new Error(`The current runner "${runner}" is not supported`)

  // Check for an unsupported target
  if (!(target in supportedConfigurations))
    throw new Error(
      `The target platform "${target}" is not currently supported`
    )

  const expectedRunner: string = supportedConfigurations[target]
  if (runner !== expectedRunner)
    throw new Error(
      `The target platform "${target}" requires "${expectedRunner}" runner, but "${runner}" was instead provided`
    )
}

export function getActionFolder(): string {
  return `${getRootFolder()}/dist`
}

export function getRootFolder(): string {
  return path.dirname(path.dirname(__filename))
}

export function getWorkspace(): string {
  if (!process.env.GITHUB_WORKSPACE) return ''

  return process.env.GITHUB_WORKSPACE
}
