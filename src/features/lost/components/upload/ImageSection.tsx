import { theme } from '@/styles/theme';
import Description from './Description';
import * as S from './ImageSection.styles';
import Title from './Title';
import CameraIcon from '@/assets/icons/nrk_camera.svg?react';
import { ImageSectionProps } from './ImageSection.types';

export default function ImageSection({ image, setImage }: ImageSectionProps) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  return (
    <S.ImageBox>
      <Title title="분실물 사진" />
      <label htmlFor="image-upload" style={{ display: 'block', width: '100%' }}>
        <S.ImageButton as="div">
          <CameraIcon width="1.5rem" height="1.5rem" fill={theme.colors.grayScale.gy50} />
          <S.ImageButtonText>{image ? image.name : '이미지 업로드 (1장)'}</S.ImageButtonText>
        </S.ImageButton>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </label>
      <S.CommentBox>
        <Description
          text={`* 잘 알아볼 수 있도록 밝은 곳에서 전체 모습이 나오게 촬영한 \n이미지를 올려주세요.`}
        />
        <Description text="* 이미지에 민감한 개인정보가 포함되어 있다면 가려서 업로드해주세요!" />
      </S.CommentBox>
    </S.ImageBox>
  );
}
