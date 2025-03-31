import React, { HTMLAttributes } from 'react'

/**
 * 라벨 컴포넌트
 * @param label - 라벨 제목
 * @param value - 라벨 내용 (값)
 * @param isLink - 링크 스타일 여부
 * @param className - 추가적인 Tailwind 클래스
 */

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  isLink?: boolean
}

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ label, value, isLink = false, className = '', ...props }, ref) => {
    // 기본 스타일
    const baseStyles = 'flex flex-col gap-1'

    const linkStyle = isLink ? 'underline hover:text-blue-600' : ''

    return (
      <div ref={ref} className={`${baseStyles} ${className}`} {...props}>
        <span className='text-label font-medium'>{label}</span>
        <span className={`text-label text-gray-500 ${linkStyle}`}>
          {typeof value === 'number' ? value.toLocaleString() : value}
        </span>
      </div>
    )
  }
)

Label.displayName = 'Label'
