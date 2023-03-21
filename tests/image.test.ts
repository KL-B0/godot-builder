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

      const buildConfig = new BuildConfig()
      const image = new Image(buildConfig)

      expect(image.engineVersion).toBe('4.0')
      expect(image.androidSupport).toBe(false)
      expect(image.blenderSupport).toBe(false)

      expect(spy).toHaveBeenCalledTimes(7)
    })
  })

  describe('generateTag', () => {
    it('generates a suitable base image', () => {
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

      const buildConfig = new BuildConfig()
      const image = new Image(buildConfig)

      expect(image.generateTag()).toBe('4.0')

      expect(spy).toHaveBeenCalledTimes(7)
    })
  })
})
