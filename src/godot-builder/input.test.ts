import * as core from '@actions/core'

import Input from './input'
import { engineVersions, targetPlatforms } from './input-validation';


afterEach(() => {
  jest.restoreAllMocks();
});


describe('Input', () => {
  describe('engineVersion', () => {
    it('returns the default value', () => {
      expect(Input.engineVersion).toStrictEqual('latest');
    });

    it('throws on unsupported values', () => {
      const mockValue = '3.0';
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(() => { Input.engineVersion }).toThrow();
      expect(spy).toHaveBeenCalled();
    });

    it('returns a supported value', () => {
      const mockValue = engineVersions[Math.floor(Math.random() * engineVersions.length)];
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(Input.engineVersion).toStrictEqual(mockValue);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('targetPlatform', () => {
    it('throws with no given input', () => {
      expect(() => { Input.targetPlatform }).toThrow();
    });

    it('throws on unsupported values', () => {
      const mockValue = 'raspberry';
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(() => { Input.targetPlatform }).toThrow();
      expect(spy).toHaveBeenCalled();
    });

    it('returns a supported value', () => {
      const mockValue = targetPlatforms[Math.floor(Math.random() * targetPlatforms.length)];
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(Input.targetPlatform).toStrictEqual(mockValue);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('projectPath', () => {
    it('throws on unsupported values', () => {
      const mockValue = 'nonexistent-project/';
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(() => { Input.projectPath }).toThrow();
      expect(spy).toHaveBeenCalled();
    });

    it('returns a supported value', () => {
      const mockValue = 'test-project/';
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(Input.projectPath).toStrictEqual(mockValue);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('exportPreset', () => {
    it('throws with no given input', () => {
      expect(() => { Input.exportPreset }).toThrow();
    });

    it('throws on unsupported values', () => {
      const spy = jest.spyOn(core, 'getInput');
      spy.mockImplementationOnce(() => {
        return 'Non-existing preset';
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/';
      })

      expect(() => { Input.exportPreset }).toThrow();
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('returns a supported value', () => {
      const mockValue = 'Windows Desktop';

      const spy = jest.spyOn(core, 'getInput');
      spy.mockImplementationOnce(() => {
        return mockValue;
      })
      spy.mockImplementationOnce(() => {
        return 'test-project/';
      })

      expect(Input.exportPreset).toStrictEqual(mockValue);
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  describe('exportPath', () => {
    it('returns the default value', () => {
      expect(Input.exportPath).toStrictEqual('out/');
    });

    it('returns a supported value', () => {
      const mockValue = 'build/linux';
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(Input.exportPath).toStrictEqual(mockValue);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('exportName', () => {
    it('throws with no given input', () => {
      expect(() => { Input.exportName }).toThrow();
    });

    it('returns a supported value', () => {
      const mockValue = 'project';
      const spy = jest.spyOn(core, 'getInput').mockReturnValue(mockValue);
      expect(Input.exportName).toStrictEqual(mockValue);
      expect(spy).toHaveBeenCalled();
    });
  });
});
