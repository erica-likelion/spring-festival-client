import { BlueButton } from '@/components/bluebuttons';
import { NavBar } from '@/components/nav-bar';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';
import HanyangImg from '@/assets/icons/hanyang_v4.svg?react';
import { Description } from '@/features/lost';
import * as S from './LostComplete.styles';

/**
 * 분실물 등록 완료 페이지
 * @returns {JSX.Element}
 */

export default function LostComplete() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  return (
    <S.Container>
      <NavBar title="작성 완료" isBack={true} backPath={'/main/lost'} />
      <S.Title>분실물 등록이 완료되었습니다.</S.Title>
      <HanyangImg width={'16.25rem'} height={'16.25rem'} />
      <S.TextBox>
        <S.Text>정보를 등록해주셔서 감사합니다.</S.Text>
        <S.Text>당신의 작은 도움이 누군가에게 큰 도움이 될 거예요.</S.Text>
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
