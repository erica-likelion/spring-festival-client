import { NavBar } from '@/components/nav-bar';
import * as S from './Notice.styles';
import NoticeText from '@/features/main/notice/NoticeText';
import { NoticeData } from '@/constants/main/Notice';

export default function Notice() {
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
