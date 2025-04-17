import { useLayoutStore } from '@/stores';
import * as S from './Main.styles';
import { easeInOut } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Main({ children }: { children: React.ReactNode }) {
  const direction = useLayoutStore((state) => state.direction);
  const locate = useLocation();
  return (
    <S.Main
      key={locate.pathname}
      initial={S.getAnimation(direction).initial}
      animate={S.getAnimation(direction).animate}
      transition={{ duration: 0.4, ease: easeInOut }}
    >
      {children}
    </S.Main>
  );
}
