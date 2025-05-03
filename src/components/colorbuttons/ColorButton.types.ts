import { DefaultTheme } from 'styled-components';

export type PrimaryKeys = keyof DefaultTheme['colors']['primary'];
export type SecondaryKeys = keyof DefaultTheme['colors']['secondary'];
export type ColorKey = PrimaryKeys | SecondaryKeys;

/**
 * 받은 색깔 props에 따라 primary 색깔과 secondary 색깔을 구분하기 위한 타입'
 */

export interface ColorButtonProps {
  label: string;
  backgroundColor: ColorKey;
}
