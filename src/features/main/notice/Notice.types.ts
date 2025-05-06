/**
 * 공지사항 본문 컴포넌트의 props 타입
 * @typedef {Object} NoticeBodyProps
 * @property {string} title - 공지사항 제목
 * @property {{ text: string; color: string }[]} tags - 공지사항 태그 배열
 * @property {string} body - 공지사항 본문 내용
 */

export interface NoticeBodyProps {
  title: string;
  tags: { text: string; color: string }[];
  body: string;
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
