import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SearchPage.styles';
import { Tabs } from '@/components/tabs';
import { Chips } from '@/components/chips';
import { SearchNavBar } from '@/components/nav-bar';
import { ImageTextFrameWithTime } from '@/components/image-text-frame';
import { SearchHistoryItem } from '@/types/search-history.types';
import { MAP_SEARCH_HISTORY_KEY, MAX_SEARCH_HISTORY, RECOMMENDED_WORDS } from '@/constants/search';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { MapData, MapDataItem } from '@/constants/map/MapData';
import { useDebounce } from '@/hooks/useDebounce';
import {
  loadSearchHistory,
  addSearchHistory,
  removeSearchHistory,
} from '@/utils/searchHistoryUtils';

export default function MapSearch() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [searchResults, setSearchResults] = useState<MapDataItem[]>([]);
  const debouncedSearchTerm = useDebounce(searchKeyword, 300);

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

  // 디바운스된 검색어로 검색 실행
  useEffect(() => {
    if (debouncedSearchTerm) {
      const results: MapDataItem[] = [];

      // 모든 카테고리의 아이템을 검색
      Object.values(MapData).forEach((items) => {
        items.forEach((item) => {
          if (
            item.title.includes(debouncedSearchTerm) ||
            (item.subtitle && item.subtitle.includes(debouncedSearchTerm))
          ) {
            results.push(item);
          }
        });
      });

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

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
    // 검색 버튼을 누르면 검색어가 저장됨
  };

  const handleResultClick = useCallback(
    (item: MapDataItem) => {
      if (item.id) {
        navigate(`/map/${item.id}`, { replace: true });
      }
    },
    [navigate],
  );

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
      {searchKeyword ? (
        <S.SearchResultsContainer>
          {searchResults.map((item, index) => (
            <React.Fragment key={item.id}>
              <ImageTextFrameWithTime
                image={item.image}
                title={item.title}
                subtitle={item.subtitle || ''}
                time={item.time}
                onClick={() => handleResultClick(item)}
              />
              {index < searchResults.length - 1 && <S.Divider />}
            </React.Fragment>
          ))}
        </S.SearchResultsContainer>
      ) : (
        <>
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
        </>
      )}
    </S.SearchPageContainer>
  );
}
