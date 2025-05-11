import { useParams } from 'react-router-dom';
import { NoticeData } from '@/constants/main/Notice';
import { NavBar } from '@/components/nav-bar';
import * as S from './NoticeDetail.styles';
import { useEffect, useMemo } from 'react';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { NoticeDetailCarousels, NoticeBody } from '@/features/main/components/notice/index';

/**
 * 공지사항 상세 페이지 - 인스타그램 스타일 캐러셀
 * @returns {JSX.Element}
 */
export default function NoticeDetail() {
  const { id } = useParams<{ id: string }>();
  const notice = useMemo(() => NoticeData.find((item) => item.id === Number(id)), [id]);

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

  return (
    <>
      <NavBar title="공지사항" isBack={true} />
      <S.Container>
        <NoticeDetailCarousels img={notice.img} />
        <NoticeBody title={notice.title} tags={notice.tags} body={notice.body} />
      </S.Container>
    </>
  );
}
