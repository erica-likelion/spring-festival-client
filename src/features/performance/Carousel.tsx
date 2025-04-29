import { useState, useRef, useEffect } from 'react';
import * as S from './Carousel.styles';
import TimeIcon from '@/assets/icons/time_gy200.svg?react';
import AlertIcon from '@/assets/icons/alert.svg?react';

type PerformanceItem = {
  backgroundUrl: string;
  singer: string;
  time: string;
  description: string;
  songList: { image: string; name: string }[];
};

interface CarouselProps {
  data: PerformanceItem[];
}

export default function Carousel({ data }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const currentSinger = data[currentIndex];
  const [fade, setFade] = useState<'in' | 'out'>('in');

  useEffect(() => {
    setFade('out');

    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      setFade('in');
    }, 300);

    return () => clearTimeout(timeout);
  }, [data]);

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
        <S.SingerName>{currentSinger.singer}</S.SingerName>
        <S.TimeBox>
          <TimeIcon width={'1.125rem'} height={'1.125rem'} />
          <S.TimeText>{currentSinger.time}</S.TimeText>
        </S.TimeBox>
        <S.AlertBox>
          <AlertIcon width={'1rem'} height={'1rem'} />
          <S.AlertText>알림 받기</S.AlertText>
        </S.AlertBox>
      </S.SingerTimeWrap>
    </S.Container>
  );
}
