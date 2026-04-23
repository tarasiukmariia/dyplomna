import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const base =
  'px-4 py-2 rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary:
    'bg-[#b87333] text-white hover:bg-[#a05a2c] focus:ring-[#b87333] dark:bg-[#b87333] dark:hover:bg-[#cd7f32] dark:focus:ring-[#b87333]',
  secondary:
    'bg-gray-200 text-[#b87333] hover:bg-gray-300 focus:ring-[#b87333] dark:bg-gray-700 dark:text-[#b87333] dark:hover:bg-gray-600',
  outline:
    'border border-[#b87333] text-[#b87333] bg-transparent hover:bg-[#b87333] hover:text-white focus:ring-[#b87333] dark:border-[#b87333] dark:text-[#b87333] dark:hover:bg-[#b87333] dark:hover:text-white',
  ghost:
    'bg-transparent text-[#b87333] hover:bg-[#b8733320] focus:ring-[#b87333] dark:text-[#b87333] dark:hover:bg-[#b8733320]'
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
