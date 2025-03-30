"use client";

// packages/ui/src/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-200 text-black hover:bg-gray-300';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${disabledStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};