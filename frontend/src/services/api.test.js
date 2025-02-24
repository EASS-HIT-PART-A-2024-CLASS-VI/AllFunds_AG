// src/services/api.test.js
import { getFundsByProduct, getAdvice } from './api';

// Mock fetch
global.fetch = jest.fn();

describe('API Service', () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  
  describe('getFundsByProduct', () => {
    test('successfully fetches funds for a valid product', async () => {
      const mockData = [
        { id: 1, name: 'Fund 1', month_performance: '1.2%' },
        { id: 2, name: 'Fund 2', month_performance: '0.8%' }
      ];
      
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
      });
      
      const result = await getFundsByProduct('קרנות השתלמות');
      
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockData);
    });
    
    test('throws error for invalid product name', async () => {
      await expect(getFundsByProduct('Invalid Product')).rejects.toThrow('Invalid product name');
      expect(fetch).not.toHaveBeenCalled();
    });
  });
  
  describe('getAdvice', () => {
    test('successfully gets advice', async () => {
      const mockResponse = { advice: 'This is advice' };
      const userInput = 'What should I invest in?';
      
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });
      
      const result = await getAdvice(userInput);
      
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockResponse);
    });
  });
});