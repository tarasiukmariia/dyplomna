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
      <div className={`w-10 h-6 rounded-full transition-colors duration-200 ${checked ? 'bg-accent' : 'bg-gray-300'} dark:bg-gray-700 ${checked ? 'ring-2 ring-accent dark:ring-accent' : ''}`}></div>
      <div className={`dot absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 dark:bg-accent ${checked ? 'translate-x-4 border-2 border-accent dark:border-accent' : ''}`}></div>
    </div>
    {label && <span className="ml-3 text-accent dark:text-accent">{label}</span>}
  </label>
);

export default Switch;
