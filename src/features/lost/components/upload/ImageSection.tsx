import { theme } from '@/styles/theme';
import Description from './Description';
import * as S from './ImageSection.styles';
import Title from './Title';
import CameraIcon from '@/assets/icons/nrk_camera.svg?react';

export default function ImageSection() {
  return (
    <S.ImageBox>
      <Title title="분실물 사진" />
      <S.ImageButton>
        <CameraIcon width={'1.5rem'} height={'1.5rem'} fill={theme.colors.grayScale.gy50} />
        <S.ImageButtonText>이미지 업로드 (1장)</S.ImageButtonText>
      </S.ImageButton>
      <S.CommentBox>
        <Description
          text={`* 잘 알아볼 수 있도록 밝은 곳에서 전체 모습이 나오게 촬영한 
                        이미지를 올려주세요.`}
        />
        <Description text="* 이미지에 민감한 개인정보가 포함되어 있다면 가려서 업로드해주세요!" />
      </S.CommentBox>
    </S.ImageBox>
  );
}
