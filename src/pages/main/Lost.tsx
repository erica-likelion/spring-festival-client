import { NavBar } from '@/components/nav-bar';
import { Registration } from '@/features/lost';
import { ItemList } from '@/features/lost';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';

export default function Lost() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  return (
    <div>
      <NavBar isBack={true} title="분실물 신고하기" isSearch={true} />
      <div>
        <Registration />
        <ItemList />
      </div>
    </div>
  );
}
