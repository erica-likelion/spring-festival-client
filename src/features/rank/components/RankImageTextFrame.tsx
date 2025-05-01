import { ImageTextFrameWithOrganization } from '@/components/image-text-frame';
import * as S from './RankImageTextFrame.styles';
import { LikeButton } from '@/features/like';

export default function RankImageTextFrame({
  rank,
  title,
  organization,
}: {
  rank: number;
  title: string;
  organization: string;
  likeCount: number;
}) {
  return (
    <S.Container $first={rank === 1}>
      <S.Wrapper>
        <S.Rank>
          <S.RankNumber>{rank}</S.RankNumber>
        </S.Rank>
        <ImageTextFrameWithOrganization
          image={''}
          title={title}
          organization={organization}
          canPickup={false}
          width="100%"
        />
        <LikeButton id={1} />
      </S.Wrapper>
    </S.Container>
  );
}
