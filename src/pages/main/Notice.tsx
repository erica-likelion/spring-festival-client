import { NavBar } from '@/components/nav-bar';
import * as S from './Notice.styles';
import NoticeText from '@/features/main/notice/NoticeText';
import { NoticeData } from '@/constants/main/Notice';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';

export default function Notice() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  return (
    <>
      <NavBar title="공지사항" isBack={true} />
      <S.Container>
        <S.Flex>
          {NoticeData.map((notice) => (
            <>
              <NoticeText
                key={'notice${notice.id}'}
                image={notice.img}
                title={notice.title}
                body={notice.body}
              />
              <S.HorizontalLine>
                <S.Line />
              </S.HorizontalLine>
            </>
          ))}
        </S.Flex>
      </S.Container>
    </>
  );
}
