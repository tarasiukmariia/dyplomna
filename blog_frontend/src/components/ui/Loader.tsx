import React from 'react';

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 32, color = '#b87333' }) => (
  <svg
    className="animate-spin mx-auto"
    width={size}
    height={size}
    viewBox="0 0 50 50"
    style={{ display: 'block' }}
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeDasharray="31.4 31.4"
      strokeLinecap="round"
    />
  </svg>
);

export default Loader;
