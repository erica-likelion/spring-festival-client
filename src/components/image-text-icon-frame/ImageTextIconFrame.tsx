import * as Frame from './ImageTextIconFrame.styles';
import RightArrow from '@/assets/icons/right-arrow.svg?react';

export default function ImageTextIconFrame() {
  return (
    <Frame.Container>
      <Frame.Image src="/images/placeholder.png" alt="Placeholder" />
      <Frame.TextWrap>
        <Frame.TitleText>Placeholder Text</Frame.TitleText>
        <Frame.DescriptionText>Description</Frame.DescriptionText>
      </Frame.TextWrap>
      <RightArrow width={24} height={24} />
    </Frame.Container>
  );
}
