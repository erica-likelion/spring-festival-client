import { useParams } from 'react-router-dom';
import { NoticeData } from '@/constants/main/Notice';
import { NavBar } from '@/components/nav-bar';
import * as S from './NoticeDetail.styles';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Indicator } from '@/components/indicator';
import NoticeBody from '../../features/main/notice/NoticeBody';

/**
 * 공지사항 상세 페이지 - 인스타그램 스타일 캐러셀
 * @returns {JSX.Element}
 */
export default function NoticeDetail() {
  const { id } = useParams<{ id: string }>();
  const notice = useMemo(() => NoticeData.find((item) => item.id === Number(id)), [id]);
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

  if (!notice) {
    return (
      <>
        <NavBar title="공지사항" isBack={true} />
        <S.Container>해당 공지사항을 찾을 수 없습니다.</S.Container>
      </>
    );
  }

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    const swipe = info.offset.x;

    if (swipe < -50 && currentPage < notice.img.length - 1) {
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
      <NavBar title="공지사항" isBack={true} />
      <S.Container>
        <S.CarouselWrapper>
          <S.Carousel ref={containerRef}>
            <S.CarouselMotion
              drag="x"
              dragConstraints={{ left: -containerWidth * (notice.img.length - 1), right: 0 }}
              onDragEnd={handleDragEnd}
              animate={controls}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {notice.img.map((src, index) => (
                <S.CarouselSlide key={index} width={containerWidth}>
                  <S.Image src={src} alt={`Image ${index + 1}`} />
                </S.CarouselSlide>
              ))}
            </S.CarouselMotion>
          </S.Carousel>
          <Indicator currentPage={currentPage} totalPages={notice.img.length} />
        </S.CarouselWrapper>
        <NoticeBody title={notice.title} tags={notice.tags} body={notice.body} />
      </S.Container>
    </>
  );
}
