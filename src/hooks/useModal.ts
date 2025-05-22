import { useModalStore } from '@/stores/useModalStore';
import { CloseModalOptions, OpenModalOptions } from '@/types/modal.type';
import { nanoid } from '@/utils/nanoid';
import { useCallback, useMemo } from 'react';

/**
 * 컴포넌트를 동적으로 모달로 열 수 있도록 도와주는 커스텀 훅
 * Zustand 기반 모달 상태 관리와 함께 동작하며, `open`과 `close` 함수를 제공
 *
 * @template T - 모달에 전달될 props 타입 (반드시 `title: string` 포함)
 * @param Component - 모달로 사용될 React 컴포넌트
 * @returns
 * - `key`: 모달을 고유하게 식별하는 키 값 (nanoid로 자동 생성됨)
 * - `open`: 모달을 여는 함수. props와 옵션을 전달할 수 있음
 * - `close`: 모달을 닫는 함수. key가 생략되면 내부적으로 생성된 key로 닫음
 *
 * @example
 * ```tsx
 * const { open, close } = useModal(MyComponent);
 * () => open({ title: "안내"}, {isHelpIcon: true});
 * () => close();
 * ```
 */
export default function useModal<T extends { title: string }>(Component: React.ComponentType<T>) {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const key = useMemo(() => nanoid(), []);

  const open = useCallback(
    (props: Omit<T, 'isOpen'>, options?: OpenModalOptions) => {
      openModal({
        component: Component,
        props,
        key: options?.key ? options?.key : key,
        portalTarget: options?.portalTarget ? options.portalTarget : null,
        isHelp: options?.isHelpIcon ? options.isHelpIcon : false,
      });
    },
    [Component, key, openModal],
  );

  const close = useCallback(
    (options?: CloseModalOptions) => {
      const validKey =
        typeof options?.key === 'string' || typeof options?.key === 'number' ? options.key : key;

      closeModal({ key: validKey, clearTime: 0 });
    },
    [closeModal, key],
  );
  return { key, open, close };
}
