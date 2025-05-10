import { useState } from 'react';
import * as S from './ModalPost.styles';
import CheckIcon from '@/assets/icons/check.svg?react';
import { BlueButton } from '@/components/bluebuttons';
import { theme } from '@/styles/theme';

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

  const handleLink = () => {
    if (allChecked) {
      window.location.href = '/main/lost/upload';
    }
  };

  return (
    <S.ModalContainer>
      <S.TextWrap>
        {texts.map((text, index) => (
          <S.TextBox key={index}>
            <S.Text dangerouslySetInnerHTML={{ __html: text.replace('  ', '<br />') }} />
            <S.Icon
              $checked={checked[index]}
              onClick={() => toggleCheck(index)}
              style={{
                color: checked[index] ? theme.colors.grayScale.black : theme.colors.grayScale.gy400,
              }}
            >
              <CheckIcon width="0.9536rem" height="0.6922rem" />
            </S.Icon>
          </S.TextBox>
        ))}
      </S.TextWrap>
      <BlueButton
        label="등록하러 가기"
        size="large"
        disabled={!allChecked}
        onClick={() => handleLink()}
      />
    </S.ModalContainer>
  );
}
