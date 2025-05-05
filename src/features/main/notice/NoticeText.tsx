import { NavBar } from '@/components/nav-bar';
import * as S from './NoticeText.styles';

export default function Notice() {
  return (
    <>
      <NavBar title="공지사항" isBack={true} />
      <S.Container></S.Container>
    </>
  );
}
