import { DefaultNavBar, SearchNavBar } from '@/components/nav-bar/NavBar';

export default function Main() {
  const onclick = () => {};
  const on = () => {};
  return (
    <>
      <DefaultNavBar isBack={false} isSearch={true}></DefaultNavBar>
      <DefaultNavBar isBack={true} title="page" isSearch={true}></DefaultNavBar>
      <DefaultNavBar isBack={true} title="page" isSearch={false}></DefaultNavBar>
      <DefaultNavBar isBack={false} isSearch={false}></DefaultNavBar>
      <SearchNavBar onClick={onclick} placeholder="Text" onChange={on}></SearchNavBar>
    </>
  );
}
