import React from 'react';
import { TradingSignal } from '@/services/scalpingService';
import Card from './Card';
import { FaArrowUp, FaArrowDown, FaBullseye, FaStopCircle, FaCheckCircle } from 'react-icons/fa';

interface SignalCardProps {
  signal: TradingSignal;
}

const SignalCard: React.FC<SignalCardProps> = ({ signal }) => {
  const isBuy = signal.type === 'BUY';
  const themeColor = isBuy ? 'text-success-green' : 'text-danger-red';
  const bgColor = isBuy ? 'bg-success-green/10' : 'bg-danger-red/10';
  const borderColor = isBuy ? 'border-success-green/20' : 'border-danger-red/20';

  return (
    <Card className={`${bgColor} border ${borderColor}`}>
      <div className="flex justify-between items-center mb-4">
        <div className={`flex items-center gap-2 font-bold text-2xl ${themeColor}`}>
          {isBuy ? <FaArrowUp /> : <FaArrowDown />}
          <span>{signal.type}</span>
        </div>
        <span className="font-bold text-lg text-white bg-card-bg px-3 py-1 rounded-md">{signal.timeframe}</span>
      </div>

      <div className="space-y-3 text-white text-base">
        <div className="flex justify-between items-center">
          <span className="text-text-secondary flex items-center gap-2"><FaBullseye /> سعر الدخول</span>
          <span className="font-mono font-bold">{signal.entry}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary flex items-center gap-2"><FaStopCircle className="text-danger-red"/> وقف الخسارة</span>
          <span className="font-mono font-bold">{signal.stopLoss}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary flex items-center gap-2"><FaCheckCircle className="text-success-green"/> الهدف الأول</span>
          <span className="font-mono font-bold">{signal.takeProfit1}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary flex items-center gap-2"><FaCheckCircle className="text-success-green"/> الهدف الثاني</span>
          <span className="font-mono font-bold">{signal.takeProfit2}</span>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-text-secondary text-xs mb-1">درجة الثقة</p>
        <div className="w-full bg-card-bg rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${isBuy ? 'bg-success-green' : 'bg-danger-red'}`}
            style={{ width: `${Math.round(signal.confidence * 100)}%` }}
          ></div>
        </div>
        <p className="text-right text-xs font-bold mt-1">{Math.round(signal.confidence * 100)}%</p>
      </div>
    </Card>
  );
};

export default SignalCard;
