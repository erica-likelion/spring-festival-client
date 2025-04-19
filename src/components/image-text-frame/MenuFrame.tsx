import * as S from './ImageTextFrame.styles';
import { MenuFrameProps } from './ImageTextFrame.types';

export default function MenuFrame({ menu, description, price }: MenuFrameProps) {
  const formatPrice = (price: number) => {
    return (
      new Intl.NumberFormat('ko-KR', {
        style: 'decimal',
        currency: 'KRW',
      }).format(price) + ' 원'
    );
  };

  return (
    <S.MenuContainer>
      <S.MenuTextWrap>
        <S.Title>{menu}</S.Title>
        <S.MenuDescription>{description}</S.MenuDescription>
      </S.MenuTextWrap>
      <S.Price>{formatPrice(price)}</S.Price>
    </S.MenuContainer>
  );
}
