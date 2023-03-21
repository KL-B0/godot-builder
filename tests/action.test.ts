import fs from 'node:fs'
import path from 'node:path'

import { checkRunnerCompatibility, getActionFolder, getRootFolder } from '../src/godot-builder/action'

describe('Action', () => {
  describe('runner compatibility check', () => {
    it('throws for unsuppored platforms', () => {
      switch (process.platform) {
        case 'darwin':
        case 'linux':
          expect(() => checkRunnerCompatibility()).not.toThrow()
          break
        default:
          expect(() => checkRunnerCompatibility()).toThrow()
      }
    })
  })

  it('returns the root folder', () => {
    expect(path.basename(getRootFolder())).toBe('godot-builder')
    expect(fs.existsSync(getRootFolder())).toBe(true)
  })

  it('returns the action folder', () => {
    const actionFolder = getActionFolder()
    console.log(actionFolder)

    expect(path.basename(actionFolder)).toBe('dist')
    expect(fs.existsSync(actionFolder)).toBe(true)
  })
})
