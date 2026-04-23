import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

const base =
  "px-4 py-2 rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary:
    "bg-primary text-text-light focus:ring-primary dark:bg-primary dark:focus:ring-primary",
  outline:
    "border border-primary text-primary bg-transparent focus:ring-primary dark:border-primary dark:text-primary",
  ghost:
    "bg-transparent text-primary focus:ring-primary dark:text-primary",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  disabled,
  ...props
}) => (
  <button
    className={
      `${base} ${variants[variant]} relative overflow-hidden group ${className} ` +
      (disabled ? "opacity-60" : "cursor-pointer")
    }
    disabled={disabled}
    style={{ outline: "none", boxShadow: "none" }}
    {...props}
  >
    {/* Animated background for primary/outline, animated border for ghost */}
    {variant === "ghost" ? (
      <span
        className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 z-0 bg-primary"
        style={{ transitionProperty: 'width' }}
      />
    ) : (
      <span
        className={`absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 z-0 ${
          variant === "primary"
            ? "bg-primary-hover"
            : variant === "outline"
            ? "bg-primary"
            : ""
        }`}
        style={{ transitionProperty: 'width' }}
      />
    )}
    <span className="relative z-10">{children}</span>
  </button>
);

export default Button;
