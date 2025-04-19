import NavBar from '@/components/nav-bar/NavBar';

export default function Main() {
  const onClick = () => {};
  return (
    <>
      <NavBar
        placeholder="입력하세요"
        isBack={true}
        onClick={onClick}
        isSearch={true}
        title="page"
      ></NavBar>
    </>
  );
}
