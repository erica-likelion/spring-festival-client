import * as S from './RankImageTextFrame.styles';
import { LikeButton } from '@/features/like';
import { BOOTH_LIST } from '@/constants/booth/booth';
import { useNavigate } from 'react-router-dom';

export default function RankImageTextFrame({
  id,
  likeCount,
  index,
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
  //const diff = prevRank !== undefined && currentRank !== undefined ? prevRank - currentRank : 0;
  return (
    <S.Container $first={index === 1}>
      <S.Wrapper whileTap={{ backgroundColor: '#212526' }}>
        <S.Rank>
          <S.RankNumber>{index}</S.RankNumber>
        </S.Rank>
        <S.Frame
          onClick={() => {
            navigate(`/booth/${booth.id}`);
          }}
        >
          <S.Image src={booth.profileImage} alt="" />
          <S.ContentsWrap>
            <S.Title>{booth.pubName}</S.Title>
            <S.ContentsFooter>
              <S.Organization>{booth.affiliation}</S.Organization>
            </S.ContentsFooter>
          </S.ContentsWrap>
        </S.Frame>
        <LikeButton id={id} key={id + likeCount} />
      </S.Wrapper>
    </S.Container>
  );
}
