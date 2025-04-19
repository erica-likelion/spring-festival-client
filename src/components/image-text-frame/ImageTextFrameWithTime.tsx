import * as S from './ImageTextFrame.styles';
import { ImageTextFrameWithTimeProps } from './ImageTextFrame.types';

export default function ImageTextFrameWithTime({
  image,
  title,
  subtitle,
  time,
  canPickup = false,
  onClick,
}: ImageTextFrameWithTimeProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Image src={image} alt={title} />
      <S.TextWrap>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <S.TimeWrap>
          <S.Time>{time}</S.Time>
        </S.TimeWrap>
        <S.Pickup $canPickup={canPickup} />
      </S.TextWrap>
    </S.Container>
  );
}
