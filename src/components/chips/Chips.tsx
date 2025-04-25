import * as S from './Chips.styles';
import { ChipsProps } from './Chips.types';

/**
 * Chips component
 * @param chips chip string array
 * @param onChipClick click event handler
 * @param onChipClose click event handler
 * @param autoWidth optional prop to set width to auto
 * @returns {JSX.Element}
 */

export default function Chips({ chips, autoWidth = false, onChipClick, onChipClose }: ChipsProps) {
  return (
    <S.ChipsContainer $autoWidth={autoWidth}>
      {chips.map((chip) => (
        <S.Chip key={chip} onClick={() => onChipClick?.(chip)}>
          <S.ChipText>{chip}</S.ChipText>
          <S.StyledCloseIcon
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
