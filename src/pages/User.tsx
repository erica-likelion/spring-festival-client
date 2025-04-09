import { Link } from 'react-router-dom';

export default function User() {
  return (
    <>
      {/**나의예약 */}
      <Link to={'login'}>로그인</Link>
      My Page
    </>
  );
}
