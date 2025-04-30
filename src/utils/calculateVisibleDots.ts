/**
 * 표시할 점의 인덱스 계산
 * @param {number} totalPages - 전체 페이지 수
 * @param {number} currentPage - 현재 페이지 인덱스
 * @param {number} dots - 표시할 점의 최대 개수
 * @returns {number[]} 표시할 점들의 인덱스 배열
 */

export const calculateVisibleDots = (totalPages: number, currentPage: number, dots: number) => {
  // 전체 페이지가 5개 이하면 모두 표시
  if (totalPages <= dots) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  // 현재 페이지를 중심으로 표시할 점들 계산
  const halfVisible = Math.floor(dots / 2);
  let startDot = currentPage - halfVisible;

  if (startDot < 0) {
    startDot = 0;
  }

  let endDot = startDot + dots - 1;
  if (endDot >= totalPages) {
    endDot = totalPages - 1;
    startDot = Math.max(0, endDot - dots + 1);
  }

  return Array.from({ length: endDot - startDot + 1 }, (_, i) => startDot + i);
};
