import React from 'react';
import Card from './Card';
import { IconType } from 'react-icons';

interface ActionButtonProps {
  icon: IconType;
  title: string;
  points: number;
  onClick: () => void;
  iconColor?: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  title,
  points,
  onClick,
  iconColor = 'text-accent-gold',
  className = ''
}) => {
  return (
    <Card
      onClick={onClick}
      className={`flex flex-col items-center justify-between text-center aspect-square ${className}`}
    >
      <div className="flex-grow flex items-center justify-center">
        <Icon size={48} className={iconColor} />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary">
          نقطة {points}
        </p>
      </div>
    </Card>
  );
};

export default ActionButton;
