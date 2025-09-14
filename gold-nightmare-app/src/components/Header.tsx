'use client';

import React, { useState, useEffect } from 'react';
import PriceTicker from './PriceTicker';
import { GiGoldBars, GiSilverBars } from 'react-icons/gi';
import { SiNasa } from 'react-icons/si';
import { fetchPrices, PriceData } from '@/services/priceService';

const initialPrices: PriceData = {
  gold: 3626.39,
  silver: 31.34,
  nasdaq: 15200.5,
  goldChange: 0.0,
  silverChange: -1.13,
  nasdaqChange: 0.89,
};

const Header = () => {
  const [prices, setPrices] = useState<PriceData>(initialPrices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrices = async () => {
      try {
        // No need to set loading to true here, to avoid flickering
        const newPrices = await fetchPrices();
        setPrices(newPrices);
      } catch (error) {
        console.error("Failed to fetch prices:", error);
        // Optionally, handle the error in the UI
      } finally {
        if (loading) setLoading(false); // Only set loading to false on the initial load
      }
    };

    getPrices(); // Initial fetch

    const intervalId = setInterval(getPrices, 10000); // Fetch every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [loading]); // Rerun effect if loading changes (only for initial load logic)

  return (
    <header className={`flex justify-between items-center gap-2 overflow-x-auto pb-2 transition-opacity duration-500 ${loading ? 'opacity-50' : 'opacity-100'}`}>
      <PriceTicker icon={GiGoldBars} name="GOLD" price={prices.gold} change={prices.goldChange} />
      <PriceTicker icon={GiSilverBars} name="SILVER" price={prices.silver} change={prices.silverChange} iconColor="text-gray-400" />
      <PriceTicker icon={SiNasa} name="NAS" price={prices.nasdaq} change={prices.nasdaqChange} iconColor="text-blue-400" />
    </header>
  );
};

export default Header;
