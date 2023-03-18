export const supportedRunners = [
  'darwin',
  'linux'
]

export function checkRunner(): void {
  if (!supportedRunners.includes(process.platform))
    throw new Error('The current platform "${process.platform}" is not supported')
}
