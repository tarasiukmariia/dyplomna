import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'accent' | 'success' | 'error' | 'default';
  className?: string;
}

const colorMap = {
  accent: 'bg-accent text-white',
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  default: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
};

const Badge: React.FC<BadgeProps> = ({ children, color = 'accent', className = '' }) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${colorMap[color]} ${className}`}>{children}</span>
);

export default Badge;
