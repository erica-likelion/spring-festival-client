import { useLayoutStore } from '@/stores/useLayoutStore';
import * as S from './LostFail.styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from '@/components/nav-bar';
import { BlueButton } from '@/components/bluebuttons';

export default function LostFail() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  return (
    <S.Container>
      <NavBar title="작성 실패" isBack={true} backPath={'/main/lost'} />
      <S.Title>분실물 등록에 실패했습니다.</S.Title>
      <S.TextBox>
        <S.Text>분실물 등록 중 문제가 발생했어요.</S.Text>
        <S.Text>잠시 후 다시 시도해 주세요.</S.Text>
      </S.TextBox>
      <BlueButton
        label="분실물 페이지로 돌아가기"
        size="larger"
        onClick={() => {
          navigate('/main/lost');
        }}
      />
    </S.Container>
  );
}
