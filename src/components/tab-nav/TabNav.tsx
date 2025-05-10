import { TabNavProps } from '@/components/tab-nav/TabNav.type';
import * as S from './TabNav.styles';

/**
 * 탭 기반 네비게이션 컴포넌트
 *
 * @template T - 탭 이름들의 readonly 문자열 배열 타입
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {T} props.tabs - 표시할 탭들의 이름 배열
 * @param {T[number]} props.currentStep - 현재 선택된 탭
 * @param {(tab: T[number]) => void} props.setStep - 탭 선택 시 호출될 상태 변경 함수
 *
 * @example
 * const TABS = ['정보', '리뷰', '문의'] as const;
 * const {currentStep, setStep} = useFunnel(tabs);
 *
 * return (
 *   <TabNav
 *     tabs={tabs}
 *     currentStep={currentStep}
 *     setStep={setStep}
 *   />
 * );
 */
export default function TabNav<T extends readonly string[]>({
  tabs,
  currentStep,
  setStep,
}: TabNavProps<T>) {
  return (
    <S.Container>
      <S.Nav>
        <S.List>
          {tabs.map((tab) => (
            <S.Item
              $current={tab === currentStep}
              key={tab}
              onClick={() => {
                setStep(tab);
              }}
            >
              {tab}
              {tab === currentStep ? <S.Underline layoutId="underline" id="underline" /> : null}
            </S.Item>
          ))}
        </S.List>
      </S.Nav>
    </S.Container>
  );
}
