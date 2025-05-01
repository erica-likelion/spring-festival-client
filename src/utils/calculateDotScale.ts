/**
 * 점의 크기를 계산
 * @param {number} index - 점의 인덱스
 * @param {number} currentPage - 현재 페이지 인덱스
 * @param {number} totalPages - 전체 페이지 수
 * @returns {number}
 */
export const getScale = (index: number, currentPage: number, totalPages: number) => {
  const baseSize = 0.375;

  const ratios = [0.375, 0.3125, 0.25, 0.1875, 0.125];

  if (currentPage <= 1) {
    // 첫 페이지 근처
    return ratios[index] ? ratios[index] / baseSize : ratios[-1] / baseSize;
  } else if (currentPage >= totalPages - 2) {
    // 마지막 페이지 근처
    const reverse = totalPages - 1 - index;
    return ratios[reverse] ? ratios[reverse] / baseSize : ratios[-1] / baseSize;
  } else {
    // 중간 페이지
    const distance = Math.abs(currentPage - index);
    return ratios[distance] ? ratios[distance] / baseSize : ratios[-1] / baseSize;
  }
};
