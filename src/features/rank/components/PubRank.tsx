import * as S from './PubRank.styles';
import { RefreshButton } from '@/components/refresh-button';
import RankImageTextFrame from '@/features/rank/components/RankImageTextFrame';
import { AnimatePresence } from 'framer-motion';
import { useLikeStore } from '@/features/like/stores/useLikeStore';
import { getLikes, postLikes } from '@/services/like/like';

export default function PubRank() {
  const likes = useLikeStore((state) => state.likes);
  const fetchLikes = useLikeStore((state) => state.fetchLikes);
  const getUpdatedLikes = useLikeStore((state) => state.getUpdatedLikes);
  const resetUpdateCounts = useLikeStore((state) => state.resetUpdateCounts);
  const handleRefresh = async () => {
    const updates = await getUpdatedLikes();
    await resetUpdateCounts();
    const response = updates.length > 0 ? await postLikes(updates) : await getLikes();
    if (response.data) {
      await fetchLikes(response.data);
    }
  };
  return (
    <S.Container>
      <S.Header>
        <S.Count>전체 {likes.length}개</S.Count>
        <RefreshButton onClick={handleRefresh} />
      </S.Header>
      <S.RankList>
        <AnimatePresence>
          {[...likes]
            .sort((a, b) => {
              if (b.likeCount !== a.likeCount) {
                return b.likeCount - a.likeCount;
              }
              return a.id - b.id;
            })
            .map((item, index) => {
              return (
                <S.RankItem key={item.id} layout>
                  <RankImageTextFrame
                    id={item.id}
                    index={index + 1}
                    likeCount={item.likeCount}
                    prevRank={item.prevRank}
                    currentRank={item.currentRank}
                  />
                  <S.HorizontalLine />
                </S.RankItem>
              );
            })}
        </AnimatePresence>
      </S.RankList>
    </S.Container>
  );
}
