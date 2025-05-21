import * as S from './PubRank.styles';
import { RefreshButton } from '@/components/refresh-button';
import RankImageTextFrame from '@/features/rank/components/RankImageTextFrame';
import { AnimatePresence } from 'framer-motion';
import { useLikeStore } from '@/features/like/stores/useLikeStore';

export default function PubRank() {
  const likes = useLikeStore((state) => state.likes);

  return (
    <S.Container>
      <S.Header>
        <S.Count>전체 {likes.length}개</S.Count>
        <RefreshButton onClick={() => {}} />
      </S.Header>
      <S.RankList>
        <AnimatePresence>
          {[...likes]
            .sort((a, b) => b.likeCount - a.likeCount) // 🔽 likeCount 높은 순으로 정렬
            .map((item, index) => {
              return (
                <S.RankItem key={item.id} layout>
                  <RankImageTextFrame id={item.id} index={index + 1} likeCount={item.likeCount} />
                  <S.HorizontalLine />
                </S.RankItem>
              );
            })}
        </AnimatePresence>
      </S.RankList>
    </S.Container>
  );
}
