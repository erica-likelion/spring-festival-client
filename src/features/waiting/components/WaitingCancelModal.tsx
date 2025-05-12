import * as S from './WaitingCancelModal.styles';
import { BlueButton } from '@/components/bluebuttons';
import { useFunnel } from '@/hooks/useFunnel';
import { useModalStore } from '@/stores/useModalStore';

const step = ['confirm', 'complete'] as const;
type StepType = (typeof step)[number];

export default function WaitingCancelModal() {
  const { Funnel, setStep } = useFunnel(step);
  return (
    <>
      <Funnel>
        <Funnel.Step name={step[0]}>
          <ConfirmStep setStep={setStep} />
        </Funnel.Step>
        <Funnel.Step name={step[1]}>
          <CompleteStep />
        </Funnel.Step>
      </Funnel>
    </>
  );
}

const ConfirmStep = (setStep: { setStep: (step: StepType) => void }) => {
  const handleNext = () => {
    setStep.setStep(step[1]);
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
  return (
    <S.Container>
      <S.HeaderText>웨이팅이 취소되었습니다.</S.HeaderText>
      <S.TextFrame>
        <S.MediumText>웨이팅이 취소되었습니다.</S.MediumText>
        <S.MediumText>2025 ESPERO:HYLIGHT에서 즐거운 시간 보내세요!</S.MediumText>
      </S.TextFrame>
      <BlueButton label="확인" onClick={clearModal} />
    </S.Container>
  );
};
