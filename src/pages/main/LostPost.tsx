import { NavBar } from '@/components/nav-bar';

export default function LostPost() {
  return (
    <>
      <NavBar isBack={true} title="분실물 보기" isSearch={false} />
      <div>분실물 페이지</div>
    </>
  );
}
