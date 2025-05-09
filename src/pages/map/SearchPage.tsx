import React, { useState, useEffect } from 'react';
import * as S from './SearchPage.styles';
import { Tabs } from '@/components/tabs';
import { Chips } from '@/components/chips';
import { SearchNavBar } from '@/components/nav-bar';
import { SearchHistoryItem } from '@/types/search-history.types';
import { MAP_SEARCH_HISTORY_KEY, MAX_SEARCH_HISTORY, RECOMMENDED_WORDS } from '@/constants/search';
import { useLayoutStore } from '@/stores/useLayoutStore';
import {
  loadSearchHistory,
  addSearchHistory,
  removeSearchHistory,
} from '@/utils/searchHistoryUtils';

export default function MapSearch() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  // 검색 기록을 로컬 스토리지에서 불러오기
  useEffect(() => {
    setSearchHistory(loadSearchHistory(MAP_SEARCH_HISTORY_KEY));
  }, []);

  // 내비바 숨기기 및 언마운트 시 내비바 보이기
  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (!searchKeyword.trim()) return;

    const newHistory = addSearchHistory(
      searchKeyword,
      searchHistory,
      MAP_SEARCH_HISTORY_KEY,
      MAX_SEARCH_HISTORY,
    );

    setSearchHistory(newHistory);

    // 검색 로직 실행( TODO: 나중에 구현 )
    console.log('검색어:', searchKeyword);

    // 검색 후 입력 필드 초기화
    setSearchKeyword('');
  };

  // 검색 기록 항목 클릭시 처리
  const handleHistoryItemClick = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const handleHistoryItemClose = (keyword: string) => {
    // 검색 기록에서 해당 항목을 제거
    const updatedHistory = removeSearchHistory(keyword, searchHistory, MAP_SEARCH_HISTORY_KEY);
    setSearchHistory(updatedHistory);
  };

  return (
    <S.SearchPageContainer>
      <SearchNavBar
        placeholder="궁금한 것을 검색해보세요!"
        onChange={handleInputChange}
        onClick={handleSearch}
        value={searchKeyword}
      />
      <S.RecentSearchSection>
        <S.RecentSearchHeader>최근 검색어</S.RecentSearchHeader>
        {searchHistory.length > 0 ? (
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
      <S.RecommendedSearchSection>
        <S.RecommendedSearchHeader>추천 검색어</S.RecommendedSearchHeader>
        <Tabs
          tabs={[...RECOMMENDED_WORDS]}
          activeTab=""
          onTabClick={(tab) => handleHistoryItemClick(tab)}
          autoWidth={true}
          margin="1.25rem"
        />
      </S.RecommendedSearchSection>
    </S.SearchPageContainer>
  );
}
