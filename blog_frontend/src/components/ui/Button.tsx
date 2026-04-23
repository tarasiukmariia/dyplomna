import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const base =
  'px-4 py-2 rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary:
    'bg-primary text-text-light hover:bg-primary-hover focus:ring-primary dark:bg-primary dark:hover:bg-primary-light dark:focus:ring-primary',
  secondary:
    'bg-border text-primary hover:bg-border-input focus:ring-primary dark:bg-border-dark dark:text-primary dark:hover:bg-border-input-dark',
  outline:
    'border border-primary text-primary bg-transparent hover:bg-primary hover:text-text-light focus:ring-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-text-light',
  ghost:
    'bg-transparent text-primary hover:bg-primary-hover-light focus:ring-primary dark:text-primary dark:hover:bg-primary-hover-light'
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
