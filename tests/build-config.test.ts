import * as core from '@actions/core'

import BuildConfig from '../src/godot-builder/build-config'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('BuildConfig', () => {
  describe('instantiation', () => {
    it('instantiates with correct values', () => {
      const spy = jest.spyOn(core, 'getInput')
      spy.mockImplementationOnce(() => {
        return '4.0'
      })
      spy.mockImplementationOnce(() => {
        return 'windows'
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/'
      })
      spy.mockImplementationOnce(() => {
        return 'Windows Desktop'
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/'
      })
      spy.mockImplementationOnce(() => {
        return 'build/windows'
      })
      spy.mockImplementationOnce(() => {
        return 'game.exe'
      })
      spy.mockImplementationOnce(() => {
        return 'release'
      })

      const buildConfig = new BuildConfig()
      expect(buildConfig.engineVersion).toBe('4.0')
      expect(buildConfig.targetPlatform).toBe('windows')
      expect(buildConfig.projectPath).toBe('test-project/')
      expect(buildConfig.exportPreset).toBe('Windows Desktop')
      expect(buildConfig.exportPath).toBe('build/windows')
      expect(buildConfig.exportName).toBe('game.exe')
      expect(buildConfig.exportMode).toBe('release')

      expect(spy).toHaveBeenCalledTimes(8)
    })
  })
})
