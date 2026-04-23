import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg dark:bg-surface-dark dark:border-accent ${className}`}>
    {children}
  </div>
);

export default Card;
