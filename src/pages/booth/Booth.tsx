import { useFunnel } from '@/hooks/useFunnel';
import TabNav from '@/components/tab-nav';
import { NavBar } from '@/components/nav-bar/NavBar';
import { BoothList } from '@/features/booth';
import * as S from './Booth.styles';
import { PubRank } from '@/features/rank';

const TABS = ['랭킹', '주점 목록'] as const;

export default function Booth() {
  const { Funnel, currentStep, setStep } = useFunnel(TABS);
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <S.TabNavContainer>
          <TabNav tabs={TABS} currentStep={currentStep} setStep={setStep} />
        </S.TabNavContainer>
        <Funnel>
          <Funnel.Step name={TABS[0]}>
            <PubRank />
          </Funnel.Step>
          <Funnel.Step name={TABS[1]}>
            <BoothList />
          </Funnel.Step>
        </Funnel>
      </S.Main>
    </S.Container>
  );
}
