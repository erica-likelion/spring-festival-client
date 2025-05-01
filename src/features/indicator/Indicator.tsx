import { theme } from '@/styles/theme';
import * as S from './Indicator.style';
import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IndicatorProps } from './Indicator.types';
import { getScale } from '@/utils/calculateDotScale';
import { calculateVisibleDots } from '@/utils/calculateVisibleDots';

/**
 * Indicator 컴포넌트
 * @param {number} totalPages - 전체 페이지 수
 * @param {number} currentPage - 현재 페이지 인덱스
 * @param {(index: number) => void} [onClick] - 특정 페이지로 이동하기 위한 클릭 이벤트
 * @returns {JSX.Element}
 * @example
 * <Indicator totalPages={10} currentPage={3} />
 */

export default function Indicator({ totalPages, currentPage, onClick }: IndicatorProps) {
  const DOTS = 5;

  const visibleDotIndex = useMemo(
    () => calculateVisibleDots(totalPages, currentPage, DOTS),
    [currentPage, totalPages],
  );

  const handleDotClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <S.Container>
      <AnimatePresence initial={false} mode="popLayout">
        {visibleDotIndex.map((index) => (
          <S.DotsBox key={index}>
            <S.Dots
              layout
              initial={{
                scale: 0,
                opacity: 0,
                x: index < currentPage ? -10 : 10,
              }}
              animate={{
                scale: getScale(index, currentPage, totalPages),
                opacity: 1,
                x: 0,
                backgroundColor:
                  index === currentPage ? theme.colors.primary.bl400 : theme.colors.grayScale.gy200,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                x: index < currentPage ? -10 : 10,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                scale: { duration: 0.4, ease: 'easeInOut' },
                backgroundColor: { duration: 0.2, ease: 'easeInOut' },
              }}
              onClick={() => handleDotClick(index)}
              $isClickable={!!onClick}
            />
          </S.DotsBox>
        ))}
      </AnimatePresence>
    </S.Container>
  );
}
