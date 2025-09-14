import React from 'react';
import { IconType } from 'react-icons';

interface PriceTickerProps {
  icon: IconType;
  name: string;
  price: number;
  change: number;
  iconColor?: string;
}

const PriceTicker: React.FC<PriceTickerProps> = ({ icon: Icon, name, price, change, iconColor = "text-accent-gold" }) => {
  const isPositive = change >= 0;
  const changeColor = isPositive ? 'text-success-green' : 'text-danger-red';
  const changeSign = isPositive ? '↑' : '↓';

  return (
    <div className="flex items-center gap-3">
      <Icon className={iconColor} size={28} />
      <div>
        <span className="text-sm text-text-secondary">{name}</span>
        <div className="flex items-baseline gap-2">
          <p className="font-bold text-text-primary">${price.toFixed(2)}</p>
          <p className={`text-xs font-semibold ${changeColor} flex items-center`}>
            {changeSign} {Math.abs(change).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
