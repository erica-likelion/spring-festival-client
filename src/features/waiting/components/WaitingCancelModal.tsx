import { useWaitingStore } from '@/features/waiting/stores/useWaitingStore';
import * as S from './WaitingCancelModal.styles';
import { BlueButton } from '@/components/bluebuttons';
import { useFunnel } from '@/hooks/useFunnel';
import { useModalStore } from '@/stores/useModalStore';
import { useSearchParams } from 'react-router-dom';

const step = ['confirm', 'complete'] as const;
type StepType = (typeof step)[number];

export default function WaitingCancelModal({ id, pubId }: { id: number; pubId: number }) {
  const { Funnel, setStep } = useFunnel(step);
  return (
    <>
      <Funnel>
        <Funnel.Step name={step[0]}>
          <ConfirmStep setStep={setStep} id={id} pubId={pubId} />
        </Funnel.Step>
        <Funnel.Step name={step[1]}>
          <CompleteStep />
        </Funnel.Step>
      </Funnel>
    </>
  );
}

const ConfirmStep = ({
  setStep,
  id,
  pubId,
}: {
  setStep: (step: StepType) => void;
  id: number;
  pubId: number;
}) => {
  const deleteWaiting = useWaitingStore((state) => state.deleteWaiting);
  console.log(id);
  const handleNext = async () => {
    await deleteWaiting(id, pubId);
    setStep(step[1]);
  };
  return (
    <S.Container>
      <S.HeaderText>웨이팅 취소를 원하시는가요?</S.HeaderText>
      <S.TextFrame>
        <S.MediumText>기다림에 아쉬움이 남지 않으신가요?</S.MediumText>
        <S.MediumText>조금 더 고민해보시는 것도 좋은 방법이에요.</S.MediumText>
      </S.TextFrame>
      <BlueButton onClick={handleNext} label="그래도 취소할래요" />
    </S.Container>
  );
};

const CompleteStep = () => {
  const clearModal = useModalStore((state) => state.clearModals);
  const [, setParams] = useSearchParams();
  const handleComplete = () => {
    setParams({});
    clearModal();
  };
  return (
    <S.Container>
      <S.HeaderText>웨이팅이 취소되었습니다.</S.HeaderText>
      <S.TextFrame>
        <S.MediumText>웨이팅이 취소되었습니다.</S.MediumText>
        <S.MediumText>2025 ESPERO:HYLIGHT에서 즐거운 시간 보내세요!</S.MediumText>
      </S.TextFrame>
      <BlueButton label="확인" onClick={handleComplete} />
    </S.Container>
  );
};
