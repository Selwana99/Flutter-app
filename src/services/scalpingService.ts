export interface TradingSignal {
  type: 'BUY' | 'SELL';
  entry: number;
  stopLoss: number;
  takeProfit1: number;
  takeProfit2: number;
  confidence: number; // A number between 0 and 1
  timeframe: string;
}

// This function simulates a complex scalping engine based on RSI, MACD, and ATR.
export const generateScalpingSignal = async (timeframe: string): Promise<TradingSignal> => {
  // Simulate network delay and complex calculation time
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real app, you'd fetch the current price. We'll use a realistic base.
  const basePrice = 3625.00;

  // Generate random but realistic-looking signal data
  const type = Math.random() > 0.5 ? 'BUY' : 'SELL';
  const entry = basePrice + (Math.random() - 0.5) * 5;
  const confidence = Math.random() * (0.95 - 0.65) + 0.65; // Confidence between 65% and 95%

  let stopLoss, takeProfit1, takeProfit2;

  if (type === 'BUY') {
    stopLoss = entry - (Math.random() * 5 + 3); // SL is 3-8 points below entry
    takeProfit1 = entry + (Math.random() * 5 + 3); // TP1 is 3-8 points above
    takeProfit2 = takeProfit1 + (Math.random() * 8 + 5); // TP2 is 5-13 points above TP1
  } else { // SELL
    stopLoss = entry + (Math.random() * 5 + 3);
    takeProfit1 = entry - (Math.random() * 5 + 3);
    takeProfit2 = takeProfit1 - (Math.random() * 8 + 5);
  }

  return {
    type,
    entry: parseFloat(entry.toFixed(2)),
    stopLoss: parseFloat(stopLoss.toFixed(2)),
    takeProfit1: parseFloat(takeProfit1.toFixed(2)),
    takeProfit2: parseFloat(takeProfit2.toFixed(2)),
    confidence,
    timeframe,
  };
};
