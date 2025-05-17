/**
 * 공지사항 카드 및 본문 컴포넌트의 props 타입
 * @typedef {Object} NoticeBodyProps
 * @property {string} title - 공지사항 제목
 * @property {{ text: string; color: string }[]} tags - 공지사항 태그 배열
 * @property {string} body - 공지사항 본문 내용
 * @property {() => void} [onClick] - 공지사항 클릭 이벤트 핸들러
 */

export interface NoticeBodyProps {
  title: string;
  tags: { text: string; color: string }[];
  body: string;
  onClick?: () => void;
  isFirst?: boolean;
}

/**
 * 공지사항 텍스트 컴포넌트의 props 타입
 * @typedef {Object} NoticeTextProps
 * @property {string} image - 공지사항 이미지 URL
 * @property {string} title - 공지사항 제목
 * @property {string} body - 공지사항 본문 내용
 */

export interface NoticeTextProps {
  image: string;
  title: string;
  body: string;
}

/**
 * 공지사항 리스트 컴포넌트의 props 타입
 * @typedef {Object} NoticeBoxProps
 * @property {number} id - 공지사항 ID
 * @property {string} img - 공지사항 이미지 URL
 * @property {string} title - 공지사항 제목
 * @property {string} body - 공지사항 본문 내용
 * @property {(id: string) => void} onClick - 공지사항 클릭 이벤트 핸들러
 */
export interface NoticeBoxProps {
  id: number;
  img: string;
  title: string;
  body: string;
  onClick: (id: string) => void;
}
