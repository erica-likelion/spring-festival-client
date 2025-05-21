// 카테고리별 마커 아이콘 유틸리티
import { CATEGORIES } from '@/constants/map';
import { MarkerContainer, MarkerIcon, MarkerLabel } from '@/styles/marker.styles';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
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
  푸드트럭: MarkerFoodTruck,
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
  width = 50,
  height = 50,
): kakao.maps.MarkerImage {
  if (!window.kakao || !window.kakao.maps) {
    throw new Error('카카오맵 SDK가 로드되지 않았습니다.');
  }

  const iconUrl = markerIcons[category];
  const markerSize = new window.kakao.maps.Size(width, height);
  return new window.kakao.maps.MarkerImage(iconUrl, markerSize);
}

/**
 * 마커와 텍스트 레이블을 함께 표시하는 커스텀 오버레이를 생성합니다
 * @param map 카카오맵 객체
 * @param position 위치 (위도, 경도)
 * @param category 카테고리명 또는 'myLocation'
 * @param text 표시할 텍스트
 * @param onClick 클릭 이벤트 핸들러 (선택적)
 * @returns 생성된 커스텀 오버레이
 */
export function createMarkerWithLabel(
  map: kakao.maps.Map,
  position: kakao.maps.LatLng,
  category: CATEGORIES | 'myLocation',
  text: string,
  onClick?: () => void,
): kakao.maps.CustomOverlay {
  // 마커 아이콘 URL 가져오기
  const iconUrl = markerIcons[category];

  // React 컴포넌트로 마커 생성
  const container = document.createElement('div');

  // 마커 React 컴포넌트 렌더링
  const root = createRoot(container);
  root.render(
    createElement(
      MarkerContainer,
      {
        onClick: onClick
          ? (e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick();
            }
          : undefined,
        style: onClick ? { cursor: 'pointer' } : undefined,
        $isSelected: !!onClick, // 개별 선택된 항목에만 onClick이 있으므로, 이를 기준으로 isSelected 결정
      },
      [
        createElement(MarkerIcon, {
          key: 'icon',
          src: iconUrl,
          alt: `${category} 마커`,
          $isSelected: !!onClick, // 마찬가지로 개별 선택된 항목만 크게 표시
        }),
        createElement(
          MarkerLabel,
          {
            key: 'label',
          },
          text,
        ),
      ],
    ),
  );

  // 커스텀 오버레이 생성
  const customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: container,
    map: map,
    yAnchor: 0.4, // 마커 아이콘 하단이 좌표에 위치하도록 조정된 값
  });

  return customOverlay;
}
