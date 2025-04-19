import * as S from './NavBar.styles';
import SearchIcon from '@/assets/icons/search.svg?react';
import BackIcon from '@/assets/icons/nrk_chevron-left.svg?react';
import LogoIcon from '@/assets/icons/Logo_Sample.svg?react';

import { NavBarProps } from './NavBar.type';
import { useState } from 'react';

/**
 * NavBar 컴포넌트
 * @param {boolean} isBack - 뒤로가기 버튼 표시 여부
 * @param {boolean} isSearch - 검색 아이콘 표시 여부
 * @param {string} title - 제목 텍스트
 * @param {string} placeholder - 검색창의 placeholder 텍스트
 * @param {() => void} [onChange] - 검색창 입력 이벤트 핸들러
 * @param {() => void} [onClick] - Input 내 검색 아이콘 클릭 이벤트 핸들러
 * @returns {JSX.Element} NavBar 컴포넌트
 */

const NavBar: React.FC<NavBarProps> = ({
  isBack,
  isSearch,
  title,
  placeholder,
  onChange,
  onClick,
}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const handleBack = () => {
    window.history.back();
  };
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 방지
  };

  const closeSearchInput = () => {
    setIsInputVisible(false); // 검색창 외부 클릭 시 input창 숨김
  };

  const openSearchInput = () => {
    setIsInputVisible(true); // 검색 아이콘 클릭시 input창 생성
  };

  return (
    <S.Container onClick={closeSearchInput}>
      {isBack ? (
        <BackIcon width={24} height={24} onClick={handleBack} />
      ) : (
        <LogoIcon width={82} height={52} />
      )}
      {!isInputVisible && <S.Title>{title}</S.Title>}
      {isSearch && (
        <S.InputWrapper onClick={stopPropagation}>
          {isInputVisible ? (
            <>
              <S.Input placeholder={placeholder} autoFocus onChange={onChange} />
              <S.InputIcon>
                <SearchIcon width={24} height={24} onClick={onClick} />
              </S.InputIcon>
            </>
          ) : (
            <SearchIcon width={24} height={24} onClick={openSearchInput} />
          )}
        </S.InputWrapper>
      )}
    </S.Container>
  );
};
export default NavBar;
