import { useParams } from 'react-router-dom';
import { NoticeData } from '@/constants/main/Notice';
import { NavBar } from '@/components/nav-bar';
import * as S from './NoticeDetail.styles';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Indicator } from '@/components/indicator';
import { ColorButton } from '@/components/colorbuttons';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';
import ReactMarkdown from 'react-markdown';

export default function NoticeDetail() {
  const { id } = useParams<{ id: string }>();
  const notice = NoticeData.find((item) => item.id === Number(id));
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  if (!notice) {
    return (
      <>
        <NavBar title="공지사항" isBack={true} />
        <S.Container>해당 공지사항을 찾을 수 없습니다.</S.Container>
      </>
    );
  }

  const handleDragEnd = (_: never, info: { offset: { x: number } }) => {
    if (info.offset.x > 80) {
      setDirection(-1);
      setCurrentPage((prev) => (prev - 1 + notice.img.length) % notice.img.length);
    } else if (info.offset.x < -80) {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % notice.img.length);
    }
  };

  return (
    <>
      <NavBar title="공지사항" isBack={true} />
      <S.Container>
        <S.Carousel>
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentPage}
              src={notice.img[currentPage]}
              alt={`Notice Image ${currentPage + 1}`}
              initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
              transition={{
                x: { type: 'tween', duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </AnimatePresence>
        </S.Carousel>
        <Indicator currentPage={currentPage} totalPages={notice.img.length} />
        <S.Main>
          <S.Title>{notice.title}</S.Title>
          <S.TagWrapper>
            {notice.tags.map((tag, index) => (
              <ColorButton key={index} backgroundColor={tag.color as ColorKey} label={tag.text} />
            ))}
          </S.TagWrapper>
          <S.Body>
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <S.CustomLink href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </S.CustomLink>
                ),
              }}
            >
              {notice.body}
            </ReactMarkdown>
          </S.Body>
        </S.Main>
      </S.Container>
    </>
  );
}
