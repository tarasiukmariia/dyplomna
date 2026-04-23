import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const base =
  'px-4 py-2 rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover focus:ring-accent dark:bg-accent dark:hover:bg-accent-light dark:focus:ring-accent',
  secondary:
    'bg-gray-200 text-accent hover:bg-gray-300 focus:ring-accent dark:bg-gray-700 dark:text-accent dark:hover:bg-gray-600',
  outline:
    'border border-accent text-accent bg-transparent hover:bg-accent hover:text-white focus:ring-accent dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-white',
  ghost:
    'bg-transparent text-accent hover:bg-accent-hover-light focus:ring-accent dark:text-accent dark:hover:bg-accent-hover-light'
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', disabled, ...props }) => (
  <button
    className={
      `${base} ${variants[variant]} ${className} ` +
      (disabled ? 'opacity-60' : 'cursor-pointer')
    }
    disabled={disabled}
    style={{ outline: 'none', boxShadow: 'none' }}
    {...props}
  >
    {children}
  </button>
);

export default Button;
