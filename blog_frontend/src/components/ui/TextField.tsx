import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, error, className = '', ...props }) => (
  <div>
    {label && <label className="block mb-1 font-medium text-primary dark:text-primary">{label}</label>}
    <input
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-bg-input dark:bg-bg-input-dark border-border-input dark:border-border-input-dark text-text dark:text-text-light transition-all duration-200 ${error ? 'border-error' : ''} ${className}`}
      {...props}
    />
    {error && <div className="text-error text-xs mt-1">{error}</div>}
  </div>
);

export default TextField;
