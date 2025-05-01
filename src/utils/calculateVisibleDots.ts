/**
 * 표시할 점의 인덱스 계산
 * @param {number} totalPages - 전체 페이지 수
 * @param {number} currentPage - 현재 페이지 인덱스
 * @param {number} maxVisiblemaxVisibleDots - 표시할 점의 최대 개수
 * @returns {number[]} 표시할 점들의 인덱스 배열
 */

export const calculateVisibleDots = (
  totalPages: number,
  currentPage: number,
  maxVisibleDots: number,
) => {
  // 전체 페이지가 5개 이하면 모두 표시
  if (totalPages <= maxVisibleDots) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  // 현재 페이지를 중심으로 표시할 점들 계산
  const halfVisible = Math.floor(maxVisibleDots / 2);
  const startDot = Math.max(0, Math.min(currentPage - halfVisible, totalPages - maxVisibleDots));
  const endDot = startDot + maxVisibleDots - 1;

  return Array.from({ length: endDot - startDot + 1 }, (_, i) => startDot + i);
};
