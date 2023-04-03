import * as core from '@actions/core'

import BuildConfig from '../src/godot-builder/build-config'
import Image from '../src/godot-builder/image'

describe('ImageTag', () => {
  describe('constructor', () => {
    it('initializes on valid parameters', () => {
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
      const image = new Image(buildConfig)

      expect(image.engineVersion).toBe('4.0')
      expect(image.androidSupport).toBe(false)
      expect(image.blenderSupport).toBe(false)

      expect(spy).toHaveBeenCalledTimes(8)
    })
  })

  describe('generateTag', () => {
    it('generates a suitable windows image', () => {
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
      const image = new Image(buildConfig)

      expect(image.generateTag()).toBe('klb0/godot:4.0-windows')

      expect(spy).toHaveBeenCalledTimes(8)
    })
  })

  describe('generateTag', () => {
    it('generates a suitable linux image', () => {
      const spy = jest.spyOn(core, 'getInput')
      spy.mockImplementationOnce(() => {
        return '4.0'
      })
      spy.mockImplementationOnce(() => {
        return 'linux'
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/'
      })
      spy.mockImplementationOnce(() => {
        return 'Linux/X11'
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/'
      })
      spy.mockImplementationOnce(() => {
        return 'build/linux'
      })
      spy.mockImplementationOnce(() => {
        return 'game.x86_64'
      })
      spy.mockImplementationOnce(() => {
        return 'release'
      })

      const buildConfig = new BuildConfig()
      const image = new Image(buildConfig)

      expect(image.generateTag()).toBe('klb0/godot:4.0-linux')

      expect(spy).toHaveBeenCalledTimes(8)
    })
  })
})
