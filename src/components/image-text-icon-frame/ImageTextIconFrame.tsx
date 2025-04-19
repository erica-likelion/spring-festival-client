import * as Frame from './ImageTextIconFrame.styles';
import RightArrow from '@/assets/icons/right-arrow.svg?react';
import { ImageTextIconFrameProps } from './ImageTextIconFrame.types';

/**
 * ImageTextIconFrame component
 * @param image image URL
 * @param title title TEXT
 * @param description description TEXT
 * @returns {JSX.Element}
 */

export default function ImageTextIconFrame({
  image,
  title,
  description,
  path,
}: ImageTextIconFrameProps) {
  const hasImage = Boolean(image);
  return (
    <Frame.LinkWrapper to={path}>
      <Frame.Container $hasImage={hasImage}>
        {hasImage && <Frame.Image src={image} alt="이미지" />}
        <Frame.TextWrap $hasImage={hasImage}>
          <Frame.TitleText>{title}</Frame.TitleText>
          <Frame.DescriptionText>{description}</Frame.DescriptionText>
        </Frame.TextWrap>
        <RightArrow width={24} height={24} />
      </Frame.Container>
    </Frame.LinkWrapper>
  );
}
