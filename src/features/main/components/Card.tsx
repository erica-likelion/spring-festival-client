import * as S from './Card.styles';
import Sun from '@/assets/icons/pixel_sun.svg?react';
import Moon from '@/assets/icons/pixel_moon.svg?react';
import Clock from '@/assets/icons/clock_b.svg?react';
import Location from '@/assets/icons/geopoint_b.svg?react';
import { CardProps } from './Card.types';
import Progress from './Progress';
import { ColorButton } from '@/components/colorbuttons';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';

export default function Card({ isSun = true, startTime, endTime, title, tags = [] }: CardProps) {
  return (
    <S.Container>
      <S.HeaderSection>
        <S.TagWrapper>
          {tags.map((tag, index) => (
            <ColorButton key={index} backgroundColor={tag.color as ColorKey} label={tag.text} />
          ))}
        </S.TagWrapper>

        {isSun ? <Sun /> : <Moon />}
      </S.HeaderSection>
      <S.InfoSection>
        <S.EventTitle>{title}</S.EventTitle>
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
        <Progress startTime={startTime} endTime={endTime} />
      </S.InfoSection>
    </S.Container>
  );
}
