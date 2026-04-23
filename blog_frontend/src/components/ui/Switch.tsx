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
      <div className={`w-10 h-6 rounded-full transition-colors duration-200 ${checked ? 'bg-primary' : 'bg-border-input'} dark:bg-border-dark ${checked ? 'ring-2 ring-primary dark:ring-primary' : ''}`}></div>
      <div className={`dot absolute left-1 top-1 w-4 h-4 rounded-full bg-bg-input transition-transform duration-200 dark:bg-primary ${checked ? 'translate-x-4 border-2 border-primary dark:border-primary' : ''}`}></div>
    </div>
    {label && <span className="ml-3 text-primary dark:text-primary">{label}</span>}
  </label>
);

export default Switch;
