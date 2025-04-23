import * as S from './Chips.styles';
import CloseIcon from '@/assets/icons/close.svg?react';
import { ChipsProps } from './Chips.types';

export default function Chips({ chips, autoWidth = false, onChipClick, onChipClose }: ChipsProps) {
  return (
    <S.ChipsContainer $autoWidth={autoWidth}>
      {chips.map((chip) => (
        <S.Chip key={chip} onClick={() => onChipClick?.(chip)}>
          <S.ChipText>{chip}</S.ChipText>
          <CloseIcon
            width={'0.75rem'}
            height={'0.75rem'}
            onClick={(e) => {
              e.stopPropagation();
              onChipClose?.(chip);
            }}
          />
        </S.Chip>
      ))}
    </S.ChipsContainer>
  );
}
