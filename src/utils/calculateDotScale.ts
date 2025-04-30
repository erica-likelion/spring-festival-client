/**
 * 점의 크기를 계산
 * @param {number} index - 점의 인덱스
 * @param {number} currentPage - 현재 페이지 인덱스
 * @param {number} totalPages - 전체 페이지 수
 * @returns {number}
 */
export const getScale = (index: number, currentPage: number, totalPages: number) => {
  const baseSize = 0.375;

  if (currentPage <= 1) {
    // 첫 페이지 근처
    if (index === 0) return baseSize / baseSize;
    if (index === 1) return 0.3125 / baseSize;
    if (index === 2) return 0.25 / baseSize;
    if (index === 3) return 0.1875 / baseSize;
    if (index === 4) return 0.125 / baseSize;
    return 0.125 / baseSize;
  } else if (currentPage >= totalPages - 2) {
    // 마지막 페이지 근처
    if (index === totalPages - 1) return baseSize / baseSize;
    if (index === totalPages - 2) return 0.3125 / baseSize;
    if (index === totalPages - 3) return 0.25 / baseSize;
    if (index === totalPages - 4) return 0.1875 / baseSize;
    if (index === totalPages - 5) return 0.125 / baseSize;
    return 0.125 / baseSize;
  } else {
    // 중간 페이지
    const distance = Math.abs(currentPage - index);
    if (distance === 0) return baseSize / baseSize;
    if (distance === 1) return 0.3125 / baseSize;
    if (distance >= 2) return 0.1875 / baseSize;
    return 0.125 / baseSize;
  }
};
