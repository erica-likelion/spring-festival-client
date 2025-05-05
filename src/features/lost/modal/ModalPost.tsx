import { useState } from 'react';
import * as S from './ModalPost.styles';
import UnCheckIcon from '@/assets/icons/check_gy400.svg?react';
import CheckIcon from '@/assets/icons/check_black.svg?react';

/**
 * Modal_Post 컴포넌트
 * @returns {JSX.Element}
 */

export default function ModalPost() {
  const [checked, setChecked] = useState([false, false, false]);

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const allChecked = checked.every(Boolean);

  const texts = [
    '주변에 가까운 스태프를 보지 못했나요?  (만약 있다면 스태프에게 전달해주세요!)',
    '귀중품의 경우엔 되도록 주변의 가까운  스태프에게 전달해주세요!',
    '이미지에 민감한 개인정보가 포함되어  있다면 가려서 업로드해주세요!',
  ];

  return (
    <S.ModalContainer>
      <S.TextWrap>
        {texts.map((text, index) => (
          <S.TextBox key={index}>
            <S.Text dangerouslySetInnerHTML={{ __html: text.replace('  ', '<br />') }} />
            <S.Icon $checked={checked[index]} onClick={() => toggleCheck(index)}>
              {checked[index] ? (
                <CheckIcon width="0.9536rem" height="0.6922rem" />
              ) : (
                <UnCheckIcon width="0.9536rem" height="0.6922rem" />
              )}
            </S.Icon>
          </S.TextBox>
        ))}
      </S.TextWrap>
      <S.Button
        disabled={!allChecked}
        $active={allChecked}
        onClick={() => {
          if (allChecked) {
            window.location.href = '/main/lost/upload';
          }
        }}
      >
        <S.ButtonText>등록하러 가기</S.ButtonText>
      </S.Button>
    </S.ModalContainer>
  );
}
