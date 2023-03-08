import Config from '../src/config/config'

test('godot version validation', async () => {
  let config = new Config();

  expect(() => { config.validateGodotVersion(('2.1')) }).toThrow();
  expect(() => { config.validateGodotVersion(('3.5.0')) }).toThrow();
  expect(() => { config.validateGodotVersion(('4.0')) }).not.toThrow();
})

test('target platform validation', async () => {
  let config = new Config();

  expect(() => { config.validateTargetVersion(('macos')) }).toThrow();
  expect(() => { config.validateTargetVersion(('android')) }).toThrow();
  expect(() => { config.validateTargetVersion(('ios')) }).toThrow();
  expect(() => { config.validateTargetVersion(('windows')) }).not.toThrow();
  expect(() => { config.validateTargetVersion(('linux')) }).not.toThrow();
})

test('godot version validation', async () => {
  let config = new Config();

  expect(() => { config.validateGodotVersion(('2.1')) }).toThrow();
  expect(() => { config.validateGodotVersion(('3.5.0')) }).toThrow();
  expect(() => { config.validateGodotVersion(('4.0')) }).not.toThrow();
})

test('godot version validation', async () => {
  let config = new Config();

  expect(() => { config.validateGodotVersion(('2.1')) }).toThrow();
  expect(() => { config.validateGodotVersion(('3.5.0')) }).toThrow();
  expect(() => { config.validateGodotVersion(('4.0')) }).not.toThrow();
})

test('godot version validation', async () => {
  let config = new Config();

  expect(() => { config.validateGodotVersion(('2.1')) }).toThrow();
  expect(() => { config.validateGodotVersion(('3.5.0')) }).toThrow();
  expect(() => { config.validateGodotVersion(('4.0')) }).not.toThrow();
})

test('godot version validation', async () => {
  let config = new Config();

  expect(() => { config.validateGodotVersion(('2.1')) }).toThrow();
  expect(() => { config.validateGodotVersion(('3.5.0')) }).toThrow();
  expect(() => { config.validateGodotVersion(('4.0')) }).not.toThrow();
})
