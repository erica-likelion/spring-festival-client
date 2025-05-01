import { useFunnel } from '@/hooks/useFunnel';
import TabNav from '@/components/tab-nav';
import { NavBar } from '@/components/nav-bar/NavBar';
import * as S from './booth.styles';
import { BoothList } from '@/features/booth';

const TABS = ['랭킹', '주점 목록'] as const;

export default function Booth() {
  const { Funnel, currentStep, setStep } = useFunnel(TABS);
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <TabNav tabs={TABS} currentStep={currentStep} setStep={setStep} />
        <Funnel>
          <Funnel.Step name={TABS[0]}>
            <div>랭킹</div>
          </Funnel.Step>
          <Funnel.Step name={TABS[1]}>
            <BoothList />
          </Funnel.Step>
        </Funnel>
      </S.Main>
    </S.Container>
  );
}
