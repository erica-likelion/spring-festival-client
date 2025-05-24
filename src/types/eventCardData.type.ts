/**
 * 이벤트 카드 데이터 타입
 */
export interface EventCardData {
  id: string;
  tags: { color: string; text: string }[];
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  isSun: boolean;
}
