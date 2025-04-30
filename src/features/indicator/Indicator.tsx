import { theme } from '@/styles/theme';
import * as S from './Indicator.style';

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
  const getScale = (index: number): number => {
    // 현재 페이지와의 거리
    const distance = Math.abs(currentPage - index);

    const baseSize = 0.375;

    if (currentPage <= 1 || currentPage >= totalPages - 2) {
      if (index === 0) return baseSize / baseSize;
      if (index === 1) return 0.3125 / baseSize;
      if (index === 2) return 0.25 / baseSize;
      if (index === 3) return 0.1875 / baseSize;
      if (index === 4) return 0.125 / baseSize;
      return 0.125 / baseSize; // 기본값
    } else {
      if (distance === 0) return baseSize / baseSize;
      if (distance === 1) return 0.3125 / baseSize;
      if (distance >= 2) return 0.1875 / baseSize;
      return 0.125 / baseSize; // 기본값
    }
  };

  return (
    <S.Container>
      {dots.map((index) => (
        <S.Dots
          key={index}
          initial={false}
          animate={{
            scale: getScale(index),
            backgroundColor:
              index === currentPage ? theme.colors.primary.bl400 : theme.colors.grayScale.gy200,
          }}
          transition={{
            scale: { duration: 0.4, ease: 'easeInOut' },
            backgroundColor: { duration: 0.2, ease: 'easeInOut' },
          }}
          onClick={() => handleDotClick(index)}
          $isClickable={!!onClick}
        />
      ))}
    </S.Container>
  );
}
