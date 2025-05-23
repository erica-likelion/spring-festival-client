import { useMemo } from 'react';

/**
 * 이미지 키에 대한 타입 정의
 */
export type ImageKey = string;

/**
 * 이미지 카테고리 타입
 */
export type ImageCategory = 'booth' | 'map';

/**
 * 이미지 키를 전체 경로로 변환하는 훅
 * @param imageKey - 이미지 키 (예: 'architecture')
 * @param category - 이미지 카테고리 ('booth' | 'map')
 * @returns 이미지의 전체 경로
 */
export function useImagePath(imageKey: ImageKey | '', category: ImageCategory): string {
  return useMemo(() => {
    if (!imageKey) return '';

    // 이미 전체 경로인 경우 (예: '@/assets/images/...')
    if (imageKey.startsWith('@/')) {
      return imageKey;
    }

    // 이미지 키를 전체 경로로 변환
    return `src/assets/images/${category}/${imageKey}.webp`;
  }, [imageKey, category]);
}
