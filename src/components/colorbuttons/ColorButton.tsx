import React from 'react';
import { StyledColorButton } from './ColorButton.style';
import { ColorButtonProps } from './ColorButton.types';

/**
 * 배경색을 정할 수 있는 ColorButton 컴포넌트입니다.
 *
 * @param string label - 버튼 내부에 표시될 텍스트
 * @param keyof theme.colors backgroundColor - 테마에서 사용할 색상 키
 *
 * @example
 * <ColorButton label={"포장가능"} backgroundColor={"bl400"}/>
 * <ColorButton label={"LIVE"} backgroundColor={"pk200"}/>
 * <ColorButton label={"공연무대"} backgroundColor={"rd500"}/>
 */

const ColorButton: React.FC<ColorButtonProps> = ({ label, backgroundColor }) => {
  return <StyledColorButton $backgroundColor={backgroundColor}>{label}</StyledColorButton>;
};

export default ColorButton;
