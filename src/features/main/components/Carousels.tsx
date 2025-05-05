import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Card from './Card';
import { MainEventData } from '@/constants/main/MainEvent';
import * as S from './Carousels.styles';

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.1,
    opacity: 0,
    position: 'absolute' as const,
  }),
  active: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    position: 'absolute' as const,
    zIndex: 5,
  },
  next1: {
    x: 8,
    y: 8,
    opacity: 0.8,
    position: 'absolute' as const,
    zIndex: 4,
  },
  next2: {
    x: 16,
    y: 16,
    opacity: 0.3,
    position: 'absolute' as const,
    zIndex: 3,
  },
  next3: {
    x: 24,
    y: 24,
    opacity: 0.1,
    position: 'absolute' as const,
    zIndex: 2,
  },
  hidden: {
    x: '-400%',
    opacity: 0,
    display: 'none',
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.9,
    position: 'absolute' as const,
  }),
  prev1: {
    x: -800,
    y: 8,
    opacity: 0.8,
    position: 'absolute' as const,
    zIndex: 4,
  },
  prev2: {
    x: -800,
    y: 16,
    opacity: 0.3,
    position: 'absolute' as const,
    zIndex: 3,
  },
  prev3: {
    x: -800,
    y: 24,
    opacity: 0.1,
    position: 'absolute' as const,
    zIndex: 2,
  },
};

const sliderTransition = {
  duration: 0.5,
  ease: [0.56, 0.03, 0.12, 1.04],
};

export default function CardDeckCarousel() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const swipeTo = (dir: number) => {
    setIndex(([prev]) => {
      const max = MainEventData.length - 1;
      if (dir === -1 && prev === 0) return [prev, 0];
      if (dir === 1 && prev === max) return [prev, 0];

      const newIndex = prev + dir;
      return [newIndex, dir];
    });
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    const swipe = info.offset.x;
    const max = MainEventData.length - 1;

    if (swipe > 50 && index > 0) swipeTo(-1);
    else if (swipe < -50 && index < max) swipeTo(1);
  };

  const getVariant = (i: number) => {
    const relative = i - index;

    if (relative === 0) return 'active';
    if (relative === 1) return 'next1';
    if (relative === 2) return 'next2';
    if (relative === 3) return 'next3';

    if (relative === -1) return 'prev1';
    if (relative === -2) return 'prev2';
    if (relative === -3) return 'prev3';

    return 'hidden';
  };

  return (
    <S.Wrapper>
      <S.CardWrap>
        <AnimatePresence initial={false} custom={direction}>
          {MainEventData.map((card, i) => {
            const variant = getVariant(i);
            return (
              <S.MotionCard
                key={i}
                custom={direction}
                variants={sliderVariants}
                initial={variant === 'active' ? 'incoming' : false}
                animate={variant || 'hidden'}
                transition={sliderTransition}
                drag={
                  index === MainEventData.length - 1 ? false : variant === 'active' ? 'x' : false
                }
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={variant === 'active' ? handleDragEnd : undefined}
                isHidden={variant === 'hidden'}
              >
                <Card {...card} />
              </S.MotionCard>
            );
          })}
        </AnimatePresence>
      </S.CardWrap>
    </S.Wrapper>
  );
}
