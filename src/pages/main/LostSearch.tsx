import * as S from './LostSearch.styles';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect, useState } from 'react';
import { SearchNavBar } from '@/components/nav-bar';
import { Chips } from '@/components/chips';
import { SearchHistoryItem } from '@/types/search-history.types';
import {
  addSearchHistory,
  loadSearchHistory,
  removeSearchHistory,
} from '@/utils/searchHistoryUtils';
import { LOST_SEARCH_HISTORY_KEY, MAX_SEARCH_HISTORY } from '@/constants/search';
import { useNavigate } from 'react-router-dom';

export default function LostSearch() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const loginStatus: number = 0; // 0: 로그아웃, 1: 로그인

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  useEffect(() => {
    if (loginStatus === 1) {
      setSearchHistory(loadSearchHistory(LOST_SEARCH_HISTORY_KEY));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const handleSearch = () => {
    if (!searchKeyword.trim()) return;

    const newHistory = addSearchHistory(
      searchKeyword,
      searchHistory,
      LOST_SEARCH_HISTORY_KEY,
      MAX_SEARCH_HISTORY,
    );

    setSearchHistory(newHistory);

    setSearchKeyword('');
  };

  const handleHistoryItemClick = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const handleHistoryItemClose = (keyword: string) => {
    const updatedHistory = removeSearchHistory(keyword, searchHistory, LOST_SEARCH_HISTORY_KEY);
    setSearchHistory(updatedHistory);
  };

  return (
    <S.SearchPageContainer>
      <SearchNavBar
        placeholder="잃어버린 물건을 찾아볼까요?"
        onChange={handleInputChange}
        onClick={handleSearch}
        value={searchKeyword}
      />
      <S.RecentSearchSection>
        <S.RecentSearchHeader>최근 검색어</S.RecentSearchHeader>
        {loginStatus === 0 ? (
          <S.LoginInfoBox>
            <S.LoginInfoText>최근 검색어를 확인하려면 로그인해주세요!</S.LoginInfoText>
            <S.LoginInfoButton onClick={() => navigate('/login')}>
              로그인 하러가기
            </S.LoginInfoButton>
          </S.LoginInfoBox>
        ) : searchHistory.length > 0 ? (
          <S.HistoryItemsContainer>
            <Chips
              chips={searchHistory.map((item) => {
                return item.keyword;
              })}
              onChipClick={handleHistoryItemClick}
              onChipClose={handleHistoryItemClose}
              margin="1.25rem"
            />
          </S.HistoryItemsContainer>
        ) : (
          <S.EmptyHistoryMessage>최근 검색 내역이 없습니다.</S.EmptyHistoryMessage>
        )}
      </S.RecentSearchSection>
    </S.SearchPageContainer>
  );
}
