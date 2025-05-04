import { DefaultTheme } from 'styled-components';

/**
 * 테마의 primary 컬러 키 타입
 */
export type PrimaryKeys = keyof DefaultTheme['colors']['primary'];

/**
 * 테마의 secondary 컬러 키 타입
 */
export type SecondaryKeys = keyof DefaultTheme['colors']['secondary'];

/**
 * 받은 색깔 props에 따라 primary 색깔과 secondary 색깔을 구분하기 위한 타입'
 */
export type ColorKey = PrimaryKeys | SecondaryKeys;

/**
 * TextBadge 컴포넌트의 Props 타입
 */
export interface ColorButtonProps {
  /**
   * 뱃지에 표시할 텍스트
   */
  label: string;

  /**
   * 배경색으로 사용할 색상 키
   * primary 또는 secondary 컬러에서 선택 가능
   */
  backgroundColor: ColorKey;
}
