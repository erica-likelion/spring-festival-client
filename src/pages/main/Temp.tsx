import { BlueButton } from '@/components/bluebuttons';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';

export default function Temp() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return <div>{!isLoggedIn && <BlueButton label="로그인" onClick={handleLoginClick} />}</div>;
}
