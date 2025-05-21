/**
 * 개별 공연 정보를 나타내는 타입입니다.
 *
 * @typedef {Object} PerformanceItem
 * @property {string} id - 공연 고유 ID
 * @property {string} backgroundUrl - 배경 이미지 URL
 * @property {string} singer - 가수 이름
 * @property {string} time - 공연 시간
 * @property {string} description - 공연 설명
 * @property {Array<{ image: string; name: string }>} songList - 공연 곡 리스트
 */

export type PerformanceItem = {
  id: string;
  backgroundUrl: string;
  singer: string;
  fcm_singer: string;
  time: string;
  description: string;
  songList: { image: string; name: string }[];
};

/**
 * Carousel 컴포넌트의 props
 *
 * @typedef {Object} CarouselProps
 * @property {PerformanceItem[]} data - 캐러셀에 표시될 공연 정보 리스트
 */

export interface CarouselProps {
  data: PerformanceItem[];
}
