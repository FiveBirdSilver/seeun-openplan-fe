import React, { HTMLAttributes } from 'react'
import { Skeleton } from './Skeleton'

/**
 * 라벨 컴포넌트
 * @param label - 라벨 제목
 * @param value - 라벨 내용 (값)
 * @param isLink - 링크 스타일 여부
 * @param isLoading - 로딩 여부
 * @param className - 추가적인 Tailwind 클래스
 */
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  isLink?: boolean
  isLoading: boolean
  className?: string
}

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  (
    {
      label,
      value,
      isLink = false,
      isLoading = false,
      className = '',
      ...props
    },
    ref
  ) => {
    // 기본 스타일
    const baseStyles = 'flex flex-col gap-1'

    // 링크 스타일
    const linkStyle = isLink ? 'underline' : ''

    return (
      <div ref={ref} className={`${baseStyles} ${className}`} {...props}>
        <span className='text-label font-medium'>{label}</span>
        {isLoading ? (
          <Skeleton />
        ) : (
          <span className={`text-label text-gray-500 ${linkStyle}`}>
            {typeof value === 'number' ? value.toLocaleString() : value}
          </span>
        )}
      </div>
    )
  }
)

Label.displayName = 'Label'
