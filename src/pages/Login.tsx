import { BlueButton } from '@/components/bluebuttons';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main'); // 로그인 후 홈으로 이동
  };
  return (
    <>
      {/**로그인 */}
      LOGIN
      <BlueButton label="로그인" size="large" onClick={handleClick} />
      <BlueButton label="등록하러 가기" size="large-header" disabled={true} onClick={handleClick} />
      <BlueButton label="등록하러 가기" size="large-header" onClick={handleClick} />
      <BlueButton label="웨이팅 취소" size="small" onClick={handleClick} />
    </>
  );
}
