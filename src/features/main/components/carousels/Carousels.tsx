import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Card from '../Card';
import { MainEventData } from '@/constants/main/MainEvent';
import * as S from './Carousels.styles';
import { sliderTransition, sliderVariants } from './CarouselsMotion';

/**
 * Carousels 컴포넌트
 * - MainEventData를 기반으로 UI를 렌더링

 * - swipeTo: 슬라이더를 특정 방향으로 이동
 * - handleDragEnd: 드래그 종료 시 동작
 * - getVariant: 각 카드의 애니메이션 상태
 */

export default function Carousel() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  /**
   * 슬라이더를 특정 방향으로 이동 (-1: 이전, 1: 다음)
   * @param {number} dir - 이동 방향
   */
  const swipeTo = (dir: number) => {
    setIndex(([prev]) => {
      const max = MainEventData.length - 1;
      if (dir === -1 && prev === 0) return [prev, 0];
      if (dir === 1 && prev === max) return [prev, 0];

      const newIndex = prev + dir;
      return [newIndex, dir];
    });
  };

  /**
   * 드래그 종료 시 동작
   * @param {MouseEvent | TouchEvent | PointerEvent} _ - 드래그 이벤트 객체
   * @param {{ offset: { x: number } }} info - 드래그 이동 거리 정보
   */
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    const swipe = info.offset.x;
    const max = MainEventData.length - 1;

    if (swipe > 50 && index > 0) {
      swipeTo(-1);
    } else if (swipe < -50 && index < max) {
      swipeTo(1);
    }
  };

  /**
   * 각 카드의 애니메이션 상태
   * @param {number} i - 카드 인덱스
   * @returns {string} - 카드의 애니메이션 상태
   */
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
          {MainEventData.map((card, i) => ({ card, index: i, relative: i - index }))
            .filter(({ relative }) => Math.abs(relative) <= 3)
            .map(({ card, index: i }) => {
              const variant = getVariant(i);
              return (
                <S.MotionCard
                  key={i}
                  custom={direction}
                  variants={sliderVariants}
                  initial={variant === 'active' ? 'incoming' : false}
                  animate={variant || 'hidden'}
                  transition={sliderTransition}
                  drag={variant === 'active' ? 'x' : false}
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
