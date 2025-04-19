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
      <S.Image src={image} alt="" />
      <S.ContentsWrap>
        <S.TitleWrap>
          <S.Title>{title}</S.Title>
          {subtitle && (
            <>
              <S.TitleDivider />
              <S.SubTitle>{subtitle}</S.SubTitle>
            </>
          )}
        </S.TitleWrap>
        <S.ContentsFooter>
          <S.TimeWrap>
            <S.TimeIcon src="/icons/clock.svg" />
            <S.Time>{time}</S.Time>
          </S.TimeWrap>
          {canPickup && <S.Pickup>포장 가능</S.Pickup>}
        </S.ContentsFooter>
      </S.ContentsWrap>
    </S.Container>
  );
}
