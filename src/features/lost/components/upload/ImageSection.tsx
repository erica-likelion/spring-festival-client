import { theme } from '@/styles/theme';
import Description from './Description';
import * as S from './ImageSection.styles';
import Title from './Title';
import CameraIcon from '@/assets/icons/nrk_camera.svg?react';
import { ImageSectionProps } from './ImageSection.types';
import { useRef } from 'react';

/**
 * 분실물 등록하기 ImageSection 컴포넌트
 * @param {ImageSectionProps} props - Props for the ImageSection component
 * @param {File | null} props.image - 업로드된 이미지 파일
 * @param {(file: File) => void} props.setImage - 이미지 파일을 설정하는 함수
 * @returns {JSX.Element} - Rendered ImageSection component
 */

export default function ImageSection({ image, setImage }: ImageSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleReUpload = () => {
    fileInputRef.current?.click();
  };

  const imageURL = image ? URL.createObjectURL(image) : null;

  return (
    <S.ImageBox>
      <Title title="분실물 사진" />
      {imageURL ? (
        <S.Wrap>
          <S.PreviewImage src={imageURL} alt="업로드한 이미지" />
          <S.CommentBox>
            <Description
              text={`* 잘 알아볼 수 있도록 밝은 곳에서 전체\n 모습이 나오게 촬영한 이미지를 올려주세요.`}
            />
            <Description text="* 이미지에 민감한 개인정보가 포함되어 있다면 가려서 업로드해주세요!" />
            <S.ReUploadButton type="button" onClick={handleReUpload}>
              다시 업로드하기
            </S.ReUploadButton>
          </S.CommentBox>
        </S.Wrap>
      ) : (
        <>
          <S.ImageButton as="div" onClick={handleReUpload}>
            <CameraIcon width="1.5rem" height="1.5rem" fill={theme.colors.grayScale.gy50} />
            <S.ImageButtonText>이미지 업로드 (1장)</S.ImageButtonText>
          </S.ImageButton>
          <S.MariginBox>
            <S.CommentBox>
              <Description
                text={`* 잘 알아볼 수 있도록 밝은 곳에서 전체 모습이 나오게 촬영한 \n이미지를 올려주세요.`}
              />
              <Description text="* 이미지에 민감한 개인정보가 포함되어 있다면 가려서 업로드해주세요!" />
            </S.CommentBox>
          </S.MariginBox>
        </>
      )}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        hidden
      />
    </S.ImageBox>
  );
}
