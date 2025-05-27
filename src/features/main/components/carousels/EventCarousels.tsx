import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MainEventData } from '@/constants/main/MainEvent';
import * as S from './EventCarousels.styles';
import { sliderTransition, sliderVariants } from './EventCarouselsMotion.styles.ts';
import { Indicator } from '@/components/indicator';
import Cursor from '@/assets/icons/cursor.svg?react';
import { EventCard } from '../cards';
import { useNavigate } from 'react-router-dom';
import { EventCardData } from '@/types/eventCardData.type';
/**
 * Carousels 컴포넌트
 * - MainEventData를 기반으로 UI를 렌더링

 * - swipeTo: 슬라이더를 특정 방향으로 이동
 * - handleDragEnd: 드래그 종료 시 동작
 * - getVariant: 각 카드의 애니메이션 상태
 * - nightOn: 현재 시간에 따른 밤/낮 아이콘 구분
 * - liveOn: 현재 시간에 따른 공연무대 라이브 태그
 */

export default function EventCarousels() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();
  const eventCardLinkMap: Record<string, string> = {
    '1': '/main/notice/13',
    '2': '/main/notice/14',
    '10': '/main/notice/8',
    '15': '/main/notice/14',
  };

  const now = new Date();
  const korea = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const todayStr = korea.toISOString().split('T')[0];
  const todayEvents: EventCardData[] = MainEventData[todayStr] ?? [];

  const nightOn = (card: EventCardData, now: Date): boolean => {
    const startHour = Number(card.startTime.split(':')[0]);
    const endHour = Number(card.endTime.split(':')[0]);
    if (startHour < 18 && endHour > 18 && now.getHours() >= 18) {
      return false;
    }
    return card.isSun;
  };

  const liveOn = (card: EventCardData, now: Date) => {
    const tags = card.tags;
    const Perfomance = tags.some((tag) => tag.text === '공연무대');
    if (!Perfomance) return tags;

    const nowMin = now.getHours() * 60 + now.getMinutes();
    const startMin =
      Number(card.startTime.split(':')[0]) * 60 + Number(card.startTime.split(':')[1]);
    const endMin = Number(card.endTime.split(':')[0]) * 60 + Number(card.endTime.split(':')[1]);

    const isLive = nowMin >= startMin && nowMin <= endMin;
    const hasLive = tags.some((tag) => tag.text === 'LIVE');

    if (isLive && !hasLive) {
      return [{ color: 'rd500', text: 'LIVE' }, ...tags];
    }
    return tags;
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEndWrapper = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    setTimeout(() => setIsDragging(false), 50);
    handleDragEnd(e, info);
  };
  /**
   * 슬라이더를 특정 방향으로 이동 (-1: 이전, 1: 다음)
   * @param {number} dir - 이동 방향
   */
  const swipeTo = (dir: number) => {
    setIndex(([prev]) => {
      const max = todayEvents.length - 1;
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
    const max = todayEvents.length - 1;

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
          {todayEvents
            .map((card, i) => ({ card, index: i, relative: i - index }))
            .slice(Math.max(0, index - 3), index + 4)
            .map(({ card, index: i }) => {
              const variant = getVariant(i);

              const isSun = nightOn(card, now);
              const tags = liveOn(card, now);

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
                  onDragStart={handleDragStart}
                  onDragEnd={variant === 'active' ? handleDragEndWrapper : undefined}
                  $isHidden={variant === 'hidden'}
                >
                  <EventCard
                    {...card}
                    isSun={isSun}
                    tags={tags}
                    onClick={() => {
                      if (!isDragging) {
                        const link = eventCardLinkMap[card.id];
                        if (link) navigate(link);
                      }
                    }}
                  />
                </S.MotionCard>
              );
            })}
        </AnimatePresence>
      </S.CardWrap>
      <S.CursorBox>
        <Cursor width={'12.625rem'} height={'3.72063rem'} />
      </S.CursorBox>
      <Indicator currentPage={index} totalPages={todayEvents.length} />
    </S.Wrapper>
  );
}
