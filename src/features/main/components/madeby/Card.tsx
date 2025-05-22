import { ColorButton } from '@/components/colorbuttons';
import * as S from './Card.styles';
import { CardProps } from './Card.types';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';

/**
 * Card 컴포넌트
 * @param {string} image - 이미지 URL
 * @param {string} label - 버튼 내부에 표시될 텍스트
 * @param {string} backgroundColor - 테마에서 사용할 색상 키
 * @param {string} name - 이름
 * @param {string} description - 설명
 * @returns {JSX.Element}
 */

export default function Card({ image, label, backgroundColor, name, description }: CardProps) {
  return (
    <S.Container>
      <S.Wrap>
        <S.ImageBox>
          <S.Image src={image} alt="made by" />
        </S.ImageBox>
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
