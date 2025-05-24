import * as S from './LostSearch.styles';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect, useState } from 'react';
import { SearchNavBar } from '@/components/nav-bar';
import { LostItem } from '@/features/lost/components/main/ItemList.types';
import { ItemCard, NoResultMessage, SkeletonCard } from '@/features/lost';
import axios from 'axios';
import { Tabs } from '@/components/tabs';

export default function LostSearch() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredItems, setFilteredItems] = useState<LostItem[]>([]);
  const [step, setStep] = useState<'input' | 'result'>('input');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  useEffect(() => {
    if (searchKeyword.trim() === '') {
      setStep('input');
    }
  }, [searchKeyword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchWithKeyword = async (keyword: string) => {
    if (!keyword.trim()) return;
    setLoading(true);
    setStep('result');

    try {
      const res = await axios.get<LostItem[]>(
        `${import.meta.env.VITE_API_BASE_URL}/api/lost-items?name=${encodeURIComponent(keyword)}`,
      );
      setFilteredItems(res.data);
    } catch (error) {
      console.error('검색 중 API 호출 실패:', error);
      setFilteredItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    handleSearchWithKeyword(searchKeyword);
  };

  const handleHistoryItemClick = (keyword: string) => {
    setSearchKeyword(keyword);
    handleSearchWithKeyword(keyword);
  }; //추천 검색어 눌렀을 때 자동으로 클릭 되게

  return (
    <S.SearchPageContainer>
      <SearchNavBar
        placeholder="잃어버린 물건을 찾아볼까요?"
        onChange={handleInputChange}
        onClick={handleSearch}
        value={searchKeyword}
      />
      {step === 'input' ? (
        <S.AnimatedSection
          key="input"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <S.RecentSearchSection>
            <S.RecentSearchHeader>추천 검색어</S.RecentSearchHeader>
            <S.HistoryItemsContainer>
              <Tabs
                tabs={[
                  '우산',
                  '핸드폰',
                  '지갑',
                  '에어팟',
                  '카드',
                  '신분증',
                  '가방',
                  '노트북',
                  '안경',
                ]}
                activeTab=""
                onTabClick={(tab) => handleHistoryItemClick(tab)}
                autoWidth={true}
                margin="1.25rem"
              />
            </S.HistoryItemsContainer>
          </S.RecentSearchSection>
        </S.AnimatedSection>
      ) : (
        <S.AnimatedSection
          key="result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <S.ResultSection>
            {loading ? (
              <S.GridList>
                <SkeletonCard />
                <SkeletonCard />
              </S.GridList>
            ) : filteredItems.length === 0 ? (
              <NoResultMessage />
            ) : (
              <S.GridList>
                {filteredItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </S.GridList>
            )}
          </S.ResultSection>
        </S.AnimatedSection>
      )}
    </S.SearchPageContainer>
  );
}
