import * as S from './Registration.styles';
import PlusIcon from '@/assets/icons/plus_white.svg?react';

export default function Registration() {
  return (
    <S.Container>
      <S.Button>
        <S.IconTextWrap>
          <S.Icon>
            <PlusIcon width={'1.5rem'} height={'1.5rem'} />
          </S.Icon>
          <S.ButtonText>분실물 등록하기</S.ButtonText>
        </S.IconTextWrap>
      </S.Button>
      <S.Text>* 분실물을 습득하셨다면 주변의 가까운 스태프에게 먼저 전달해주세요!</S.Text>
    </S.Container>
  );
}
