import { FunnelProps, StepProps } from '@/types/funnel.type';
import { isValidElement, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * 단계별 UI이나 마법사와 같은 UI를 구현하기 위한 커스텀 훅
 * @template T - 단계 이름들의 리터럴 타입 배열
 * @param {T} steps - 사용 가능한 모든 단계 이름들의 배열
 * @returns {Function} setStep - 특정 단계로 이동하는 함수
 * @returns {string} currentStep - 현재 활성화된 단계
 * @returns {React.Component} Funnel - 단계별 컨텐츠를 렌더링하는 컴포넌트
 */
export const useFunnel = <T extends readonly string[]>(steps: T) => {
  const [params, setParams] = useSearchParams();

  /**
   * 특정 단계로 이동하는 함수
   * @param {T[number]} step - 이동할 단계 이름
   */
  const setStep = useCallback(
    (step: T[number]) => {
      setParams((prev) => {
        prev.set('step', step);
        return prev;
      });
    },
    [setParams],
  );

  /**
   * 현재 활성화된 단계의 컨텐츠만 렌더링하는 컴포넌트
   * @param {FunnelProps} props - Funnel 컴포넌트의 props
   * @param {React.ReactNode} props.children - 모든 단계의 컨텐츠
   */
  const Funnel = ({ children }: FunnelProps) => {
    const currentStep = children.find((child: React.ReactNode) => {
      if (!isValidElement(child)) return null;
      return (child.props as { name: string }).name === (params.get('step') ?? steps[0]);
    });
    return currentStep || null;
  };

  /**
   * 개별 단계의 컨텐츠를 감싸는 컴포넌트
   * @param {StepProps} props - Step 컴포넌트의 props
   * @param {React.ReactNode} props.children - 해당 단계의 컨텐츠
   */
  const Step = ({ children }: StepProps) => {
    return children;
  };

  Funnel.Step = Step;

  return { setStep, currentStep: params.get('step') ?? steps[0], Funnel };
};
