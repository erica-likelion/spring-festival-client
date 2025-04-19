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
      <S.Image src={image} alt={title} />
      <S.TextWrap>
        <S.Title>{title}</S.Title>
        <S.Organization>{organization}</S.Organization>
      </S.TextWrap>
      <S.Pickup $canPickup={canPickup} />
    </S.Container>
  );
}
