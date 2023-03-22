// Specify supported configurations following: platform => runner
const supportedConfigurations: { [id: string]: string } = {
  'windows': 'linux',
  'macos': 'darwin',
  'linux': 'linux',
  'android': 'linux',
  'ios': 'darwin'
}

// Specify supported engine versions
const supportedEngineVersions: string[] = ['4.0', 'latest']

export { supportedConfigurations, supportedEngineVersions }
