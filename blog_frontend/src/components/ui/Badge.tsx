import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'accent' | 'success' | 'error';
  className?: string;
}

const colorMap = {
  accent: 'bg-primary text-text-light',
  success: 'bg-success text-text-light',
  error: 'bg-error text-text-light',
};

const Badge: React.FC<BadgeProps> = ({ children, color = 'accent', className = '' }) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${colorMap[color]} ${className}`}>{children}</span>
);

export default Badge;
