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
  id?: number; // 고유 ID
}

/**
 * 카테고리별 위치 정보
 */
export const LOCATION_DATA: Record<CATEGORIES, LocationData[]> = {
  // 주점
  주점: [
    {
      lat: 37.295626,
      lng: 126.834873,
      name: '차린건 여정도 지만',
      id: 1,
      closeDay: [],
    },
    {
      lat: 37.295936,
      lng: 126.835424,
      name: '폭싹 취EE했수다',
      id: 2,
      closeDay: [],
    },
    {
      lat: 37.296034,
      lng: 126.835003,
      name: '나는 술로',
      id: 3,
      closeDay: [],
    },
    {
      lat: 37.295709,
      lng: 126.835201,
      name: '에바레스트 산악회',
      id: 4,
      closeDay: [],
    },
    {
      lat: 37.295911,
      lng: 126.835485,
      name: '그 시절 우리가 사랑했던 수사',
      id: 5,
      closeDay: [],
    },
    {
      lat: 37.296103,
      lng: 126.835881,
      name: '냥약랜드',
      id: 6,
      closeDay: [],
    },
    {
      lat: 37.295943,
      lng: 126.835146,
      name: '백설공주와 화목한 난쟁이들',
      id: 7,
      closeDay: [],
    },
    {
      lat: 37.296142,
      lng: 126.835838,
      name: '전 어때요',
      id: 8,
      closeDay: [],
    },
    {
      lat: 37.295813,
      lng: 126.835185,
      name: 'Kㅛ통에Bㅏㅂ과 술 Oㅣㅆ어요',
      id: 9,
      closeDay: [],
    },
    {
      lat: 37.295947,
      lng: 126.834628,
      name: '마구먹고 마구마셔',
      id: 10,
      closeDay: [],
    },
    {
      lat: 37.296073,
      lng: 126.835467,
      name: '(주) 로봇산업',
      id: 11,
      closeDay: [],
    },
    {
      lat: 37.295611,
      lng: 126.834977,
      name: '시선',
      id: 12,
      closeDay: [],
    },
    {
      lat: 37.295714,
      lng: 126.835095,
      name: '냥자역학: 주량측정불가',
      id: 13,
      closeDay: [],
    },
    {
      lat: 37.295826,
      lng: 126.834724,
      name: '13주차 술체역학',
      id: 14,
      closeDay: [],
    },
    {
      lat: 37.29592,
      lng: 126.835743,
      name: '냉3 4먹으러 5것지',
      id: 15,
      closeDay: [],
    },
    {
      lat: 37.295696,
      lng: 126.834774,
      name: '그시절 캔마하(CANMAHA)',
      id: 16,
      closeDay: [],
    },
    {
      lat: 37.295696,
      lng: 126.834774,
      name: '나 지피틴데 안 추ㅣㅎㅆ다',
      id: 17,
      closeDay: [],
    },
    {
      lat: 37.295902,
      lng: 126.834617,
      name: '폭주어선',
      id: 18,
      closeDay: [],
    },
    {
      lat: 37.295548,
      lng: 126.83478,
      name: '닭치고 한 잔',
      id: 19,
      closeDay: [],
    },
    {
      lat: 37.296099,
      lng: 126.835366,
      name: '모여봐요 술꾼의 숲',
      id: 20,
      closeDay: [],
    },
    {
      lat: 37.295943,
      lng: 126.835017,
      name: "이랏'스융'마세",
      id: 21,
      closeDay: [],
    },
    {
      lat: 37.29609,
      lng: 126.834898,
      name: '홍문으로들었소',
      id: 22,
      closeDay: [],
    },
    {
      lat: 37.29631,
      lng: 126.835749,
      name: '디대는 못말려! - 오늘도 과제는 ...',
      id: 23,
      closeDay: [],
    },
    {
      lat: 37.296283,
      lng: 126.835827,
      name: '응답하라 일구구산',
      id: 24,
      closeDay: [],
    },
    {
      lat: 37.29579,
      lng: 126.834752,
      name: '뭉쳐야 예체대',
      id: 25,
      closeDay: [],
    },
    {
      lat: 37.295853,
      lng: 126.835506,
      name: 'semi azit',
      id: 26,
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
