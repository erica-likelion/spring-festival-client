import { ImageTextFrameWithOrganization } from '@/components/image-text-frame';
import * as S from './RankImageTextFrame.styles';
import HeartIcon from '@/assets/icons/heart.svg?react';

export default function RankImageTextFrame({
  rank,
  title,
  organization,
  likeCount,
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
        <S.Like>
          <HeartIcon width={'1.25rem'} height={'1.25rem'} />
          <S.LikeCount>{likeCount}</S.LikeCount>
        </S.Like>
      </S.Wrapper>
    </S.Container>
  );
}
