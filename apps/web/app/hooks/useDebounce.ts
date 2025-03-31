'use client';

import { useCallback, useRef, useState } from 'react';

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): {
  debounced: (...args: Parameters<T>) => void;
  isLoading: boolean;
} {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setIsLoading(true); // 디바운스 시작 시 로딩 활성화
      timerRef.current = setTimeout(() => {
        callback(...args);
        setIsLoading(false); // 디바운스 완료 시 로딩 해제
      }, delay);
    },
    [callback, delay]
  );

  return { debounced, isLoading };
}