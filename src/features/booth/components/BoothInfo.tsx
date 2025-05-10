import { LikeButton } from '@/features/like';
import * as S from './BoothInfo.styles';
import { newlineToBr } from '@/utils/newlineToBr';

export default function BoothInfo({ id }: { id: number }) {
  return (
    <S.Container>
      <S.ImageBtnFrame>
        <S.Image />
        <LikeButton id={id} />
      </S.ImageBtnFrame>
      <S.TextSection>
        <S.TextFrame>
          <S.Text>학생회 주점</S.Text>
          <S.VerticalLine />
          <S.Text>소프트웨어융합대학</S.Text>
        </S.TextFrame>
        <S.BoothName
          dangerouslySetInnerHTML={{
            __html: newlineToBr('눈 떠보니 수데사더라\nfeat. 수리데이터사이언스학과'),
          }}
        />
      </S.TextSection>
    </S.Container>
  );
}
