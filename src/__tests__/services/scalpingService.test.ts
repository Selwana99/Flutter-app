/**
 * @jest-environment node
 */
import { generateScalpingSignal, TradingSignal } from '@/services/scalpingService';

// This is a sample test file.
// A full test setup (Jest, etc.) is required to run this.

describe('Scalping Service', () => {

  describe('generateScalpingSignal', () => {

    it('should return a valid TradingSignal object', async () => {
      const timeframe = '5m';
      const signal: TradingSignal = await generateScalpingSignal(timeframe);

      // Check for the presence of all required keys
      expect(signal).toHaveProperty('type');
      expect(signal).toHaveProperty('entry');
      expect(signal).toHaveProperty('stopLoss');
      expect(signal).toHaveProperty('takeProfit1');
      expect(signal).toHaveProperty('takeProfit2');
      expect(signal).toHaveProperty('confidence');
      expect(signal).toHaveProperty('timeframe');
    });

    it('should return the correct timeframe in the signal', async () => {
      const timeframe = '15m';
      const signal = await generateScalpingSignal(timeframe);
      expect(signal.timeframe).toBe(timeframe);
    });

    it('should return confidence between 0 and 1', async () => {
      const signal = await generateScalpingSignal('1m');
      expect(signal.confidence).toBeGreaterThanOrEqual(0);
      expect(signal.confidence).toBeLessThanOrEqual(1);
    });

    it('should have logical SL/TP for a BUY signal', async () => {
      // Keep generating signals until we get a BUY signal for a robust test
      let signal;
      do {
        signal = await generateScalpingSignal('1m');
      } while (signal.type !== 'BUY');

      expect(signal.stopLoss).toBeLessThan(signal.entry);
      expect(signal.takeProfit1).toBeGreaterThan(signal.entry);
      expect(signal.takeProfit2).toBeGreaterThan(signal.takeProfit1);
    });

  });

});
