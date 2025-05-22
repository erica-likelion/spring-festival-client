import * as S from './Main.styles';
import { easeInOut } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Main({ children }: { children: React.ReactNode }) {
  const locate = useLocation();
  return (
    <S.Main
      key={locate.pathname}
      initial={S.getAnimation('center').initial}
      animate={S.getAnimation('center').animate}
      transition={{ duration: 0.2, ease: easeInOut }}
    >
      {children}
    </S.Main>
  );
}
