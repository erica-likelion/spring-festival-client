/* eslint-disable @typescript-eslint/no-explicit-any */
import { BeforeInstallPromptEvent } from '@/types/window';
import { Fragment, useEffect, useState } from 'react';
import * as S from './AppInstallPrompt.styles';
import { easeOut } from 'framer-motion';
import { BlueButton } from '@/components/bluebuttons';

const defaultBeforeInstallPromptEvent: BeforeInstallPromptEvent = {
  platforms: [],
  userChoice: Promise.resolve({ outcome: 'dismissed', platform: '' }),
  prompt: () => Promise.resolve(),
  preventDefault: () => {},
};

export default function AppInstallPrompt() {
  const isDeviceIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|crios|fxios).)*safari/i.test(navigator.userAgent);

  const isInStandalone = 'standalone' in navigator && (navigator as any).standalone === true;
  const isDisplayStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isAlreadyInstalled = isDeviceIOS && (isInStandalone || isDisplayStandalone);

  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (isAlreadyInstalled) return;

    if (isDeviceIOS && isSafari) {
      const isIosPromptAllowed = JSON.parse(localStorage.getItem('iosInstalled') || 'true');
      if (isIosPromptAllowed) {
        setDeferredPrompt(defaultBeforeInstallPromptEvent);
      }
      return;
    }

    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [isAlreadyInstalled, isDeviceIOS, isSafari]);

  const handleInstallClick = () => {
    if (deferredPrompt && deferredPrompt.prompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          localStorage.setItem('pwaInstalled', 'true');
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleCancelClick = () => {
    localStorage.setItem('iosInstalled', 'false');
    setDeferredPrompt(null);
  };

  return (
    <Fragment>
      {deferredPrompt && (
        <AppInstallPromptModal
          handleInstallClick={handleInstallClick}
          handleCancelClick={handleCancelClick}
          platform={isDeviceIOS ? 'ios' : 'android'}
        />
      )}
    </Fragment>
  );
}

function AppInstallPromptModal({
  handleInstallClick,
  handleCancelClick,
  platform,
}: {
  handleInstallClick: () => void;
  handleCancelClick: () => void;
  platform: 'ios' | 'android';
}) {
  return (
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
            {<S.Help fill="#e9e9ea" width={18} height={18} />}
            <S.ModalTitleText>홈 화면 추가하기</S.ModalTitleText>
          </S.ModalTitle>
          <S.ModalCloseBtn onClick={handleCancelClick} fill="#fafafa" width={18} height={18} />
        </S.ModalTab>
        <S.Content>
          {platform === 'ios' ? (
            <S.ModalText>
              IOS 시네요! 더 편리하게 사용하시려면
              <br /> 공유하기 / 홈 화면 추가하기를 눌러주세요!
            </S.ModalText>
          ) : (
            <S.ModalText>
              홈 화면에 추가하면
              <br /> 더 편리하게 HyLight를 즐길 수 있어요!
            </S.ModalText>
          )}
          {platform === 'android' && (
            <BlueButton onClick={handleInstallClick} label="홈 화면에 추가하기" />
          )}
          <S.CancelButton onClick={handleCancelClick}>불편해도 웹에서 이용하기</S.CancelButton>
        </S.Content>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
}
