/**
 * 현재 날짜를 기준으로 페스티벌 일차를 계산하는 유틸리티 함수
 *
 * @param festivalStartDate - 페스티벌 시작 날짜 (YYYY-MM-DD 형식)
 * @param totalDays - 페스티벌 총 일수 (기본값: 3)
 * @returns '1일차', '2일차' 등의 형식으로 현재 일차를 반환. 페스티벌 기간이 아니면 첫째 날 반환
 */
export function getCurrentFestivalDay(festivalStartDate: string, totalDays: number = 3): string {
  // 페스티벌 시작 날짜를 Date 객체로 변환
  const startDate = new Date(festivalStartDate);

  // 오늘 날짜
  const today = new Date();

  // 시간 정보 제거 (날짜만 비교)
  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // 시작일과 오늘 사이의 일수 차이 계산
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 페스티벌 기간인지 확인하고 일차 계산
  if (diffDays >= 0 && diffDays < totalDays) {
    return `${diffDays + 1}일차`;
  }

  // 페스티벌 기간이 아니면 첫째 날 반환
  return '1일차';
}

/**
 * 특정 날짜가 유효한 날짜인지 확인하는 함수
 */
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
