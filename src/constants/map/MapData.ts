import { ImageTextFrameWithTimeProps } from '@/components/image-text-frame/ImageTextFrame.types';
import { CATEGORIES, DAYS } from '@/constants/map';

// 각 카테고리별 항목 타입 정의
export interface MapDataItem extends ImageTextFrameWithTimeProps {
  id?: number; // 고유 ID
  path?: string; // 경로
  lat?: number; // 위도
  lng?: number; // 경도
  closeDay?: DAYS[];
}

// 전체 맵 데이터의 타입 정의
export type MapDataProps = Record<CATEGORIES, MapDataItem[]>;

export const MapData: MapDataProps = {
  주점: [
    {
      id: 1,
      image: '',
      title: '차린건 여정도 지만',
      subtitle: '주점',
      time: '18:00-24:00',
      canPickup: true,
      path: '',
      lat: 37.295626,
      lng: 126.834873,
      closeDay: [],
    },
  ],
  '주류 구매 위치': [
    {
      id: 200,
      image: '',
      title: '주류 구매 위치',
      subtitle: '주류 구매 위치',
      time: '12:00-22:00',
      canPickup: true,
      closeDay: [],
    },
  ],
  플리마켓: [
    {
      id: 300,
      image: '',
      title: '플리마켓',
      subtitle: '플리마켓',
      time: '10:00-18:00',
      canPickup: false,
    },
  ],
  프로모션: [
    {
      id: 400,
      image: '',
      title: '축제 굿즈샵',
      subtitle: '프로모션',
      time: '11:00-21:00',
      canPickup: true,
      closeDay: [],
    },
  ],
  콘텐츠: [
    {
      id: 501,
      image: '',
      title: '호공레이스',
      subtitle: '콘텐츠',
      time: '10:00-18:00',
      canPickup: false,
      closeDay: ['1일차', '3일차'],
    },
    {
      id: 502,
      image: '',
      title: '잔디공터',
      subtitle: '콘텐츠',
      time: '10:00-18:00',
      canPickup: false,
      closeDay: [],
    },
    {
      id: 503,
      image: '',
      title: '바이킹',
      subtitle: '콘텐츠',
      time: '19:00-22:00',
      canPickup: false,
      closeDay: ['1일차', '2일차'],
    },
  ],
  공연장: [
    {
      id: 600,
      image: '',
      title: '공연장',
      subtitle: '공연장',
      time: '19:00-22:00',
      canPickup: false,
      closeDay: [],
    },
  ],
  화장실: [
    {
      id: 701,
      image: '',
      title: '화장실 A구역',
      subtitle: '화장실',
      time: '24시간',
      canPickup: false,
      closeDay: [],
    },
    {
      id: 702,
      image: '',
      title: '화장실 B구역',
      subtitle: '화장실',
      time: '24시간',
      canPickup: false,
      closeDay: [],
    },
    {
      id: 703,
      image: '',
      title: '화장실 C구역',
      subtitle: '화장실',
      time: '24시간',
      canPickup: false,
      closeDay: [],
    },
  ],
  셔틀콕: [
    {
      id: 800,
      image: '',
      title: '셔틀콕 정류장 A',
      subtitle: '셔틀콕',
      time: '10:00-22:00',
      canPickup: false,
      closeDay: [],
    },
  ],
  푸드트럭: [
    {
      id: 900,
      image: '',
      title: '푸드존 A',
      subtitle: '푸드트럭',
      time: '11:00-22:00',
      canPickup: true,
      closeDay: [],
    },
  ],
  흡연구역: [
    {
      id: 1100,
      image: '',
      title: '지정 흡연구역 A',
      subtitle: '흡연구역',
      time: '24시간',
      canPickup: false,
      closeDay: [],
    },
  ],
};
