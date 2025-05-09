import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MainEventData } from '@/constants/main/MainEvent';
import * as S from './EventCarousels.styles';
import { sliderTransition, sliderVariants } from './EventCarouselsMotion.styles.ts';
import { Indicator } from '@/components/indicator';
import Cursor from '@/assets/icons/cursor.svg?react';
import { EventCard } from '../cards';
/**
 * Carousels 컴포넌트
 * - MainEventData를 기반으로 UI를 렌더링

 * - swipeTo: 슬라이더를 특정 방향으로 이동
 * - handleDragEnd: 드래그 종료 시 동작
 * - getVariant: 각 카드의 애니메이션 상태
 */

export default function EventCarousels() {
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

    switch (relative) {
      case 0:
        return 'active';
      case 1:
        return 'next1';
      case 2:
        return 'next2';
      case 3:
        return 'next3';
      case -1:
        return 'prev1';
      case -2:
        return 'prev2';
      case -3:
        return 'prev3';
    }
    return 'hidden';
  };

  return (
    <S.Wrapper>
      <S.CardWrap>
        <AnimatePresence initial={false} custom={direction}>
          {MainEventData.map((card, i) => ({ card, index: i, relative: i - index }))
            .slice(Math.max(0, index - 3), index + 4)
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
                  $isHidden={variant === 'hidden'}
                >
                  <EventCard {...card} />
                </S.MotionCard>
              );
            })}
        </AnimatePresence>
      </S.CardWrap>
      <S.CursorBox>
        <Cursor width={'12.625rem'} height={'3.72063rem'} />
      </S.CursorBox>
      <Indicator currentPage={index} totalPages={MainEventData.length} />
    </S.Wrapper>
  );
}
