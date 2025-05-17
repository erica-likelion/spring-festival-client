import { useNavigate } from 'react-router-dom';
import * as S from './Footer.styles';
import Instagram from '@/assets/icons/instagram.svg?react';
export default function Footer() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Instagram width={'2.5rem'} height={'2.5rem'} />
      <S.Sub>
        이메일 : hyuerica@likelion.org
        <br />
        한양대학교 ERICA 멋쟁이사자처럼
        <br />
        <br />
        @LIKELION ERICA. All Rights Reserved.
      </S.Sub>
      <S.Btn>
        <S.Out onClick={() => navigate('/login')}>로그인하기</S.Out>
      </S.Btn>
    </S.Container>
  );
}
