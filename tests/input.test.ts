import * as core from '@actions/core'

import {
  engineVersion,
  targetPlatform,
  projectPath,
  exportPreset,
  exportPath,
  exportName,
  exportMode
} from '../src/godot-builder/input'
import {
  supportedConfigurations,
  supportedEngineVersions
} from '../src/godot-builder/settings'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Input', () => {
  describe('engineVersion', () => {
    it('returns the default value', () => {
      expect(engineVersion()).toStrictEqual('latest')
    })

    it('throws on unsupported values', () => {
      const mockValue = '3.0'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(() => {
        engineVersion()
      }).toThrow()
      expect(spy).toHaveBeenCalled()
    })

    it('returns a supported value', () => {
      const mockValue =
        supportedEngineVersions[
          Math.floor(Math.random() * supportedEngineVersions.length)
        ]
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(engineVersion()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('targetPlatform', () => {
    it('throws with no given input', () => {
      expect(() => {
        targetPlatform()
      }).toThrow()
    })

    it('throws on unsupported values', () => {
      const mockValue = 'raspberry'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(() => {
        targetPlatform()
      }).toThrow()
      expect(spy).toHaveBeenCalled()
    })

    it('returns a supported value', () => {
      const targetPlatforms = Object.keys(supportedConfigurations)

      const mockValue =
        targetPlatforms[Math.floor(Math.random() * targetPlatforms.length)]
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(targetPlatform()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('projectPath', () => {
    it('throws on unsupported values', () => {
      const mockValue = 'nonexistent-project/'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(() => {
        projectPath()
      }).toThrow()
      expect(spy).toHaveBeenCalled()
    })

    it('returns a supported value', () => {
      const mockValue = 'test-project/'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(projectPath()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('exportPreset', () => {
    it('throws with no given input', () => {
      expect(() => {
        exportPreset()
      }).toThrow()
    })

    it('throws on no export presets file found', () => {
      const spy = jest.spyOn(core, 'getInput')
      spy.mockImplementationOnce(() => {
        return 'Windows Desktop'
      })
      spy.mockImplementationOnce(() => {
        return 'invalid-project/'
      })

      expect(() => {
        exportPreset()
      }).toThrow()
      expect(spy).toHaveBeenCalledTimes(2)
    })

    it('throws on missing export presets configuration', () => {
      const spy = jest.spyOn(core, 'getInput')
      spy.mockImplementationOnce(() => {
        return 'Non-existing preset'
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/'
      })

      expect(() => {
        exportPreset()
      }).toThrow()
      expect(spy).toHaveBeenCalledTimes(2)
    })

    it('throws on unsupported values', () => {
      const spy = jest.spyOn(core, 'getInput')
      spy.mockImplementationOnce(() => {
        return 'Non-existing preset'
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/'
      })

      expect(() => {
        exportPreset()
      }).toThrow()
      expect(spy).toHaveBeenCalledTimes(2)
    })

    it('returns a supported value', () => {
      const mockValue = 'Windows Desktop'

      const spy = jest.spyOn(core, 'getInput')
      spy.mockImplementationOnce(() => {
        return mockValue
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/'
      })

      expect(exportPreset()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalledTimes(2)
    })
  })

  describe('exportPath', () => {
    it('returns the default value', () => {
      expect(exportPath()).toStrictEqual('out/')
    })

    it('returns a supported value', () => {
      const mockValue = 'build/linux'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(exportPath()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('exportName', () => {
    it('throws with no given input', () => {
      expect(() => {
        exportName()
      }).toThrow()
    })

    it('returns a supported value', () => {
      const mockValue = 'project'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(exportName()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('exportMode', () => {
    it('returns the default value', () => {
      expect(exportMode()).toStrictEqual('release')
    })

    it('throws on unsupported values', () => {
      const mockValue = 'invalid'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)

      expect(() => {
        exportMode()
      }).toThrow()
      expect(spy).toHaveBeenCalled()
    })

    it('returns the "debug" value', () => {
      const mockValue = 'debug'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(exportMode()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalled()
    })

    it('returns the "release" value', () => {
      const mockValue = 'release'
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue)
      expect(exportMode()).toStrictEqual(mockValue)
      expect(spy).toHaveBeenCalled()
    })
  })
})
