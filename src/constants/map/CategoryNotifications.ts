import { CATEGORIES } from './CATEGORIES';

export const NOTIFICATION_STORAGE_KEY = 'festival-notifications';

/**
 * 카테고리별 공지사항 정보
 *
 * @property title - 공지사항 제목
 * @property path - 연결될 세부 정보 페이지 경로 (선택 사항)
 * @property showByDefault - 기본적으로 표시 여부 (false면 표시하지 않음)
 */
export interface CategoryNotification {
  title: string;
  path?: string;
}

/**
 * 각 카테고리별 공지사항 데이터
 */
export const CATEGORY_NOTIFICATIONS: Record<CATEGORIES, CategoryNotification> = {
  주점: {
    title: '주점 이용 안내',
    path: '/guide/bar',
  },
  '주류 구매 위치': {
    title: '주류 구매 안내',
    path: '/guide/alcohol',
  },
  플리마켓: {
    title: '플리마켓 운영 안내: 11:00-17:00',
    path: '/guide/fleamarket',
  },
  프로모션: {
    title: '프로모션 부스 & 이벤트 안내',
    path: '/guide/promotion',
  },
  공연장: {
    title: '공연 시간표 및 관람 안내',
    path: '/guide/performance',
  },
  화장실: {
    title: '화장실 위치 안내',
    path: '/guide/facilities',
  },
  셔틀콕: {
    title: '셔틀 운행 시간 및 노선 안내',
    path: '/guide/shuttle',
  },
  푸트트럭: {
    title: '푸드트럭 운영 시간: 11:00-21:00',
    path: '/guide/foodtruck',
  },
  흡연실: {
    title: '지정 흡연구역 안내',
    path: '/guide/smoking',
  },
  의무실: {
    title: '의무실 위치 및 운영 시간 안내',
    path: '/guide/medical',
  },
  기타: {
    title: '축제 일반 안내사항',
    path: '/guide/general',
  },
};
