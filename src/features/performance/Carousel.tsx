import { useState, useRef, useEffect } from 'react';
import * as S from './Carousel.styles';
import TimeIcon from '@/assets/icons/time_gy200.svg?react';
import { CarouselProps } from './Carousel.types';
import { PerformanceAlert } from '../alarm';

export default function Carousel({ data }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleData, setVisibleData] = useState(data);
  const [prevData, setPrevData] = useState(data);
  const [prevCurrentIndex, setPrevCurrentIndex] = useState(0);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [textFade, setTextFade] = useState<'in' | 'out'>('in');

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const currentSinger = visibleData[currentIndex];

  // 탭 변경 감지
  useEffect(() => {
    if (data !== visibleData) {
      setFade('out');
      setPrevData(visibleData);
      setPrevCurrentIndex(currentIndex);

      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setVisibleData(data);
        setFade('in');
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, data, visibleData]);

  // 텍스트 fade 처리
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
        setCurrentIndex((prev) => (prev + 1) % visibleData.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + visibleData.length) % visibleData.length);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getPosition = (index: number, centerIndex: number, length: number) => {
    if (length <= 3) {
      const left = (centerIndex - 1 + length) % length;
      const right = (centerIndex + 1) % length;

      if (index === centerIndex) return 'active';
      if (index === left) return 'left';
      if (index === right) return 'right';
      return 'hidden';
    }

    const left2 = (centerIndex - 2 + length) % length;
    const left1 = (centerIndex - 1 + length) % length;
    const right1 = (centerIndex + 1) % length;
    const right2 = (centerIndex + 2) % length;

    if (index === centerIndex) return 'active';
    if (index === left1) return 'left';
    if (index === left2) return 'far-left';
    if (index === right1) return 'right';
    if (index === right2) return 'far-right';
    return 'hidden';
  };

  return (
    <S.Container>
      <S.CarouselContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 이전 카드들 (fade-out) */}
        {fade === 'out' &&
          prevData.map((img, index) => (
            <S.Card
              to="/performance/detail"
              state={img}
              key={`prev-${index}`}
              className={`${getPosition(index, prevCurrentIndex, prevData.length)} fade-out`}
            >
              <img src={img.backgroundUrl} alt={`prev-slide-${index}`} />
            </S.Card>
          ))}

        {/* 현재 카드들 (fade-in) */}
        {fade === 'in' &&
          visibleData.map((img, index) => (
            <S.Card
              to="/performance/detail"
              state={img}
              key={`current-${index}`}
              className={`${getPosition(index, currentIndex, visibleData.length)} fade-in`}
            >
              <img src={img.backgroundUrl} alt={`slide-${index}`} />
            </S.Card>
          ))}
      </S.CarouselContainer>

      <S.SingerTimeWrap>
        <S.SingerName fade={textFade}>{currentSinger.singer}</S.SingerName>
        <S.TimeBox>
          <TimeIcon width="1.125rem" height="1.125rem" />
          <S.TimeText fade={textFade}>{currentSinger.time}</S.TimeText>
        </S.TimeBox>
        <S.AlertBox>
          <PerformanceAlert id={currentSinger.fcm_singer} />
        </S.AlertBox>
      </S.SingerTimeWrap>
    </S.Container>
  );
}
