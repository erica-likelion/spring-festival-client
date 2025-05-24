import { ImageTextFrameWithTimeProps } from '@/components/image-text-frame/ImageTextFrame.types';
import { CATEGORIES, DAYS } from '@/constants/map';

// 주점
import AI from '@/assets/images/booth/ai.webp';
import TRAFFIC from '@/assets/images/booth/traffic.webp';
import BIO from '@/assets/images/booth/bio.webp';
import CHEMICAL from '@/assets/images/booth/chemical.webp';
import COMPUTER from '@/assets/images/booth/computer.webp';
import CONVERGENCE from '@/assets/images/booth/convergence.webp';
import DESIGN from '@/assets/images/booth/design.webp';
import ELECTRON from '@/assets/images/booth/electron.webp';
import ENERGY from '@/assets/images/booth/energy.webp';
import MEDIA from '@/assets/images/booth/media.webp';
import MACHINE from '@/assets/images/booth/machine.webp';
import HORIZON from '@/assets/images/booth/horizontal.webp';
import PARMACY from '@/assets/images/booth/pharmacy.webp';
import STATEGY from '@/assets/images/booth/strategy.webp';
import ROBOT from '@/assets/images/booth/robot.webp';
import INTELLIGENCE from '@/assets/images/booth/intelligence.webp';
import ARCHITECTURE from '@/assets/images/booth/architecture.webp';
import MARINE from '@/assets/images/booth/marine.webp';
import SMART from '@/assets/images/booth/smart.webp';
import OCC from '@/assets/images/booth/occ.webp';
import INDUSTRIAL from '@/assets/images/booth/industrial.webp';
import SPORT from '@/assets/images/booth/sport.webp';
import MAHA from '@/assets/images/booth/maha.webp';
import INSURANCE from '@/assets/images/booth/insurance.webp';
import SEMI from '@/assets/images/booth/semiconductor.webp';
import ARCHITECTURE_ENV from '@/assets/images/booth/architecture-env.webp';

