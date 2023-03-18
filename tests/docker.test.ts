import { getUnixCommand } from '../src/godot-builder/docker'

describe('Docker', () => {
  describe('getUnixCommand', () => {
    it('returns a docker run command given the image tag', () => {
      const imageTag = '4.0'
      const projectPath = 'test-project/'
      expect(getUnixCommand(imageTag, projectPath)).toBe(
        'docker run \
        --rm \
        '
      )
    })
  })
})
