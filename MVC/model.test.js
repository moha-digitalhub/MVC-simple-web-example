import { jest, describe, test, expect, beforeEach } from '@jest/globals';
import { CarModel } from './model.js';

describe('CarModel', () => {
  let car;

  beforeEach(() => {
    car = new CarModel(2023);
  });

  describe('constructor', () => {
    test('should initialize with correct default values', () => {
      expect(car.year).toBe(2023);
      expect(car.engineType).toBe('V8 Turbo');
      expect(car._color).toBe('Red');
    });

    test('should initialize callback to null', () => {
      expect(car.onEngineChange).toBeNull();
    });
  });

  describe('engineType getter', () => {
    test('should return the current engine type', () => {
      expect(car.engineType).toBe('V8 Turbo');
    });
  });

  describe('engineType setter', () => {
    test('should update the engine type', () => {
      car.engineType = 'V6 Engine';
      expect(car.engineType).toBe('V6 Engine');
    });

    test('should trigger callback when engine type is changed', () => {
      const mockCallback = jest.fn();
      car.onEngineChange = mockCallback;
      
      car.engineType = 'Electric Motor';
      
      expect(mockCallback).toHaveBeenCalledWith('Electric Motor');
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    test('should not trigger callback if callback is not set', () => {
      expect(() => {
        car.engineType = 'V12 Engine';
      }).not.toThrow();
    });

    test('should trigger callback multiple times on multiple changes', () => {
      const mockCallback = jest.fn();
      car.onEngineChange = mockCallback;
      
      car.engineType = 'V6 Engine';
      car.engineType = 'V4 Engine';
      
      expect(mockCallback).toHaveBeenCalledTimes(2);
      expect(mockCallback).toHaveBeenNthCalledWith(1, 'V6 Engine');
      expect(mockCallback).toHaveBeenNthCalledWith(2, 'V4 Engine');
    });
  });

  describe('print method', () => {
    test('should log engine information', () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      
      car.print();
      
      expect(consoleLogSpy).toHaveBeenCalledWith('Engine Type: 2023 V8 Turbo');
      
      consoleLogSpy.mockRestore();
    });

    test('should print updated engine type after change', () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      
      car.engineType = 'V6 Engine';
      car.print();
      
      expect(consoleLogSpy).toHaveBeenCalledWith('Engine Type: 2023 V6 Engine');
      
      consoleLogSpy.mockRestore();
    });
  });
});
