import { useLayoutStore } from '@/stores/useLayoutStore';
import * as S from './LostFail.styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from '@/components/nav-bar';
import { BlueButton } from '@/components/bluebuttons';
import SorryHanYang from '@/assets/icons/hanyang_sorry.svg?react';
import { Description } from '@/features/lost';

export default function LostFail() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  return (
    <S.Container>
      <NavBar title="작성 오류...삐빅..." isBack={true} backPath={'/main/lost'} />
      <S.Title>앗 이런! 분실물이 등록되지 않았어요!</S.Title>
      <SorryHanYang width={'16.25rem'} height={'16.25rem'} />
      <S.TextBox>
        <S.Text>당신의 작은 도움이 누군가에게 큰 도움이 될 거예요.</S.Text>
        <S.Text>다시 정보를 등록하러 가볼까요?</S.Text>
      </S.TextBox>
      <S.ButtonBox>
        <Description
          text="* HyLight 웹앱은 분실물 회수를 원활하게 돕기 위해 정보를 제공하고 
      있으며, 분실물의 보관이나 수령과 관련된 책임은 지지 않습니다."
        />
        <BlueButton
          label="분실물 페이지로 돌아가기"
          size="larger"
          onClick={() => {
            navigate('/main/lost');
          }}
        />
      </S.ButtonBox>
    </S.Container>
  );
}
