import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SearchPage.styles';
import { Tabs } from '@/components/tabs';
import { SearchNavBar } from '@/components/nav-bar';
import { ImageTextFrameWithTime } from '@/components/image-text-frame';
import { RECOMMENDED_WORDS } from '@/constants/search';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { MapData, MapDataItem } from '@/constants/map/MapData';
import { useDebounce } from '@/hooks/useDebounce';

export default function MapSearch() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<MapDataItem[]>([]);
  const debouncedSearchTerm = useDebounce(searchKeyword, 300);

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

  const handleResultClick = useCallback(
    (item: MapDataItem) => {
      if (item.id) {
        navigate(`/map/${item.id}`, { replace: true });
      }
    },
    [navigate],
  );

  // 추천 항목 클릭시 처리
  const handleRecommendedClick = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <S.SearchPageContainer>
      <SearchNavBar
        placeholder="궁금한 것을 검색해보세요!"
        onChange={handleInputChange}
        value={searchKeyword}
        backPath={`/map`} // 항상 지도로 돌아가도록 설정
      />
      {searchKeyword ? (
        searchResults.length > 0 ? (
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
          <S.NoSearchDataSection>
            <h3>검색 결과가 없어요 T.T</h3>
            <h4>지도에서 찾고 싶은 검색어의 키워드가 정확한지</h4>
            <h4>다시 한 번 확인해주세요!</h4>
          </S.NoSearchDataSection>
        )
      ) : (
        <>
          <S.RecommendedSearchSection>
            <S.RecommendedSearchHeader>추천 검색어</S.RecommendedSearchHeader>
            <Tabs
              tabs={[...RECOMMENDED_WORDS]}
              activeTab=""
              onTabClick={(tab) => handleRecommendedClick(tab)}
              autoWidth={true}
              margin="1.25rem"
            />
          </S.RecommendedSearchSection>
        </>
      )}
    </S.SearchPageContainer>
  );
}
