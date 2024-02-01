'use client';
import { useState, useEffect } from 'react';

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value); //입력된 값을 디바운스 된 최종 값으로 저장

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 입력값이 변경될 때마다 delay 시간 후 debouncedValue 업데이트
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); 

  return debouncedValue;
}
