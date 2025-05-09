const categories = [
  '주점',
  '주류 구매 위치',
  '플리마켓',
  '프로모션',
  '화장실',
  '공연장',
  '셔틀콕',
  '푸트트럭',
  '흡연실',
  '의무실',
  '기타',
] as const;
type CATEGORIES = (typeof categories)[number];

export { categories };
export type { CATEGORIES };
