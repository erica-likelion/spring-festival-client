import { useEffect, useRef } from 'react';
import * as S from './Main.styles';
import { useLocation } from 'react-router-dom';

export default function Main({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0 });
    }
  }, [location]);
  return <S.Main ref={ref}>{children}</S.Main>;
}
