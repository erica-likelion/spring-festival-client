import { useState, useRef, useEffect } from 'react';
import * as S from './Carousel.styles';
import TimeIcon from '@/assets/icons/time_gy200.svg?react';
import { CarouselProps } from './Carousel.types';
import { PerformanceAlert } from '../alarm';

/**
 * Carousel 컴포넌트
 *
 * 주어진 공연 데이터를 기반으로 좌우 슬라이드 가능한 뷰를 제공합니다.
 * 각 슬라이드는 해당 가수의 배경 이미지, 이름, 시간, 알림 버튼을 표시합니다.
 * 슬라이드 시 카드 애니메이션 및 텍스트 페이드 인/아웃이 적용됩니다.
 *
 * @component
 * @param {CarouselProps} props - 캐러셀에 표시할 공연 데이터 배열
 * @returns {JSX.Element} 캐러셀 UI
 */

export default function Carousel({ data }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const currentSinger = data[currentIndex];
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [textFade, setTextFade] = useState<'in' | 'out'>('in');

  useEffect(() => {
    setFade('out');

    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      setFade('in');
    }, 300);
    return () => clearTimeout(timeout);
  }, [data]);

  useEffect(() => {
    setTextFade('out');
    const timeout = setTimeout(() => {
      setTextFade('in');
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const deltaX = touchStartX.current - touchEndX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setCurrentIndex((prev) => (prev + 1) % data.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getPosition = (index: number) => {
    const left2 = (currentIndex - 2 + data.length) % data.length;
    const left1 = (currentIndex - 1 + data.length) % data.length;
    const right1 = (currentIndex + 1) % data.length;
    const right2 = (currentIndex + 2) % data.length;

    if (index === currentIndex) return 'active';
    if (index === left1) return 'left';
    if (index === left2) return 'far-left';
    if (index === right1) return 'right';
    if (index === right2) return 'far-right';
    return 'hidden';
  };
  return (
    <S.Container>
      <S.CarouselContainer
        fade={fade}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((img, index) => (
          <S.Card key={index} className={getPosition(index)}>
            <img src={img.backgroundUrl} alt={`slide-${index}`} />
          </S.Card>
        ))}
      </S.CarouselContainer>
      <S.SingerTimeWrap>
        <S.SingerName fade={textFade}>{currentSinger.singer}</S.SingerName>
        <S.TimeBox>
          <TimeIcon width={'1.125rem'} height={'1.125rem'} />
          <S.TimeText fade={textFade}>{currentSinger.time}</S.TimeText>
        </S.TimeBox>
        <S.AlertBox>
          <PerformanceAlert id={currentSinger.id} />
        </S.AlertBox>
      </S.SingerTimeWrap>
    </S.Container>
  );
}
