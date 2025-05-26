import { EventCardData } from '@/types/eventCardData.type';

/**
 * 날짜별 이벤트 카드 배열 정의
 * @param {Object[]} [date] - 날짜별 이벤트 카드 배열
 * @param {string} id - id
 * @param {{ color: string; text: string }[]} tags - 태그(색상, 텍스트)
 * @param {string} title - 이벤트 제목
 * @param {string} startTime - 시작 시간
 * @param {string} endTime - 종료 시간
 * @param {string} location - 장소
 * @param {boolean} isSun - 낮/밤 구분
 */
interface EventCardDate {
  [date: string]: EventCardData[];
}

const readyEvent = [
  {
    id: '0',
    tags: [{ color: 'pk200', text: '준비중' }],
    title: 'READY TO OPEN∙∙∙',
    startTime: '24:00',
    endTime: '24:00',
    location: '어디선가',
    isSun: true,
  },
];

export const MainEventData: EventCardDate = {
  '2025-05-24': readyEvent,
  '2025-05-25': readyEvent,
  '2025-05-26': readyEvent,
  '2025-05-27': [
    {
      id: '1',
      tags: [{ color: 'ye200', text: '콘텐츠' }],
      title: '한 대 빵!!',
      startTime: '11:00',
      endTime: '17:00',
      location: '잔디공터',
      isSun: true,
    },
    {
      id: '2',
      tags: [{ color: 'ye200', text: '콘텐츠' }],
      title: '삐에로 아저씨',
      startTime: '13:00',
      endTime: '17:00',
      location: '잔디 공터 일대',
      isSun: true,
    },
    {
      id: '3',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'KINO',
      startTime: '17:00',
      endTime: '17:30',
      location: '공연장',
      isSun: true,
    },
    {
      id: '4',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '학생 특별공연',
      startTime: '17:30',
      endTime: '18:00',
      location: '공연장',
      isSun: true,
    },
    {
      id: '5',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'NCT 마크',
      startTime: '18:15',
      endTime: '18:45',
      location: '공연장',
      isSun: false,
    },
    {
      id: '6',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'RHOOTERS',
      startTime: '18:45',
      endTime: '20:00',
      location: '공연장',
      isSun: false,
    },
    {
      id: '7',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '10CM',
      startTime: '20:00',
      endTime: '20:30',
      location: '공연장',
      isSun: false,
    },
    {
      id: '8',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'FTISLAND',
      startTime: '20:30',
      endTime: '21:00',
      location: '공연장',
      isSun: false,
    },
    {
      id: '9',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'i-dle(아이들)',
      startTime: '21:00',
      endTime: '21:30',
      location: '공연장',
      isSun: false,
    },
  ],
  '2025-05-28': [
    {
      id: '10',
      tags: [{ color: 'ye200', text: '콘텐츠' }],
      title: '호공 레이스',
      startTime: '13:00',
      endTime: '15:00',
      location: '호수공원',
      isSun: true,
    },
    {
      id: '11',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'STARLIGHT 본선공연',
      startTime: '17:30',
      endTime: '20:00',
      location: '공연장',
      isSun: true,
    },
    {
      id: '12',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '잭팟',
      startTime: '20:00',
      endTime: '20:20',
      location: '공연장',
      isSun: false,
    },
    {
      id: '13',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '다비치',
      startTime: '20:30',
      endTime: '21:00',
      location: '공연장',
      isSun: false,
    },
    {
      id: '14',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '하이라이트',
      startTime: '21:00',
      endTime: '21:30',
      location: '공연장',
      isSun: false,
    },
  ],
  '2025-05-29': [
    {
      id: '15',
      tags: [{ color: 'ye200', text: '콘텐츠' }],
      title: '바이킹',
      startTime: '13:00',
      endTime: '19:00',
      location: '제2과학기술관 옆 주차장',
      isSun: true,
    },
    {
      id: '16',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '학생 특별공연',
      startTime: '17:30',
      endTime: '18:00',
      location: '공연장',
      isSun: true,
    },
    {
      id: '17',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'ifeye',
      startTime: '18:00',
      endTime: '18:30',
      location: '공연장',
      isSun: false,
    },
    {
      id: '18',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '히든 스타',
      startTime: '18:30',
      endTime: '19:45',
      location: '공연장',
      isSun: false,
    },
    {
      id: '19',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: '청하',
      startTime: '19:45',
      endTime: '20:15',
      location: '공연장',
      isSun: false,
    },
    {
      id: '20',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'YB',
      startTime: '20:15',
      endTime: '21:15',
      location: '공연장',
      isSun: false,
    },
    {
      id: '21 ',
      tags: [{ color: 'or100', text: '공연무대' }],
      title: 'DJ 주디',
      startTime: '21:15',
      endTime: '21:45',
      location: '공연장',
      isSun: false,
    },
  ],
};
