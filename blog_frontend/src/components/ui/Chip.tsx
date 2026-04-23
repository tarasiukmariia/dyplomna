import React from 'react';

interface ChipProps {
  label: string;
  color?: 'default' | 'accent' | 'success' | 'error';
  onDelete?: () => void;
}

const colorMap = {
  default: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
  accent: 'bg-[#b87333] text-white dark:bg-[#b87333] dark:text-white',
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
};

const Chip: React.FC<ChipProps> = ({ label, color = 'default', onDelete }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]} mr-2 mb-2`}>
    {label}
    {onDelete && (
      <button
        onClick={onDelete}
        className="cursor-pointer ml-2 text-lg leading-none focus:outline-none hover:text-red-600"
        aria-label="Видалити чіп"
        type="button"
      >
        ×
      </button>
    )}
  </span>
);

export default Chip;
