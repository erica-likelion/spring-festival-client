import { ImageTextFrameWithOrganization } from '@/components/image-text-frame';
import * as S from './RankImageTextFrame.styles';
import { LikeButton } from '@/features/like';
import { BOOTH_LIST } from '@/constants/booth/booth';

export default function RankImageTextFrame({
  id,
  likeCount,
  index,
}: {
  id: number;
  likeCount: number;
  index: number;
}) {
  const booth = BOOTH_LIST.find((booth) => booth.id === id);
  if (!booth) {
    return null; // or handle the case when the booth is not found
  }
  return (
    <S.Container $first={index === 1}>
      <S.Wrapper>
        <S.Rank>
          <S.RankNumber>{index}</S.RankNumber>
        </S.Rank>
        <ImageTextFrameWithOrganization
          image={booth.profileImage}
          title={booth.pubName}
          organization={booth.affiliation}
          canPickup={false}
          width="100%"
        />
        <LikeButton id={id} like={Number(likeCount)} />
      </S.Wrapper>
    </S.Container>
  );
}
