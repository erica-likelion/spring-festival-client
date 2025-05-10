const categories = [
  '주점',
  '주류 구매 위치',
  '플리마켓',
  '프로모션',
  '공연장',
  '화장실',
  '주차장',
  '기타',
] as const;
type CATEGORIES = (typeof categories)[number];

export { categories };
export type { CATEGORIES };
