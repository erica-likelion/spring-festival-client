import * as S from './NavBar.styles';
import SearchIcon from '@/assets/icons/search.svg?react';
import BackIcon from '@/assets/icons/left-arrow.svg?react';
import LogoIcon from '@/assets/icons/Logo_Sample.svg?react';

import { DefaultNavBarProps, SearchNavBarProps } from './NavBar.type';
import { useNavigate } from 'react-router-dom';

/**
 * DefaultNavBar 컴포넌트
 * @param {boolean} isBack - 뒤로가기 버튼 표시 여부
 * @param {boolean} isSearch - 검색 아이콘 표시 여부
 * @param {string} title - 제목 텍스트
 * @returns {JSX.Element} DefaultNavBar 컴포넌트
 * @example
 *
 * <DefaultNavBar isBack={true} title="Page" isSearch={true}/>
 * />
 */

const DefaultNavBar: React.FC<DefaultNavBarProps> = ({ isBack, isSearch, title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 뒤로가기
  };
  return (
    <S.Container>
      {isBack ? (
        <BackIcon width={24} height={24} onClick={handleBack} />
      ) : (
        <LogoIcon width={82} height={52} />
      )}
      <S.Title>{title}</S.Title>

      {isSearch ? <SearchIcon width={24} height={24} /> : <S.EmptyIcon />}
    </S.Container>
  );
};

/**
 * SearchNavBar 컴포넌트
 * @param {string} placeholder - 검색창의 placeholder 텍스트
 * @param {() => void} [onChange] - 검색창 입력 이벤트 핸들러
 * @param {() => void} [onClick] - Input 내 검색 아이콘 클릭 이벤트 핸들러
 * @returns {JSX.Element} SearchNavBar 컴포넌트
 * @example
    <SearchNavBar onClick={onClick} placeholder="Text" onChange={onChange} />
 * 
 */
const SearchNavBar: React.FC<SearchNavBarProps> = ({ placeholder, onChange, onClick }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <S.Container>
      <BackIcon width={24} height={24} onClick={handleBack} />
      <S.InputWrapper>
        <S.Input placeholder={placeholder} onChange={onChange} />
        <S.InputIcon>
          <SearchIcon width={24} height={24} onClick={onClick} />
        </S.InputIcon>
      </S.InputWrapper>
    </S.Container>
  );
};

export { DefaultNavBar, SearchNavBar };
