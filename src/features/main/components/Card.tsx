import * as S from './Card.styles';
import Sun from '@/assets/icons/pixel_sun.svg?react';
import Moon from '@/assets/icons/pixel_moon.svg?react';
import Clock from '@/assets/icons/clock_b.svg?react';
import Location from '@/assets/icons/geopoint_b.svg?react';
import { CardProps } from './Card.types';
import Progress from './Progress';

export default function Card({ isSun = true, startTime = '00:00', endTime = '01:30' }: CardProps) {
  return (
    <S.Container>
      <S.HeaderSection>
        <S.TagWrapper>
          <div>live</div>
          <div>공연 무대</div>
        </S.TagWrapper>

        {isSun ? <Sun /> : <Moon />}
      </S.HeaderSection>
      <S.InfoSection>
        <S.EventTitle>호수공원 배 띄우기</S.EventTitle>
        <S.TextContainer>
          <S.TextWrapper>
            <Clock width={'1.125rem'} height={'1.125rem'} />
            <S.EventText>
              {startTime}~{endTime}
            </S.EventText>
          </S.TextWrapper>
          <S.TextWrapper>
            <Location width={'1.125rem'} height={'1.125rem'} />
            <S.EventText>호수공원</S.EventText>
          </S.TextWrapper>
        </S.TextContainer>
        <Progress isSun={isSun} startTime={startTime} endTime={endTime} />
      </S.InfoSection>
    </S.Container>
  );
}
