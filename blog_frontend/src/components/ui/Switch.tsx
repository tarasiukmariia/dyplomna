import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => (
  <label className="flex items-center cursor-pointer select-none">
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="sr-only"
      />
      <div className={`w-10 h-6 rounded-full transition-colors duration-200 ${checked ? 'bg-[#b87333]' : 'bg-gray-300'} dark:bg-gray-700 ${checked ? 'ring-2 ring-[#b87333] dark:ring-[#b87333]' : ''}`}></div>
      <div className={`dot absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 dark:bg-[#b87333] ${checked ? 'translate-x-4 border-2 border-[#b87333] dark:border-[#b87333]' : ''}`}></div>
    </div>
    {label && <span className="ml-3 text-[#b87333] dark:text-[#b87333]">{label}</span>}
  </label>
);

export default Switch;
