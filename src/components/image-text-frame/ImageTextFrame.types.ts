import { CSSWidthValue } from '@/types/css-values.types';

export type ImageTextFrameWithOrganizationProps = {
  /** 이미지 URL */
  image: string;

  /** 제목 */
  title: string;

  /** 조직명 */
  organization: string;

  /** 픽업 가능 여부 */
  canPickup: boolean;

  /** 클릭 이벤트 핸들러 (선택) */
  onClick?: () => void;

  /** 너비 (선택) */
  width?: CSSWidthValue;
};

export type ImageTextFrameWithTimeProps = {
  /** 이미지 URL */
  image: string;

  /** 제목 */
  title: string;

  /** 부제목 */
  subtitle: string;

  /** 시간 정보 */
  time: string;

  /** 픽업 가능 여부 */
  canPickup: boolean;

  /** 클릭 이벤트 핸들러 (선택) */
  onClick?: () => void;

  /** 너비 (선택) */
  width?: CSSWidthValue;
};

export type MenuFrameProps = {
  /** 메뉴 이름 */
  menu: string;

  /** 설명 */
  description: string;

  /** 가격 */
  price: number;

  /** 너비 (선택) */
  width?: CSSWidthValue;
};
