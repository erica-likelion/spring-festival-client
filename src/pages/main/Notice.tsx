import { NavBar } from '@/components/nav-bar';
import * as S from './Notice.styles';
import NoticeText from '@/features/main/notice/NoticeText';
import { NoticeData } from '@/constants/main/Notice';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notice() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  const handleDetail = (id: number) => {
    navigate(`/main/notice/${id}`);
  };

  return (
    <>
      <NavBar title="공지사항" isBack={true} />
      <S.Container>
        <S.Flex>
          {NoticeData.map((notice) => (
            <S.NoticeBox key={`notice-${notice.id}`} onClick={() => handleDetail(notice.id)}>
              <NoticeText image={notice.img} title={notice.title} body={notice.body} />
              <S.HorizontalLine>
                <S.Line />
              </S.HorizontalLine>
            </S.NoticeBox>
          ))}
        </S.Flex>
      </S.Container>
    </>
  );
}
