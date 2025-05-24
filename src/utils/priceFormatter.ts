/**
 *
 * @param price 가격을 숫자로 입력
 * @returns 컴마를 붙이고 원 단위를 붙인 가격 문자열 반환
 * ex. 10000 -> 10,000 원
 */
export const priceFormatter = (price: number) => {
  return (
    new Intl.NumberFormat('ko-KR', {
      style: 'decimal',
      currency: 'KRW',
    }).format(price) + ' 원'
  );
};

export const dotFormatter = (price: number) => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'decimal',
    currency: 'KRW',
  }).format(price);
};
