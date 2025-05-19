// 카테고리별 마커 아이콘 유틸리티
import { CATEGORIES } from '@/constants/map';
import MyLocationIcon from '@/assets/icons/my-location.svg';
import MarkerPub from '@/assets/icons/marker-pub.svg';
import MarkerLiquorStore from '@/assets/icons/marker-liquorstore.svg';
import MarkerFleaMarket from '@/assets/icons/marker-fleamarket.svg';
import MarkerPromotion from '@/assets/icons/marker-promotion.svg';
import MarkerContents from '@/assets/icons/marker-contents.svg';
import MarkerToilet from '@/assets/icons/marker-toilet.svg';
import MarkerPerformance from '@/assets/icons/marker-performance.svg';
import MarkerBusStop from '@/assets/icons/marker-busstop.svg';
import MarkerFoodTruck from '@/assets/icons/marker-foodtruck.svg';
import MarkerSmokingArea from '@/assets/icons/marker-smokingarea.svg';

// 아이콘 매핑 객체 정의
type MarkerIconMap = {
  [category in CATEGORIES]: string;
} & {
  myLocation: string;
};

// 카테고리별 마커 아이콘 매핑
export const markerIcons: MarkerIconMap = {
  주점: MarkerPub,
  '주류 구매 위치': MarkerLiquorStore,
  플리마켓: MarkerFleaMarket,
  프로모션: MarkerPromotion,
  콘텐츠: MarkerContents,
  화장실: MarkerToilet,
  공연장: MarkerPerformance,
  셔틀콕: MarkerBusStop,
  푸트트럭: MarkerFoodTruck,
  흡연구역: MarkerSmokingArea,
  myLocation: MyLocationIcon,
};

/**
 * 특정 카테고리에 대한 마커 이미지 객체를 생성합니다
 * @param category 카테고리명 또는 'myLocation'
 * @param width 마커 너비 (기본값: 44)
 * @param height 마커 높이 (기본값: 44)
 * @returns 카카오맵 마커 이미지 객체
 */
export function getCategoryMarkerImage(
  category: CATEGORIES | 'myLocation',
  width = 44,
  height = 44,
): kakao.maps.MarkerImage {
  if (!window.kakao || !window.kakao.maps) {
    throw new Error('카카오맵 SDK가 로드되지 않았습니다.');
  }

  const iconUrl = markerIcons[category];
  const markerSize = new window.kakao.maps.Size(width, height);
  return new window.kakao.maps.MarkerImage(iconUrl, markerSize);
}
