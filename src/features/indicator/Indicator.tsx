import { theme } from '@/styles/theme';
import * as S from './Indicator.style';
import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';

interface IndicatorProps {
  totalPages: number;
  currentPage: number;
  onClick?: (index: number) => void;
}

export default function Indicator({ totalPages, currentPage, onClick }: IndicatorProps) {
  const DOTS = 5;

  const visibleDotIndex = useMemo(() => {
    // 전체 페이지가 5개 이하면 모두 표시
    if (totalPages <= DOTS) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    // 현재 페이지를 중심으로 표시할 점들 계산
    const halfVisible = Math.floor(DOTS / 2);
    let startDot = currentPage - halfVisible;

    if (startDot < 0) {
      startDot = 0;
    }

    let endDot = startDot + DOTS - 1;
    if (endDot >= totalPages) {
      endDot = totalPages - 1;
      startDot = Math.max(0, endDot - DOTS + 1);
    }

    return Array.from({ length: endDot - startDot + 1 }, (_, i) => startDot + i);
  }, [currentPage, totalPages]);

  const handleDotClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
  };

  const getScale = (index: number): number => {
    const baseSize = 0.375;

    if (currentPage <= 1) {
      // 첫 페이지 근처
      if (index === 0) return baseSize / baseSize;
      if (index === 1) return 0.3125 / baseSize;
      if (index === 2) return 0.25 / baseSize;
      if (index === 3) return 0.1875 / baseSize;
      if (index === 4) return 0.125 / baseSize;
      return 0.125 / baseSize;
    } else if (currentPage >= totalPages - 2) {
      // 마지막 페이지 근처
      if (index === totalPages - 1) return baseSize / baseSize;
      if (index === totalPages - 2) return 0.3125 / baseSize;
      if (index === totalPages - 3) return 0.25 / baseSize;
      if (index === totalPages - 4) return 0.1875 / baseSize;
      if (index === totalPages - 5) return 0.125 / baseSize;
      return 0.125 / baseSize;
    } else {
      // 중간 페이지
      const distance = Math.abs(currentPage - index);
      if (distance === 0) return baseSize / baseSize;
      if (distance === 1) return 0.3125 / baseSize;
      if (distance >= 2) return 0.1875 / baseSize;
      return 0.125 / baseSize;
    }
  };

  return (
    <S.Container>
      <AnimatePresence initial={false} mode="popLayout">
        {visibleDotIndex.map((index) => (
          <S.Dots
            key={index}
            layout
            initial={{
              scale: 0,
              opacity: 0,
              x: index < currentPage ? -10 : 10,
            }}
            animate={{
              scale: getScale(index),
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
        ))}
      </AnimatePresence>
    </S.Container>
  );
}
