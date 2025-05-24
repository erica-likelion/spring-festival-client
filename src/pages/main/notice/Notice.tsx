import { NavBar } from '@/components/nav-bar';
import * as S from './Notice.styles';
import { NoticeData } from '@/constants/main/Notice';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoticeBox } from '@/features/main/components/notice/index';

export default function Notice() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  const handleDetail = useCallback(
    (id: string) => {
      navigate(`/main/notice/${id}`);
    },
    [navigate],
  );

  return (
    <>
      <NavBar title="공지사항" isBack={true} />
      <S.Container>
        <S.Flex>
          {NoticeData.slice()
            .reverse()
            .map((notice) => (
              <NoticeBox
                key={notice.id}
                id={notice.id}
                img={notice.img[0]}
                title={notice.title}
                body={notice.body}
                onClick={handleDetail}
              />
            ))}
        </S.Flex>
      </S.Container>
    </>
  );
}
