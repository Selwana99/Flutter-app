export interface PriceData {
  gold: number;
  silver: number;
  nasdaq: number;
  goldChange: number;
  silverChange: number;
  nasdaqChange: number;
}

// We use 'let' to allow these values to be mutated across calls, simulating state.
let lastGoldPrice = 3626.39;
let lastSilverPrice = 31.34;

export const fetchPrices = async (): Promise<PriceData> => {
  // Simulate API network latency
  await new Promise(resolve => setTimeout(resolve, 300));

  // Simulate small, random price fluctuations
  const goldChangePercent = (Math.random() - 0.45) * 0.5; // Skewed slightly positive
  const silverChangePercent = (Math.random() - 0.5) * 1.0;

  const newGoldPrice = lastGoldPrice * (1 + goldChangePercent / 100);
  const newSilverPrice = lastSilverPrice * (1 + silverChangePercent / 100);

  const prices: PriceData = {
    gold: newGoldPrice,
    silver: newSilverPrice,
    nasdaq: 15200.5, // This will remain static as per the plan
    goldChange: goldChangePercent,
    silverChange: silverChangePercent,
    nasdaqChange: 0.89, // This will also remain static
  };

  // "Save" the new prices for the next simulated call
  lastGoldPrice = newGoldPrice;
  lastSilverPrice = newSilverPrice;

  return prices;
};
