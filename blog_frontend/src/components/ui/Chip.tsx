import React from 'react';

interface ChipProps {
  label: string;
  color?: 'accent' | 'success' | 'error';
  onDelete?: () => void;
}

const colorMap = {
  accent: 'bg-primary text-text-light dark:bg-primary dark:text-text-light',
  success: 'bg-success text-text-light',
  error: 'bg-error text-text-light',
};

const Chip: React.FC<ChipProps> = ({ label, color = 'accent', onDelete }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]} mr-2 mb-2`}>
    {label}
    {onDelete && (
      <button
        onClick={onDelete}
        className="cursor-pointer ml-2 text-lg leading-none focus:outline-none hover:text-error"
        aria-label="Видалити чіп"
        type="button"
      >
        ×
      </button>
    )}
  </span>
);

export default Chip;
