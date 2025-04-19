import * as S from './ImageTextFrame.styles';
import { ImageTextFrameWithOrganizationProps } from './ImageTextFrame.types';

export default function ImageTextFrameWithOrganization({
  image,
  title,
  organization,
  canPickup = false,
  onClick,
}: ImageTextFrameWithOrganizationProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Image src={image} alt="" />
      <S.ContentsWrap>
        <S.Title>{title}</S.Title>
        <S.ContentsFooter>
          <S.Organization>{organization}</S.Organization>
          {canPickup && <S.Pickup>포장 가능</S.Pickup>}
        </S.ContentsFooter>
      </S.ContentsWrap>
    </S.Container>
  );
}
