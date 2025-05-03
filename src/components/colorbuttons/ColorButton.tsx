import React from 'react';
import { StyledColorButton } from './ColorButton.style';
import { ColorButtonProps } from './ColorButton.types';

const ColorButton: React.FC<ColorButtonProps> = ({ label, backgroundColor }) => {
  return <StyledColorButton backgroundColor={backgroundColor}>{label}</StyledColorButton>;
};

export default ColorButton;
