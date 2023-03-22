import * as core from '@actions/core'

import BuildConfig from '../src/godot-builder/build-config'
import Image from '../src/godot-builder/image'

import {getUnixCommand} from '../src/godot-builder/docker'

describe('Docker', () => {
  it('generates a unix docker command', () => {
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

    expect(() => getUnixCommand(image, buildConfig)).not.toThrow()

    expect(spy).toHaveBeenCalledTimes(8)
  })
})
