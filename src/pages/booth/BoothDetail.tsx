import { NavBar } from '@/components/nav-bar';
import { useParams } from 'react-router-dom';

export default function BoothDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <NavBar isBack title="주점" />
    </>
  );
}
