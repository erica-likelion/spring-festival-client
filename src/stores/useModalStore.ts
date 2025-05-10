import { create } from 'zustand';
import { OpenParams, ModalState, CloseParam } from '@/types/modal.type';

interface ModalStateType {
  modals: ModalState[];
}

interface ModalActionType {
  modals: ModalState[];
  openModal: <T>(params: OpenParams<T>) => void;
  closeModal: (params: CloseParam) => void;
  clearModals: () => void;
}

export const useModalStore = create<ModalStateType & ModalActionType>((set) => ({
  modals: [],
  openModal: ({ component, props, key, portalTarget, isHelp }) => {
    const propsWithIsOpen = { ...props, title: props?.title ?? 'Modal', isOpen: true };
    set((state) => {
      const targetIndex = state.modals.findIndex((modal) => modal.key === key);
      if (targetIndex !== -1) {
        const updateModals = [...state.modals];
        updateModals[targetIndex] = {
          ...updateModals[targetIndex],
          props: propsWithIsOpen,
          isHelp,
        };
        return {
          modals: updateModals,
        };
      }
      return {
        modals: [...state.modals, { component, props: propsWithIsOpen, key, portalTarget, isHelp }],
      };
    });
  },

  closeModal: ({ key, clearTime = 3000 }) => {
    set((prev) => ({
      modals: prev.modals.map((modal) =>
        modal.key === key ? { ...modal, props: { ...modal.props, isOpen: false } } : modal,
      ),
    }));

    setTimeout(() => {
      set((prev) => {
        const targetModal = prev.modals.find((modal) => modal.key === key);
        if (!targetModal || targetModal.props.isOpen) return prev;

        const updatedModals = prev.modals.filter((modal) => modal.key !== key);
        return { modals: updatedModals };
      });
    }, clearTime);
  },

  clearModals: () => {
    set(() => ({
      modals: [],
    }));
  },
}));
