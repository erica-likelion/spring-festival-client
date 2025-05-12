import { ColorButton } from '@/components/colorbuttons';
import * as S from './Card.styles';
import { CardProps } from './Card.types';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';

export default function Card({ image, label, backgroundColor, name, description }: CardProps) {
  return (
    <S.Container>
      <S.Wrap>
        <S.Image src={image} alt="made by" />
        <S.TextWrap>
          <S.ColorButtonWrap>
            <ColorButton label={label} backgroundColor={backgroundColor as ColorKey} />
            <S.Name>{name}</S.Name>
          </S.ColorButtonWrap>
          <S.Description
            dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>') }}
          />
        </S.TextWrap>
      </S.Wrap>
    </S.Container>
  );
}
