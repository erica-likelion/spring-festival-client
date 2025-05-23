import { InputStepper } from '@/components/input-stepper';
import { useFunnel } from '@/hooks/useFunnel';
import { useEffect, useState } from 'react';
import { useModalStore } from '@/stores/useModalStore';
import * as S from './WaitingModal.styles';
import { BlueButton } from '@/components/bluebuttons';
import { postWaiting } from '@/services/waiting/waiting';
import { useWaitingStore } from '@/features/waiting/stores/useWaitingStore';
import { useNavigate } from 'react-router-dom';
import { handleAllowNotification } from '@/services/fcm/notificationPermission';

const STEPS = ['people', 'phone', 'complete'] as const;

type WaitingForm = {
  people: number;
  phone: string;
};

export default function WaitingModal({ id }: { id: number }) {
  const [waitingForm, setWaitingForm] = useState<WaitingForm>({
    people: 0,
    phone: '',
  });
  const { Funnel, setStep } = useFunnel(STEPS);

  return (
    <Funnel>
      <Funnel.Step name={STEPS[0]}>
        <PeopleStep setWaitingForm={setWaitingForm} setStep={setStep} />
      </Funnel.Step>
      <Funnel.Step name={STEPS[1]}>
        <PhoneStep waitingForm={waitingForm} setWaitingForm={setWaitingForm} setStep={setStep} />
      </Funnel.Step>
      <Funnel.Step name={STEPS[2]}>
        <CompleteStep
          people={waitingForm.people}
          setStep={setStep}
          id={id}
          phone={waitingForm.phone}
        />
      </Funnel.Step>
    </Funnel>
  );
}

const PeopleStep = ({
  setWaitingForm,
  setStep,
}: {
  setWaitingForm: (value: WaitingForm) => void;
  setStep: (step: (typeof STEPS)[number]) => void;
}) => {
  const [currentPeople, setCurrentPeople] = useState(0);
  const handleNext = () => {
    setWaitingForm({ people: currentPeople, phone: '' });
    handleAllowNotification({ currentAccess: undefined });
    setStep(STEPS[1]);
  };
  return (
    <S.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <S.MediumText>오실 인원을 입력해 주세요!</S.MediumText>
      <InputStepper value={currentPeople} setValue={setCurrentPeople} />
      <S.SmallTextFrame>
        <S.SmallText>웨이팅 남용을 방지하기 위해 동시 웨이팅 횟수는</S.SmallText>
        <S.SmallText>최대 3회까지 가능합니다.</S.SmallText>
      </S.SmallTextFrame>
      <BlueButton disabled={currentPeople === 0} onClick={handleNext} label="다음으로" />
    </S.Container>
  );
};

const PhoneStep = ({
  setStep,
  waitingForm,
  setWaitingForm,
}: {
  setStep: (step: (typeof STEPS)[number]) => void;
  waitingForm: WaitingForm;
  setWaitingForm: (value: WaitingForm) => void;
}) => {
  const [currentPhone, setCurrentPhone] = useState('');
  const handleNext = () => {
    setWaitingForm({ people: waitingForm.people, phone: currentPhone });
    setStep(STEPS[2]);
  };

  useEffect(() => {
    if (currentPhone.length === 11) {
      setCurrentPhone(currentPhone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    } else if (currentPhone.length === 13) {
      setCurrentPhone(
        currentPhone
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  }, [currentPhone]);
  return (
    <S.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <S.MediumText>전화드릴 번호를 입력해주세요!</S.MediumText>
      <S.PhoneInput
        type="tel"
        value={currentPhone}
        onChange={(e) => setCurrentPhone(e.target.value)}
        placeholder="010-0000-0000"
      />
      <S.SmallTextFrame>
        <S.SmallText>웨이팅 남용을 방지하기 위해 동시 웨이팅 횟수는</S.SmallText>
        <S.SmallText>최대 3회까지 가능합니다.</S.SmallText>
      </S.SmallTextFrame>
      <BlueButton disabled={currentPhone.length !== 13} onClick={handleNext} label="등록하기" />
    </S.Container>
  );
};

const CompleteStep = ({
  people,
  phone,
  setStep,
  id,
}: {
  people: number;
  phone: string;
  setStep: (step: (typeof STEPS)[number]) => void;
  id: number;
}) => {
  const navigate = useNavigate();
  const addWaiting = useWaitingStore((state) => state.addWaiting);
  const clearModal = useModalStore((state) => state.clearModals);
  const handleClose = () => {
    clearModal();
    updateWaiting();
    setStep(STEPS[0]);
    navigate('/user');
  };
  const updateWaiting = async () => {
    try {
      const response = await postWaiting({
        visitorCount: people,
        phoneNumber: phone,
        pubId: id,
      });
      await addWaiting({
        waitingId: response.data.id ? response.data.id : 0,
        wholeWaitingNum: response.data.waitingNum ? response.data.waitingNum : 0,
        numsTeamsAhead: response.data.numsTeamsAhead ? response.data.numsTeamsAhead : 0,
        pubId: id,
        visitorCount: people,
      });
    } catch (error) {
      console.error('Error posting waiting:', error);
    }
  };
  return (
    <S.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <S.MediumText>웨이팅이 완료되었어요!</S.MediumText>
      <S.SmallText>방문 인원: {people}명</S.SmallText>
      <S.SmallTextFrame>
        <S.SmallText>N번째 대기팀이 되면, 웹앱 푸시를 통해</S.SmallText>
        <S.SmallText>입장 알림을 보내드리니 꼭 확인해주세요.</S.SmallText>
      </S.SmallTextFrame>
      <BlueButton onClick={handleClose} label="내 웨이팅 보러가기" />
    </S.Container>
  );
};
