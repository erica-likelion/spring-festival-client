import { NavBar } from '@/components/nav-bar';
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
        {/* 등록 컴포넌트 */}
        {/* 분실물 목록 컴포넌트 */}
      </div>
    </div>
  );
}
