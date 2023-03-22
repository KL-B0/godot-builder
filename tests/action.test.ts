import fs from 'node:fs'
import path from 'node:path'

import {
  checkRunnerCompatibility,
  getActionFolder,
  getRootFolder,
  getWorkspace
} from '../src/godot-builder/action'

describe('Action', () => {
  describe('runner compatibility check', () => {
    it('throws on unrecognized runner', () => {
      expect(() => checkRunnerCompatibility('openbsd', 'windows')).toThrow()
    })

    it('throws on unsupported target', () => {
      expect(() => checkRunnerCompatibility('linux', 'openbsd')).toThrow()
    })

    it('throws on mismatched target platform and runner', () => {
      // Check the Apple family targets
      ;['win32', 'linux'].forEach(runner => {
        ;['macos', 'ios'].forEach(target => {
          expect(() => checkRunnerCompatibility(runner, target)).toThrow()
        })
      })

      // Check the other targets
      ;['win32', 'darwin'].forEach(runner => {
        ;['windows', 'linux', 'android'].forEach(target => {
          expect(() => checkRunnerCompatibility(runner, target)).toThrow()
        })
      })
    })

    it('returns on matched target platform and runner', () => {
      // Check the Apple family targets
      ;['macos', 'ios'].forEach(target => {
        expect(() => checkRunnerCompatibility('darwin', target)).not.toThrow()
      })

      // Check the other targets
      ;['windows', 'linux', 'android'].forEach(target => {
        expect(() => checkRunnerCompatibility('linux', target)).not.toThrow()
      })
    })
  })

  it('returns the root folder', () => {
    expect(fs.existsSync(getRootFolder())).toBe(true)
  })

  it('returns the action folder', () => {
    const actionFolder = getActionFolder()

    expect(path.basename(actionFolder)).toBe('dist')
  })

  it('returns the workspace', () => {
    process.env.GITHUB_WORKSPACE = 'test/'

    expect(getWorkspace()).toBe('test/')
  })
})
