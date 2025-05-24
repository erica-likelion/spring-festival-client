import { BlueButton } from '@/components/bluebuttons';
import * as S from './UserLogin.styles';
import { useNavigate } from 'react-router-dom';
export default function UserLogin() {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <S.Title>
          로그인하고 모든 기능을 <br />
          UN-LOCK❤️하기
        </S.Title>
        <S.Sub>
          지금 로그인하고 공연 알람, 분실물 등록
          <br />
          기능들을 모두 이용해보세요!
        </S.Sub>
        <S.ButtonWrap>
          <BlueButton label={'로그인 하러가기'} onClick={() => navigate('/login')} size="large" />
        </S.ButtonWrap>
      </S.Container>
    </>
  );
}
