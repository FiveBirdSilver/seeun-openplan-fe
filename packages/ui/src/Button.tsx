import React, { ButtonHTMLAttributes } from "react";

/**
 * 버튼 컴포넌트
 * @param children - 버튼 내용
 * @param size - 버튼 크기
 * @param variant - 버튼 색상 테마
 * @param disabled - 비활성화 여부
 * @param isLoading - 로딩 상태 여부
 * @param fullWidth - 너비 100% 설정
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    // 기본 스타일
    const baseStyles = "inline-flex items-center justify-center rounded-md";
    
    // 테마 기반 스타일
    const variantStyles = {
      primary: "bg-black text-white hover:bg-black-80 active:bg-black-80 cursor-pointer",

      // 임시 스타일
      secondary: "bg-blue-400 text-white hover:bg-blue-200 hover:bg-blue-200 cursor-pointer", 
      outline: "bg-white border border-red-300 text-red-400 hover:bg-red-100 active:bg-red-100 cursor-pointer", 
      ghost: "bg-gray-200 cursor-default opacity-50 cursor-not-allowed",
    };
    
    // 크기 기반 스타일
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
    };
    
    // 너비 설정
    const widthStyle = fullWidth ? "w-full" : "";


    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
          {children}
      </button>
    );
  }
);

Button.displayName = "Button";