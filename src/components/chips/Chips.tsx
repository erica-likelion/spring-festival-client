import * as S from './Chips.styles';
import { ChipsProps } from './Chips.types';

/**
 * Chips component
 * @param chips chip string array
 * @param onChipClick click event handler
 * @param onChipClose click event handler
 * @param autoWidth optional prop to set width to auto
 * @param margin optional prop to set horizontal margin (first and last tab)
 * @returns {JSX.Element}
 */

export default function Chips({
  chips,
  autoWidth = false,
  onChipClick,
  onChipClose,
  margin = '0',
}: ChipsProps) {
  return (
    <S.ChipsContainer $autoWidth={autoWidth}>
      {chips.map((chip, index) => (
        <S.Chip
          key={chip}
          onClick={() => onChipClick?.(chip)}
          $isFirst={index === 0}
          $isLast={index === chips.length - 1}
          $margin={margin}
        >
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
