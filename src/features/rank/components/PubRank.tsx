import { BOOTH_LIST } from '@/constants/booth/booth';
import * as S from './PubRank.styles';
import { RefreshButton } from '@/components/refresh-button';
import RankImageTextFrame from '@/features/rank/components/RankImageTextFrame';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function PubRank() {
  const [rankList, setRankList] = useState(BOOTH_LIST);
  const shuffleRankList = () => {
    setRankList(BOOTH_LIST);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Count>전체 {rankList.length}개</S.Count>
        <RefreshButton
          onClick={() => {
            shuffleRankList();
          }}
        />
      </S.Header>
      <S.RankList>
        <AnimatePresence>
          {rankList.map((item) => {
            return (
              <S.RankItem key={item.id} layout>
                <RankImageTextFrame
                  img={item.profileImage}
                  rank={item.id}
                  title={item.pubName}
                  organization={item.affiliation}
                  likeCount={item.id}
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
