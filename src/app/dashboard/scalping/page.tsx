'use client';

import { useState } from 'react';
import { generateScalpingSignal, TradingSignal } from '@/services/scalpingService';
import SignalCard from '@/components/SignalCard';
import Card from '@/components/Card';
import { FaSpinner } from 'react-icons/fa';

export default function ScalpingPage() {
  const [signal, setSignal] = useState<TradingSignal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSignal = async (timeframe: string) => {
    setLoading(true);
    setError(null);
    setSignal(null);
    try {
      const newSignal = await generateScalpingSignal(timeframe);
      setSignal(newSignal);
    } catch (err: any) {
      setError(err.message || 'Failed to generate signal.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4">محرك المضاربة (Scalping)</h1>

      <Card>
        <p className="text-text-secondary text-center">
          اختر الإطار الزمني للحصول على إشارة تداول جديدة مبنية على مؤشرات RSI, MACD, و ATR.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <button onClick={() => handleGenerateSignal('1m')} disabled={loading} className="bg-accent-purple text-white font-bold py-3 rounded-lg disabled:opacity-50 transition hover:bg-purple-700">1m</button>
          <button onClick={() => handleGenerateSignal('5m')} disabled={loading} className="bg-accent-purple text-white font-bold py-3 rounded-lg disabled:opacity-50 transition hover:bg-purple-700">5m</button>
          <button onClick={() => handleGenerateSignal('15m')} disabled={loading} className="bg-accent-purple text-white font-bold py-3 rounded-lg disabled:opacity-50 transition hover:bg-purple-700">15m</button>
        </div>
      </Card>

      <div className="mt-6">
        {loading && (
          <div className="text-center py-8 flex flex-col items-center justify-center gap-4">
            <FaSpinner className="animate-spin text-accent-gold" size={32} />
            <p className="text-lg text-text-secondary">جاري إنشاء الإشارة...</p>
          </div>
        )}

        {error && <p className="text-danger-red text-center bg-danger-red/10 p-4 rounded-lg">{error}</p>}

        {signal && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-center mb-4">إشارة التداول الحالية</h2>
            <SignalCard signal={signal} />
          </div>
        )}
      </div>
    </div>
  );
}
