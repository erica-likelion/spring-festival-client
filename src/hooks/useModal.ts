import { useModalStore } from '@/stores/useModalStore';
import { CloseModalOptions, OpenModalOptions } from '@/types/modal.type';
import { nanoid } from '@/utils/nanoid';
import { useCallback, useMemo } from 'react';

export default function useModal<T extends { title: string }>(Component: React.ComponentType) {
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

      closeModal({ key: validKey, clearTime: 3000 });
    },
    [closeModal, key],
  );
  return { key, open, close };
}
