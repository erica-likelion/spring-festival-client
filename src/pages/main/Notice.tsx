import { NavBar } from '@/components/nav-bar';
import * as S from './Notice.styles';
import NoticeText from '@/features/main/notice/NoticeText';

export default function Notice() {
  return (
    <>
      <NavBar title="공지사항" isBack={true} />
      <S.Container>
        <NoticeText
          image=""
          title="sdf"
          body="Body text Body text Body text Body text Body text Body text Body text Body text Body text Body text"
        />
      </S.Container>
    </>
  );
}
