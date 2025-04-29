import { useState, useRef } from 'react';
import * as S from './Carousel.styles';
import TestImage from '@/assets/images/performance/day1-newjeans.webp';

const images = [TestImage, TestImage, TestImage, TestImage, TestImage];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getPosition = (index: number) => {
    const left2 = (currentIndex - 2 + images.length) % images.length;
    const left1 = (currentIndex - 1 + images.length) % images.length;
    const right1 = (currentIndex + 1) % images.length;
    const right2 = (currentIndex + 2) % images.length;

    if (index === currentIndex) return 'active';
    if (index === left1) return 'left';
    if (index === left2) return 'far-left';
    if (index === right1) return 'right';
    if (index === right2) return 'far-right';
    return 'hidden';
  };
  return (
    <S.Container
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, index) => (
        <S.Card key={index} className={getPosition(index)}>
          <img src={img} alt={`slide-${index}`} />
        </S.Card>
      ))}
    </S.Container>
  );
}
