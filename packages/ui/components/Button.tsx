"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, variant = "primary", disabled = false, onClick, className }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md";
  const variantStyles =
    variant === "primary" ? "bg-red-500 text-white hover:bg-blue-600" : "bg-gray-200 text-black hover:bg-gray-300";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={className || `${baseStyles} ${variantStyles} ${disabledStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
