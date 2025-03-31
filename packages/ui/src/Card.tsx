import React, { HTMLAttributes } from 'react'

/**
 * 카드 컴포넌트
 * @param children - 카드 내부 콘텐츠
 * @param direction - 그리드 방향 (cols: 열 기반, rows: 행 기반)
 * @param className - 추가적인 Tailwind 클래스
 */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: 'cols' | 'rows'
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, direction = 'cols', className = '', ...props }, ref) => {
    // 기본 스타일
    const baseStyles = 'bg-white rounded-3xl py-4 px-6 w-full grid gap-4'

    // 방향 스타일
    const directionStyles = {
      cols: 'grid-cols-2',
      rows: 'grid-rows-2',
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${directionStyles[direction]} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
