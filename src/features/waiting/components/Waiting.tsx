import { RefreshButton } from '@/components/refresh-button';
import * as S from './Waiting.styles';
import RightIcon from '@/assets/icons/right-arrow.svg?react';
import useModal from '@/hooks/useModal';
import WaitingModal from '@/features/waiting/components/WaitingModal';
import { useRef } from 'react';

export default function Waiting() {
  const { open } = useModal(WaitingModal);
  const waitingRef = useRef<HTMLDivElement>(null);
  return (
    <S.Container ref={waitingRef}>
      <S.HeaderText>대기 현황</S.HeaderText>
      <S.HorizontalLine />
      <S.TextSection>
        <S.TextBtnFrame>
          <S.MediumText>
            실시간 웨이팅 <S.MediumText $isBlue>N</S.MediumText>팀
          </S.MediumText>
          <RefreshButton onClick={() => {}} />
        </S.TextBtnFrame>
        <S.SmallText>웨이팅 가능 시간 : 금일 00:00 ~ 00:00</S.SmallText>
      </S.TextSection>
      <S.ButtonFrame>
        <S.Button
          whileTap={{ scale: 0.9 }}
          onClick={() => open({ title: '웨이팅하기' }, { portalTarget: waitingRef.current })}
        >
          <S.MediumText>웨이팅하기</S.MediumText>
          <S.MediumText>0 / 3</S.MediumText>
          <RightIcon width={'1.5rem'} height={'1.5rem'} />
        </S.Button>
      </S.ButtonFrame>
    </S.Container>
  );
}
