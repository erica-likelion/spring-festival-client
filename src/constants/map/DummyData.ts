import { ImageTextFrameWithTimeProps } from '@/components/image-text-frame/ImageTextFrame.types';
import { DAYS, CATEGORIES } from '@/constants/map';

// 날짜 및 카테고리별 데이터 맵 생성
export const DummyData: Record<DAYS, Record<CATEGORIES, ImageTextFrameWithTimeProps[]>> = {
  '1일차': {
    주점: [
      {
        image: '',
        title: '[1일차] 술과 함께 해',
        subtitle: '주점',
        time: '18:00-24:00',
        canPickup: true,
      },
      {
        image: '',
        title: '[1일차] 심야식당',
        subtitle: '주점',
        time: '17:30-23:30',
        canPickup: false,
      },
    ],
    '주류 구매 위치': [
      {
        image: '',
        title: '[1일차] 세계 맥주 페스티벌',
        subtitle: '주류 구매 위치',
        time: '12:00-22:00',
        canPickup: true,
      },
      {
        image: '',
        title: '[1일차] 와인 테이스팅',
        subtitle: '주류 구매 위치',
        time: '14:00-21:00',
        canPickup: true,
      },
    ],
    플리마켓: [
      {
        image: '',
        title: '[1일차] 봄맞이 플리마켓',
        subtitle: '플리마켓',
        time: '10:00-18:00',
        canPickup: false,
      },
    ],
    프로모션: [
      {
        image: '',
        title: '[1일차] 축제 굿즈샵',
        subtitle: '프로모션',
        time: '11:00-21:00',
        canPickup: true,
      },
    ],
    콘텐츠: [], // 추가된 빈 배열
    공연장: [
      {
        image: '',
        title: '[1일차] 인디밴드 공연',
        subtitle: '공연장',
        time: '19:00-22:00',
        canPickup: false,
      },
    ],
    화장실: [
      {
        image: '',
        title: '화장실 A구역',
        subtitle: '화장실',
        time: '24시간',
        canPickup: false,
      },
      {
        image: '',
        title: '화장실 B구역',
        subtitle: '화장실',
        time: '24시간',
        canPickup: false,
      },
    ],
    셔틀콕: [
      {
        image: '',
        title: '[1일차] 셔틀콕 정류장 A',
        subtitle: '셔틀콕',
        time: '08:00-22:00',
        canPickup: false,
      },
    ],
    푸트트럭: [
      {
        image: '',
        title: '[1일차] 푸드존 A',
        subtitle: '푸드트럭',
        time: '11:00-22:00',
        canPickup: true,
      },
    ],
    흡연구역: [
      {
        image: '',
        title: '지정 흡연구역 A',
        subtitle: '흡연구역',
        time: '24시간',
        canPickup: false,
      },
    ],
  },

  '2일차': {
    주점: [
      {
        image: '',
        title: '[2일차] 푸드트럭 존',
        subtitle: '주점',
        time: '11:00-24:00',
        canPickup: true,
      },
      {
        image: '',
        title: '[2일차] 치맥 페스티벌',
        subtitle: '주점',
        time: '17:00-23:00',
        canPickup: true,
      },
    ],
    '주류 구매 위치': [
      {
        image: '',
        title: '[2일차] 전통주 체험관',
        subtitle: '주류 구매 위치',
        time: '13:00-22:00',
        canPickup: false,
      },
    ],
    플리마켓: [
      {
        image: '',
        title: '[2일차] 공예품 전시회',
        subtitle: '플리마켓',
        time: '10:00-18:00',
        canPickup: false,
      },
    ],
    프로모션: [
      {
        image: '',
        title: '[2일차] 포토존',
        subtitle: '프로모션',
        time: '10:00-22:00',
        canPickup: false,
      },
    ],
    콘텐츠: [], // 추가된 빈 배열
    공연장: [
      {
        image: '',
        title: '[2일차] 야외 영화제',
        subtitle: '공연장',
        time: '20:00-23:00',
        canPickup: false,
      },
    ],
    화장실: [
      {
        image: '',
        title: '화장실 A구역',
        subtitle: '화장실',
        time: '24시간',
        canPickup: false,
      },
      {
        image: '',
        title: '화장실 C구역',
        subtitle: '화장실',
        time: '24시간',
        canPickup: false,
      },
    ],
    셔틀콕: [
      {
        image: '',
        title: '[2일차] 셔틀콕 정류장 B',
        subtitle: '셔틀콕',
        time: '08:00-22:00',
        canPickup: false,
      },
    ],
    푸트트럭: [
      {
        image: '',
        title: '[2일차] 푸드존 B',
        subtitle: '푸드트럭',
        time: '11:00-22:00',
        canPickup: true,
      },
    ],
    흡연구역: [
      {
        image: '',
        title: '지정 흡연구역 B',
        subtitle: '흡연구역',
        time: '24시간',
        canPickup: false,
      },
      // 의무실 데이터를 흡연구역으로 이동
      {
        image: '',
        title: '응급 의무실',
        subtitle: '흡연구역 근처 의무실',
        time: '09:00-22:00',
        canPickup: false,
      },
    ],
  },

  '3일차': {
    주점: [
      {
        image: '',
        title: '[3일차] 막걸리 축제',
        subtitle: '주점',
        time: '15:00-24:00',
        canPickup: true,
      },
      {
        image: '',
        title: '[3일차] 폐막 파티',
        subtitle: '주점',
        time: '18:00-24:00',
        canPickup: false,
      },
    ],
    '주류 구매 위치': [
      {
        image: '',
        title: '[3일차] 특별 할인관',
        subtitle: '주류 구매 위치',
        time: '11:00-20:00',
        canPickup: true,
      },
    ],
    플리마켓: [
      {
        image: '',
        title: '[3일차] 핸드메이드 악세서리',
        subtitle: '플리마켓',
        time: '11:00-19:00',
        canPickup: false,
      },
    ],
    프로모션: [
      {
        image: '',
        title: '[3일차] 브랜드 체험관',
        subtitle: '프로모션',
        time: '12:00-20:00',
        canPickup: true,
      },
    ],
    콘텐츠: [], // 추가된 빈 배열
    공연장: [
      {
        image: '',
        title: '[3일차] 댄스 퍼포먼스',
        subtitle: '공연장',
        time: '18:00-20:00',
        canPickup: false,
      },
      {
        image: '',
        title: '[3일차] 폐막 공연',
        subtitle: '공연장',
        time: '20:30-22:30',
        canPickup: false,
      },
    ],
    화장실: [
      {
        image: '',
        title: '화장실 A구역',
        subtitle: '화장실',
        time: '24시간',
        canPickup: false,
      },
      {
        image: '',
        title: '화장실 B구역',
        subtitle: '화장실',
        time: '24시간',
        canPickup: false,
      },
      {
        image: '',
        title: '화장실 C구역',
        subtitle: '화장실',
        time: '24시간',
        canPickup: false,
      },
    ],
    셔틀콕: [
      {
        image: '',
        title: '[3일차] 셔틀콕 정류장 C',
        subtitle: '셔틀콕',
        time: '08:00-22:00',
        canPickup: false,
      },
    ],
    푸트트럭: [
      {
        image: '',
        title: '[3일차] 푸드존 C',
        subtitle: '푸드트럭',
        time: '11:00-22:00',
        canPickup: true,
      },
    ],
    흡연구역: [
      {
        image: '',
        title: '지정 흡연구역 C',
        subtitle: '흡연구역',
        time: '24시간',
        canPickup: false,
      },
      // 의무실 데이터를 흡연구역으로 이동
      {
        image: '',
        title: '응급 의무실',
        subtitle: '흡연구역 근처 의무실',
        time: '09:00-22:00',
        canPickup: false,
      },
    ],
  },
};
