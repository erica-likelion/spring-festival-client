import * as S from './NavBar.styles';
import SearchIcon from '@/assets/icons/search.svg?react';
import BackIcon from '@/assets/icons/left-arrow.svg?react';
import LogoIcon from '@/assets/icons/Logo_Sample.svg?react';

import { NavBarProps, SearchNavBarProps } from './NavBar.types';
import { useNavigate } from 'react-router-dom';

/**
 * NavBar 컴포넌트
 * @param {boolean} isBack - 뒤로가기 버튼 표시 여부
 * @param {boolean} isSearch - 검색 아이콘 표시 여부
 * @param {string} title - 제목 텍스트
 * @param {() => void} [onSearchClick] - 검색 아이콘 클릭 이벤트 핸들러
 * @param {string | number} [backPath] - 뒤로가기 경로
 * @returns {JSX.Element} NavBar 컴포넌트
 * @example
 *
 * <NavBar isBack={true} title="Page" isSearch={true}/>
 * />
 */

const NavBar: React.FC<NavBarProps> = ({
  isBack = false,
  isSearch = false,
  title,
  onSearchClick,
  backPath = -1,
  opacity = false,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (typeof backPath === 'number') {
      navigate(backPath);
    } else if (typeof backPath === 'string') {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Container $opacity={opacity}>
      <S.LeftSection>
        {isBack ? (
          <BackIcon
            style={{ cursor: 'pointer' }}
            width={'1.5rem'}
            height={'1.5rem'}
            onClick={handleBack}
          />
        ) : (
          <LogoIcon width={'5.125rem'} height={'3.25rem'} />
        )}
      </S.LeftSection>

      {title && <S.Title>{title}</S.Title>}
      <S.RightSection>
        {isSearch && (
          <SearchIcon
            style={{ cursor: 'pointer' }}
            width={'1.5rem'}
            height={'1.5rem'}
            onClick={onSearchClick}
          />
        )}
      </S.RightSection>
    </S.Container>
  );
};

/**
 * SearchNavBar 컴포넌트
 * @param {string} placeholder - 검색창의 placeholder 텍스트
 * @param {(React.ChangeEvent<HTMLInputElement>) => void} [onChange] - 검색창 입력 이벤트 핸들러
 * @param {() => void} [onClick] - Input 내 검색 아이콘 클릭 이벤트 핸들러
 * @param {string} [value] - 검색창의 입력값
 * @param {string | number} [backPath] - 뒤로가기 경로
 * @returns {JSX.Element} SearchNavBar 컴포넌트
 * @example
    <SearchNavBar onClick={onClick} placeholder="Text" onChange={onChange} />
 * 
 */
const SearchNavBar: React.FC<SearchNavBarProps> = ({
  placeholder,
  onChange,
  onClick,
  value,
  backPath = -1,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (typeof backPath === 'number') {
      navigate(backPath);
    } else if (typeof backPath === 'string') {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Container style={{ gap: '0.75rem' }}>
      <BackIcon width={'1.5rem'} height={'1.5rem'} onClick={handleBack} />
      <S.SearchWrapper htmlFor="search">
        <input id="search" placeholder={placeholder} onChange={onChange} value={value || ''} />
        <S.Btn whileTap={{ scale: 0.92, backgroundColor: '#212526' }}>
          <SearchIcon width={'1.5rem'} height={'1.5rem'} onClick={onClick} />
        </S.Btn>
      </S.SearchWrapper>
    </S.Container>
  );
};

export { NavBar, SearchNavBar };
