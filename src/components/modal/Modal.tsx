import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalStore } from '@/stores/useModalStore';
import { ModalItemProps } from '@/types/modal.type';
import * as S from './Modal.style';
import { easeOut, AnimatePresence } from 'framer-motion';

export default function Modals() {
  const modals = useModalStore((state) => state.modals);
  return (
    <React.Fragment>
      <AnimatePresence>
        {modals.map((modal) => {
          const { component, props, key, portalTarget, isHelp } = modal;
          return (
            <ModalItem
              key={key}
              modalKey={key}
              component={component}
              props={props}
              isHelp={isHelp}
              portalTarget={portalTarget}
            ></ModalItem>
          );
        })}
      </AnimatePresence>
    </React.Fragment>
  );
}

function ModalItem({
  component: Component,
  props,
  portalTarget,
  modalKey,
  isHelp,
}: ModalItemProps) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const closeModal = useModalStore((state) => state.closeModal);
  useEffect(() => {
    setPortalElement(portalTarget ? portalTarget : document.body);
  }, [portalTarget]);

  if (!portalElement) return null;
  return createPortal(
    <S.ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <S.ModalWrapper
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ delay: 0.2, duration: 0.2, ease: easeOut }}
      >
        <S.ModalTab>
          <S.ModalTitle>
            {isHelp && <S.Help fill="#e9e9ea" width={18} height={18} />}
            <S.ModalTitleText>{props.title}</S.ModalTitleText>
          </S.ModalTitle>
          <S.ModalCloseBtn
            onClick={() => closeModal({ key: modalKey, clearTime: 300 })}
            fill="#fafafa"
            width={18}
            height={18}
          />
        </S.ModalTab>
        <Component {...props}></Component>
      </S.ModalWrapper>
    </S.ModalOverlay>,
    portalElement,
  );
}
