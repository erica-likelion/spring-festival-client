import * as S from './ImageTextFrame.styles';
import { MenuFrameProps } from './ImageTextFrame.types';

export default function MenuFrame({ menu, description, price }: MenuFrameProps) {
  return (
    <S.Container>
      <S.MenuTextWrap>
        <S.Title>{menu}</S.Title>
        <S.MenuDescription>{description}</S.MenuDescription>
      </S.MenuTextWrap>
      <S.Price>{price}</S.Price>
    </S.Container>
  );
}