// 이외 이미지들
import LIQUOR_STORE from '@/assets/images/map/liquorstore.webp';
import FLEA_MARKET from '@/assets/images/map/fleamarket.webp';
import PROMOTION from '@/assets/images/map/promotion.webp';
import RACE from '@/assets/images/map/race.webp';
import PICNIC from '@/assets/images/map/picnic.webp';
import VIKING from '@/assets/images/map/viking.webp';
import PERFORMANCE from '@/assets/images/map/performance.webp';
import TOILET from '@/assets/images/map/toilet.webp';
import BUS_STOP from '@/assets/images/map/busstop.webp';
import FOOD_TRUCK from '@/assets/images/map/foodtruck.webp';
import SMOKING from '@/assets/images/map/smoking.webp';

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
      image: MEDIA,
      title: '차린건 여정도 지만',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295626,
      lng: 126.834873,
      closeDay: [],
    },
    {
      id: 2,
      image: ELECTRON,
      title: '폭싹 취EE했수다',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295936,
      lng: 126.835424,
      closeDay: [],
    },
    {
      id: 3,
      image: MACHINE,
      title: '나는 술로',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.296034,
      lng: 126.835003,
      closeDay: [],
    },
    {
      id: 4,
      image: ENERGY,
      title: '에바레스트 산악회',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295709,
      lng: 126.835201,
      closeDay: [],
    },
    {
      id: 5,
      image: HORIZON,
      title: '그 시절 우리가 사랑했던 수사',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295911,
      lng: 126.835485,
      closeDay: [],
    },
    {
      id: 6,
      image: PARMACY,
      title: '냥약랜드',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.296103,
      lng: 126.835881,
      closeDay: [],
    },
    {
      id: 7,
      image: CHEMICAL,
      title: '백설공주와 화목한 난쟁이들',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295943,
      lng: 126.835146,
      closeDay: [],
    },
    {
      id: 8,
      image: COMPUTER,
      title: '전 어때요',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.296142,
      lng: 126.835838,
      closeDay: [],
    },
    {
      id: 9,
      image: TRAFFIC,
      title: 'Kㅛ통에Bㅏㅂ과 술 Oㅣㅆ어요',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295813,
      lng: 126.835185,
      closeDay: [],
    },
    {
      id: 10,
      image: STATEGY,
      title: '마구먹고 마구마셔',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295947,
      lng: 126.834628,
      closeDay: [],
    },
    {
      id: 11,
      image: ROBOT,
      title: '(주) 로봇산업',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.296073,
      lng: 126.835467,
      closeDay: [],
    },
    {
      id: 12,
      image: CONVERGENCE,
      title: '시선',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295611,
      lng: 126.834977,
      closeDay: [],
    },
    {
      id: 13,
      image: INTELLIGENCE,
      title: '냥자역학:주량측정불가',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295714,
      lng: 126.835095,
      closeDay: [],
    },
    {
      id: 14,
      image: ARCHITECTURE_ENV,
      title: '13주차 술체역학',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295826,
      lng: 126.834724,
      closeDay: [],
    },
    {
      id: 15,
      image: INSURANCE,
      title: '냉3 4먹으러 5것지',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.29592,
      lng: 126.835743,
      closeDay: [],
    },
    {
      id: 16,
      image: MAHA,
      title: '그시절 캔마하(CANMAHA)',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295696,
      lng: 126.834774,
      closeDay: [],
    },
    {
      id: 17,
      image: AI,
      title: '나 지피틴데 안 추ㅣㅎㅆ다',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295696,
      lng: 126.834774,
      closeDay: [],
    },
    {
      id: 18,
      image: MARINE,
      title: '폭주어선',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295902,
      lng: 126.834617,
      closeDay: [],
    },
    {
      id: 19,
      image: OCC,
      title: '닭치고 한 잔',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295548,
      lng: 126.83478,
      closeDay: [],
    },
    {
      id: 20,
      image: BIO,
      title: '모여봐요 술꾼의 숲',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.296099,
      lng: 126.835366,
      closeDay: [],
    },
    {
      id: 21,
      image: SMART,
      title: "이랏'스융'마세",
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295943,
      lng: 126.835017,
      closeDay: [],
    },
    {
      id: 22,
      image: ARCHITECTURE,
      title: '홍문으로들었소',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.29609,
      lng: 126.834898,
      closeDay: [],
    },
    {
      id: 23,
      image: DESIGN,
      title: '디대는 못말려! - 오늘도 과제는 ...',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.29631,
      lng: 126.835749,
      closeDay: [],
    },
    {
      id: 24,
      image: INDUSTRIAL,
      title: '응답하라 일구구산',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.296283,
      lng: 126.835827,
      closeDay: [],
    },
    {
      id: 25,
      image: SPORT,
      title: '뭉쳐야 예체대',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.29579,
      lng: 126.834752,
      closeDay: [],
    },
    {
      id: 26,
      image: SEMI,
      title: 'semi azit',
      subtitle: '주점',
      time: '18:00-24:00',
      path: '',
      lat: 37.295853,
      lng: 126.835506,
      closeDay: [],
    },
  ],
  '주류 구매 위치': [
    {
      id: 200,
      image: LIQUOR_STORE,
      title: '마셔라잇(Light)',
      subtitle: '주류 구매 위치',
      time: '18:00-23:30',
      lat: 37.295611,
      lng: 126.835208,
      closeDay: [],
      path: '/main/notice/16',
    },
  ],
  플리마켓: [
    {
      id: 300,
      image: FLEA_MARKET,
      title: '플리마켓',
      subtitle: '',
      time: '11:00-17:00',
      lat: 37.298046,
      lng: 126.834813,
      path: '/main/notice/10',
    },
  ],
  프로모션: [
    {
      id: 400,
      image: PROMOTION,
      title: '프로모션',
      subtitle: '',
      time: '11:00-17:00',
      lat: 37.297077,
      lng: 126.835742,
      closeDay: [],
    },
  ],
  콘텐츠: [
    {
      id: 501,
      image: RACE,
      title: '호공 레이스',
      subtitle: '콘텐츠',
      time: '10:00-18:00',
      closeDay: ['1일차', '3일차'],
      lat: 37.297562,
      lng: 126.833907,
    },
    {
      id: 502,
      image: PICNIC,
      title: '피크닉존',
      subtitle: '콘텐츠',
      time: '10:00-18:00',
      closeDay: [],
      lat: 37.296615,
      lng: 126.834394,
    },
    {
      id: 503,
      image: VIKING,
      title: '바이킹',
      subtitle: '콘텐츠',
      time: '19:00-22:00',
      closeDay: ['1일차', '2일차'],
      lat: 37.298122,
      lng: 126.836277,
    },
  ],
  공연장: [
    {
      id: 600,
      image: PERFORMANCE,
      title: '공연 무대',
      subtitle: '공연장',
      time: '19:00-22:00',
      lat: 37.294711,
      lng: 126.833163,
      closeDay: [],
    },
  ],
  화장실: [
    {
      id: 701,
      image: TOILET,
      title: '공용 화장실',
      subtitle: '화장실',
      time: '11:00~17:00',
      lat: 37.295411,
      lng: 126.834722,
      closeDay: [],
    },
    {
      id: 702,
      image: TOILET,
      title: '공용 화장실',
      subtitle: '화장실',
      time: '11:00~17:00',
      lat: 37.296411,
      lng: 126.835529,
      closeDay: [],
    },
    {
      id: 703,
      image: TOILET,
      title: '공용 화장실',
      subtitle: '화장실',
      time: '11:00~17:00',
      lat: 37.296042,
      lng: 126.832668,
      closeDay: [],
    },
  ],
  셔틀콕: [
    {
      id: 800,
      image: BUS_STOP,
      title: '버스 탑승 위치',
      subtitle: '',
      time: '7:50-23:00',
      lat: 37.298714,
      lng: 126.837946,
      closeDay: [],
    },
  ],
  푸드트럭: [
    {
      id: 900,
      image: FOOD_TRUCK,
      title: '푸드트럭',
      subtitle: '',
      time: '10:00-23:00',
      lat: 37.296454,
      lng: 126.833895,
      closeDay: [],
      path: '/',
    },
  ],
  흡연구역: [
    {
      id: 1101,
      image: SMOKING,
      title: '흡연구역',
      subtitle: '',
      time: '24시간',
      lat: 37.295466,
      lng: 126.834832,
      closeDay: [],
    },
    {
      id: 1102,
      image: SMOKING,
      title: '흡연구역',
      subtitle: '',
      time: '24시간',
      lat: 37.296452,
      lng: 126.835659,
      closeDay: [],
    },
    {
      id: 1103,
      image: SMOKING,
      title: '흡연구역',
      subtitle: '',
      time: '24시간',
      lat: 37.296111,
      lng: 126.832574,
      closeDay: [],
    },
  ],
};
