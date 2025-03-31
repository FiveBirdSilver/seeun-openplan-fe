/**
 * 스켈레톤 컴포넌트
 * @param className - 추가적인 Tailwind CSS 클래스
 */

import { twMerge } from 'tailwind-merge'

export interface SkeletonProps {
  className?: string
}

export const Skeleton = ({ className = '' }: SkeletonProps) => {
  const baseStyles = 'h-5 w-20 bg-gray-200 rounded animate-pulse w-2/3'
  return <span className={twMerge(baseStyles, className)} />
}
