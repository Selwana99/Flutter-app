import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const cardClasses = `
    bg-card-bg
    rounded-2xl
    p-4
    shadow-lg
    transition-transform
    duration-200
    ease-in-out
    ${onClick ? 'cursor-pointer hover:scale-105 active:scale-100' : ''}
    ${className}
  `;

  return (
    <div className={cardClasses.trim().replace(/\s+/g, ' ')} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
