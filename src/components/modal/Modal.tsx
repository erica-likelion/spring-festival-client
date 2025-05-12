import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalStore } from '@/stores/useModalStore';
import { ModalItemProps } from '@/types/modal.type';
import * as S from './Modal.style';
import { easeOut, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

/**
 * Modals component
 * Zustand 상태에서 현재 열려 있는 모든 모달을 렌더링
 * Framer Motion의 AnimatePresence를 사용하여 모달의 애니메이션을 적용
 *
 * @returns {JSX.Element} A fragment containing all currently active modal components.
 */
export default function Modals() {
  const modals = useModalStore((state) => state.modals);
  if (modals.length === 0) return null;
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

/**
 * ModalItem component
 * 단일 모달 아이템을 포털을 이용해 지정된 DOM 노드에 렌더링합니다.
 * Framer Motion을 활용하여 모달의 애니메이션 효과를 적용
 *
 * @param props - 모달 구성 속성
 * @param props.component - 렌더링할 모달 컴포넌트
 * @param props.props - 모달 컴포넌트에 전달할 props (isOpen, title 포함)
 * @param props.modalKey - 모달을 고유하게 식별하는 키
 * @param props.portalTarget - 모달을 렌더링할 DOM 요소 (기본: document.body)
 * @param props.isHelp - 제목 옆에 도움말 아이콘을 표시할지 여부
 *
 * @returns 포털을 통한 모달 렌더링 또는 포털 대상이 없으면 null 반환
 */
function ModalItem({
  component: Component,
  props,
  portalTarget,
  modalKey,
  isHelp,
}: ModalItemProps) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const closeModal = useModalStore((state) => state.closeModal);
  const [, setSearchParams] = useSearchParams();
  useEffect(() => {
    setPortalElement(portalTarget ? portalTarget : document.body);
  }, [portalTarget]);
  const onHandleClose = () => {
    closeModal({ key: modalKey, clearTime: 0 });
    setSearchParams({});
  };
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
          <S.ModalCloseBtn onClick={onHandleClose} fill="#fafafa" width={18} height={18} />
        </S.ModalTab>
        <Component {...props}></Component>
      </S.ModalWrapper>
    </S.ModalOverlay>,
    portalElement,
  );
}
