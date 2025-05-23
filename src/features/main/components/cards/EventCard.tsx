import * as S from './EventCard.styles';
import Sun from '@/assets/icons/pixel_sun.svg?react';
import Moon from '@/assets/icons/pixel_moon.svg?react';
import Clock from '@/assets/icons/clock.svg?react';
import Location from '@/assets/icons/geopoint.svg?react';
import { CardProps } from './EventCard.types';
import Progress from './Progress';
import { ColorButton } from '@/components/colorbuttons';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';
import React from 'react';

function EventCard({
  isSun = true,
  startTime,
  endTime,
  title,
  location,
  tags = [],
  onClick,
}: CardProps) {
  return (
    <S.Container onClick={onClick}>
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
            <Clock width={'1.125rem'} height={'1.125rem'} fill="#212526" />
            <S.EventText>
              {startTime}~{endTime}
            </S.EventText>
          </S.TextWrapper>
          <S.TextWrapper>
            <Location width={'1.125rem'} height={'1.125rem'} fill="#212526" />
            <S.EventText>{location}</S.EventText>
          </S.TextWrapper>
        </S.TextContainer>
        <Progress startTime={startTime} endTime={endTime} />
      </S.InfoSection>
    </S.Container>
  );
}

export default React.memo(EventCard);
