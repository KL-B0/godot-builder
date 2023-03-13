import Config from '../src/config/config'
import { Parameter, engineVersions, targetPlatforms } from '../src/config/supported'


test('engine version validation', async () => {
  expect(() => {
    Config.processParameter(Parameter.EngineVersion, '3.0')
  }).toThrow();

  expect(() => {
    Config.processParameter(Parameter.EngineVersion, '3.5.1')
  }).toThrow();

  const randomVersion = engineVersions[Math.floor(Math.random() * engineVersions.length)];
  const result = Config.processParameter(
    Parameter.EngineVersion,
    randomVersion
  )
  expect(result).toEqual(randomVersion);
})


test('target platform validation', async () => {
  expect(() => {
    Config.processParameter(Parameter.TargetPlatform, 'openbsd')
  }).toThrow();

  expect(() => {
    Config.processParameter(Parameter.TargetPlatform, 'win')
  }).toThrow();

  const randomPlatform = targetPlatforms[Math.floor(Math.random() * targetPlatforms.length)];
  const result = Config.processParameter(
    Parameter.TargetPlatform,
    randomPlatform
  )
  expect(result).toEqual(randomPlatform);
})
