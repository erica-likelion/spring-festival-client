import { CATEGORIES } from '@/constants/map';
import { DAYS } from '@/constants/map';

/**
 * 위치 데이터 타입 정의
 */
interface LocationData {
  lat: number; // 위도
  lng: number; // 경도
  name: string; // 위치 이름
  closeDay?: DAYS[]; // 운영하지 않는 일차
}

/**
 * 카테고리별 위치 정보
 */
export const LOCATION_DATA: Record<CATEGORIES, LocationData[]> = {
  // 주점
  주점: [
    {
      lat: 37.296047,
      lng: 126.835339,
      name: '주점',

      closeDay: [],
    },
  ],

  // 주류 구매 위치
  '주류 구매 위치': [
    {
      lat: 37.295611,
      lng: 126.835208,
      name: '주류 구매 위치',

      closeDay: [],
    },
  ],

  // 플리마켓
  플리마켓: [
    {
      lat: 37.298046,
      lng: 126.834813,
      name: '플리마켓',

      closeDay: [],
    },
  ],

  // 프로모션
  프로모션: [
    {
      lat: 37.297077,
      lng: 126.835742,
      name: '프로모션',

      closeDay: [],
    },
  ],

  // 콘텐츠
  콘텐츠: [],

  // 화장실
  화장실: [
    {
      lat: 37.295411,
      lng: 126.834722,
      name: '화장실',

      closeDay: [],
    },
    {
      lat: 37.296411,
      lng: 126.835529,
      name: '화장실',

      closeDay: [],
    },
    {
      lat: 37.296042,
      lng: 126.832668,
      name: '화장실',

      closeDay: [],
    },
  ],

  // 공연장
  공연장: [
    {
      lat: 37.294711,
      lng: 126.833163,
      name: '공연장',

      closeDay: [],
    },
  ],

  // 셔틀콕
  셔틀콕: [
    {
      lat: 37.298714,
      lng: 126.837946,
      name: '셔틀콕',

      closeDay: [],
    },
  ],

  // 푸드트럭
  푸드트럭: [
    {
      lat: 37.296454,
      lng: 126.833895,
      name: '푸드트럭',

      closeDay: [],
    },
  ],

  // 흡연구역
  흡연구역: [
    {
      lat: 37.295466,
      lng: 126.834832,
      name: '흡연구역',

      closeDay: [],
    },
    {
      lat: 37.296452,
      lng: 126.835659,
      name: '흡연구역',

      closeDay: [],
    },
    {
      lat: 37.296111,
      lng: 126.832574,
      name: '흡연구역',

      closeDay: [],
    },
  ],
};
