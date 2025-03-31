import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * 카드 컴포넌트
 * @param children - 카드 내부 콘텐츠
 * @param className - 추가적인 Tailwind 클래스
 * @param rows - 행 개수 (지정 시 반응형 무시)
 */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  rows?: number;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', rows, ...props }, ref) => {
    const baseStyles = 'bg-white rounded-3xl py-4 px-6 w-full grid gap-4';
    const gridStyles = rows ? `grid-rows-${rows}` : 'lg:grid-cols-2 lg:grid-rows-1';

    return (
      <div
        ref={ref}
        className={twMerge(baseStyles, gridStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';