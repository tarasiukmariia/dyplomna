import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 bg-surface border border-border rounded-2xl shadow-lg dark:bg-surface-dark dark:border-border-dark ${className}`}>
    {children}
  </div>
);

export default Card;
