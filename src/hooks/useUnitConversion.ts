import { useCallback } from 'react';

/**
 * 단위 변환 유틸리티 함수들을 제공하는 훅
 * @returns 단위 변환 함수들이 담긴 객체
 */
export function useUnitConversion() {
  const pxToRem = useCallback((px: number): number => {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return px / rootFontSize;
  }, []);

  const remToPx = useCallback((rem: number): number => {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return rem * rootFontSize;
  }, []);

  return { pxToRem, remToPx };
}
