import * as S from './NavBar.styles';
import SearchIcon from '@/assets/icons/search.svg?react';
import BackIcon from '@/assets/icons/nrk_chevron-left.svg?react';
import LogoIcon from '@/assets/icons/Logo_Sample.svg?react';

import { DefaultNavBarProps, SearchNavBarProps } from './NavBar.type';

/**
 * NavBar 컴포넌트
 * DefaultNavBar 컴포넌트
 * @param {boolean} isBack - 뒤로가기 버튼 표시 여부
 * @param {boolean} isSearch - 검색 아이콘 표시 여부
 * @param {string} title - 제목 텍스트
 *
 * SearchNavBar 컴포넌트
 * @param {string} placeholder - 검색창의 placeholder 텍스트
 * @param {() => void} [onChange] - 검색창 입력 이벤트 핸들러
 * @param {() => void} [onClick] - Input 내 검색 아이콘 클릭 이벤트 핸들러
 * @returns {JSX.Element} NavBar 컴포넌트(Default, Search)
 */

const handleBack = () => {
  window.history.back(); // 뒤로가기
};

const DefaultNavBar: React.FC<DefaultNavBarProps> = ({ isBack, isSearch, title }) => {
  return (
    <S.Container>
      {isBack ? (
        <BackIcon width={24} height={24} onClick={handleBack} />
      ) : (
        <LogoIcon width={82} height={52} />
      )}
      <S.Title>{title}</S.Title>
      <S.InputWrapper>
        {isSearch ? <SearchIcon width={24} height={24} /> : <S.EmptyIcon />}
      </S.InputWrapper>
    </S.Container>
  );
};

const SearchNavBar: React.FC<SearchNavBarProps> = ({ placeholder, onChange, onClick }) => {
  return (
    <S.Container>
      <BackIcon width={24} height={24} onClick={handleBack} />
      <S.InputWrapper>
        <S.Input placeholder={placeholder} autoFocus onChange={onChange} />
        <S.InputIcon>
          <SearchIcon width={24} height={24} onClick={onClick} />
        </S.InputIcon>
      </S.InputWrapper>
    </S.Container>
  );
};

export { DefaultNavBar, SearchNavBar };
