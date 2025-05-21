import { ImageTextFrameWithOrganization } from '@/components/image-text-frame';
import * as S from './RankImageTextFrame.styles';
import { LikeButton } from '@/features/like';
import { BOOTH_LIST } from '@/constants/booth/booth';
import ArrowIcon from '@/assets/icons/nrk_arrow-dropdown.svg?react';
import { useNavigate } from 'react-router-dom';

export default function RankImageTextFrame({
  id,
  likeCount,
  index,
  prevRank,
  currentRank,
}: {
  id: number;
  likeCount: number;
  index: number;
  prevRank?: number;
  currentRank?: number;
}) {
  const booth = BOOTH_LIST.find((booth) => booth.id === id);
  const navigate = useNavigate();
  if (!booth) {
    return null; // or handle the case when the booth is not found
  }
  const diff = prevRank !== undefined && currentRank !== undefined ? prevRank - currentRank : 0;
  return (
    <S.Container $first={index === 1}>
      <S.Wrapper>
        <S.Rank>
          <S.RankNumber>{index}</S.RankNumber>
          {diff === 0 ? (
            <S.RankFrame>
              <S.DrawText>-</S.DrawText>
            </S.RankFrame>
          ) : (
            <S.RankFrame>
              <ArrowIcon
                width="0.75rem"
                height="0.75rem"
                fill={diff > 0 ? '#45E02A' : '#F55353'}
                style={diff > 0 ? { rotate: '0deg' } : { rotate: '180deg' }}
              />
              {diff > 0 ? <S.UpText>{diff}</S.UpText> : <S.DownText>{Math.abs(diff)}</S.DownText>}
            </S.RankFrame>
          )}
        </S.Rank>
        <ImageTextFrameWithOrganization
          image={booth.profileImage}
          title={booth.pubName}
          organization={booth.affiliation}
          canPickup={false}
          width="100%"
          onClick={() => {
            navigate(`/booth/${booth.id}`);
          }}
        />
        <LikeButton id={id} key={id + likeCount} />
      </S.Wrapper>
    </S.Container>
  );
}
