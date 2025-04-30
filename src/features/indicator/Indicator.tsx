import { theme } from '@/styles/theme';
import * as S from './Indicator.style';

const HIDE_INDICATOR_DISTANCE = 5;
const SMALL_INDICATOR_DISTANCE = 3;
const MED_INDICATOR_DISTANCE = 2;
interface IndicatorProps {
  totalPages: number;
  currentPage: number;
  onClick?: (index: number) => void;
}
export default function Indicator({ totalPages, currentPage, onClick }: IndicatorProps) {
  const dots = [...Array(totalPages).keys()];

  const handleDotClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <S.Container>
      {dots.map((index) => {
        // 현재 페이지와의 거리 계산
        const distance = Math.abs(currentPage - index);

        // 거리에 따른 scale 값 계산
        let scale = 1;
        if (distance > MED_INDICATOR_DISTANCE) scale = 0.75;
        if (distance > SMALL_INDICATOR_DISTANCE) scale = 0.5;

        // 숨김 여부 결정
        const isHidden = distance > HIDE_INDICATOR_DISTANCE;

        return (
          <S.Dots
            key={index}
            initial={false}
            animate={{
              scale: isHidden ? 0 : scale,
              width: isHidden ? 0 : undefined,
              marginLeft: isHidden ? '-4px' : undefined,
              backgroundColor:
                index === currentPage ? theme.colors.primary.bl400 : theme.colors.grayScale.gy200,
            }}
            transition={{
              scale: { duration: 0.4, ease: 'easeInOut' },
              width: { duration: 0.4, ease: 'easeInOut' },
              marginLeft: { duration: 0.4, ease: 'easeInOut' },
              backgroundColor: { duration: 0.2, ease: 'easeInOut' },
            }}
            onClick={() => handleDotClick(index)}
            $isClickable={!!onClick}
          />
        );
      })}
    </S.Container>
  );
}
