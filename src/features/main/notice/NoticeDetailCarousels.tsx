import * as S from './NoticeDetailCarousels.styles';
import { useEffect, useRef, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Indicator } from '@/components/indicator';

/**
 * 공지사항 상세 페이지 - 인스타그램 스타일 캐러셀
 * @param {string[]} img - 이미지 URL 배열
 * @returns {JSX.Element}
 */

export default function NoticeDetailCarousels({ img }: { img: string[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: -currentPage * containerWidth,
      });
    }
  }, [currentPage, containerWidth, controls]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    const swipe = info.offset.x;

    if (swipe < -50 && img && currentPage < img.length - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (swipe > 50 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      controls.start({
        x: -currentPage * containerWidth,
      });
    }
  };

  return (
    <>
      <S.CarouselWrapper>
        <S.Carousel ref={containerRef}>
          <S.CarouselMotion
            drag="x"
            dragConstraints={{ left: -containerWidth * (img.length - 1), right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {img.map((src, index) => (
              <S.CarouselSlide key={index} width={containerWidth}>
                <S.Image src={src} alt={`Image ${index + 1}`} />
              </S.CarouselSlide>
            ))}
          </S.CarouselMotion>
        </S.Carousel>
        <Indicator currentPage={currentPage} totalPages={img.length} />
      </S.CarouselWrapper>
    </>
  );
}
