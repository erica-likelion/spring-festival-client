import { LikeButton } from '@/features/like';
import * as S from './BoothInfo.styles';
import { newlineToBr } from '@/utils/newlineToBr';
import { BOOTH_LIST } from '@/constants/booth/booth';

export default function BoothInfo({ id }: { id: number }) {
  const booth = BOOTH_LIST.find((booth) => booth.id === id);
  if (!booth) {
    return null; // or handle the case when the booth is not found
  }
  return (
    <S.Container>
      <S.ImageBtnFrame>
        <S.Image src={booth.profileImage} />
        <LikeButton id={booth?.id} left="-0.45rem" />
      </S.ImageBtnFrame>
      <S.TextSection>
        <S.TextFrame>
          <S.Text>{booth.type}</S.Text>
          <S.VerticalLine />
          <S.Text>{booth.affiliation}</S.Text>
        </S.TextFrame>
        <S.BoothName
          dangerouslySetInnerHTML={{
            __html: newlineToBr(booth.pubName),
          }}
        />
        {booth.takeout && <S.TakeOut>포장가능</S.TakeOut>}
      </S.TextSection>
    </S.Container>
  );
}
