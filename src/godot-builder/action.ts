import path from 'node:path'

export const supportedRunners: string[] = [
  'darwin',
  'linux'
]

export function checkRunnerCompatibility(): void {
  if (!supportedRunners.includes(process.platform))
    throw new Error('The current platform "${process.platform}" is not supported')
}

export function getActionFolder(): string {
  return `${getRootFolder()}/dist`
}

export function getRootFolder(): string {
  return path.dirname(path.dirname(path.dirname(__filename)))
}
