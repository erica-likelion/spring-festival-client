/**
 * 텍스트 40자 까지만 허용
 * @param {string} text - 원본 텍스트
 * @param {number} maxLength - 최대 표시할 글자 수
 * @returns {string}
 */

export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
