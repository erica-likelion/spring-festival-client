import React, { useState, useEffect } from 'react';
import * as S from './SearchPage.styles';
import { Tabs } from '@/components/tabs';
import { Chips } from '@/components/chips';
import { SearchNavBar } from '@/components/nav-bar';
import { SearchHistoryItem } from '@/types/search-history.types';
import {
  MAP_SEARCH_HISTORY_KEY,
  MAX_SEARCH_HISTORY,
  RECOMMENDED_SEARCH_WORDS,
} from '@/constants/search';
import { useLayoutStore } from '@/stores/useLayoutStore';

export default function MapSearch() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem(MAP_SEARCH_HISTORY_KEY);
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('검색 기록을 불러우는 중 오류가 발생했습니다', e);
        localStorage.removeItem(MAP_SEARCH_HISTORY_KEY);
      }
    }
  }, []);

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

    // 새 검색 기록 생성
    const newHistoryItem: SearchHistoryItem = {
      id: Date.now().toString(),
      keyword: searchKeyword.trim(),
      timeStamp: Date.now(),
    };

    // 중복 검색어 제거 및 최근 검색어를 맨 앞으로 배치
    const filteredHistory = searchHistory.filter((item) => item.keyword !== newHistoryItem.keyword);

    const newHistory = [newHistoryItem, ...filteredHistory].slice(0, MAX_SEARCH_HISTORY);

    // 상태 및 로컬 스토리지 업데이트
    setSearchHistory(newHistory);
    localStorage.setItem(MAP_SEARCH_HISTORY_KEY, JSON.stringify(newHistory));

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
    const updatedHistory = searchHistory.filter((item) => item.keyword !== keyword);
    setSearchHistory(updatedHistory);
    localStorage.setItem(MAP_SEARCH_HISTORY_KEY, JSON.stringify(updatedHistory));
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
          tabs={[...RECOMMENDED_SEARCH_WORDS]}
          activeTab=""
          onTabClick={(tab) => handleHistoryItemClick(tab)}
          autoWidth={true}
          margin="1.25rem"
        />
      </S.RecommendedSearchSection>
    </S.SearchPageContainer>
  );
}
