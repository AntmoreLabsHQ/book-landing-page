import React from "react";

interface ButtonProps {
  type?: "submit" | "button";
  label?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  disabled,
  className,
  startIcon,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${className}`}
      >
        {label}
        {startIcon && <span>{startIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
