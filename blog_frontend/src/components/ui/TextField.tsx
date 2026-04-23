import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, error, className = '', ...props }) => (
  <div className="mb-4">
    {label && <label className="block mb-1 font-medium text-accent dark:text-accent">{label}</label>}
    <input
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-surface-dark border-gray-300 dark:border-accent text-gray-900 dark:text-gray-100 ${error ? 'border-red-500' : ''} ${className}`}
      {...props}
    />
    {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
  </div>
);

export default TextField;
