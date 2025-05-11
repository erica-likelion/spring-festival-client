import Hanyangi from '@/assets/icons/hanyang_yeh.svg?react';
import * as S from './NowaitingResult.styles';
import { BlueButton } from '@/components/bluebuttons';
import { useNavigate } from 'react-router-dom';

export default function NoWaitingResult() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TextFrame>
        <S.Text>웨이팅하고 있는 주점이 없어요!</S.Text>
        <S.Text>주점을 더 둘러볼까요?</S.Text>
      </S.TextFrame>

      <Hanyangi />
      <BlueButton label="주점 더 둘러보기" onClick={() => navigate('/booth?step=주점 목록')} />
    </S.Container>
  );
}
