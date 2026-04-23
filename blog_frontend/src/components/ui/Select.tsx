import React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, error, className = '', ...props }) => {
  return (
    <div>
      {label && <label className="block mb-1 font-medium text-primary dark:text-primary">{label}</label>}
      <div className="relative">
        <select
          className={`w-full h-[42px] min-w-[56px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-bg-input dark:bg-bg-input-dark border-border-input dark:border-border-input-dark text-text dark:text-text-light appearance-none pr-8 cursor-pointer transition-all duration-200 ${error ? 'border-error' : ''} ${className}`}
          {...props}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value} className="cursor-pointer">
              {opt.label}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-3 top-0 h-[42px] flex items-center text-primary dark:text-primary"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      {error && <div className="text-error text-xs mt-1">{error}</div>}
    </div>
  );
};

export default Select;
