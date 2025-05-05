import { useParams } from 'react-router-dom';
import { NoticeData } from '@/constants/main/Notice';
import { NavBar } from '@/components/nav-bar';
import * as S from './NoticeDetail.styles';

export default function NoticeDetail() {
  const { id } = useParams<{ id: string }>();
  const notice = NoticeData.find((item) => item.id === Number(id));

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
        <S.Image src={notice.img} alt="" />
        <S.Title>{notice.title}</S.Title>
        <S.Body>{notice.body}</S.Body>
      </S.Container>
    </>
  );
}
