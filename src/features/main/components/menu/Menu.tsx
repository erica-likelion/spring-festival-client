import * as S from './Menu.styles';
import { ImageTextIconFrame } from '@/components/image-text-icon-frame';

export default function Menu() {
  return (
    <S.SectionContainer>
      <S.Section>
        <S.SubTitle>SNS</S.SubTitle>
        <S.Frame>
          <ImageTextIconFrame
            image="./"
            title="총학생회 인스타그램 바로가기"
            description="축제 공지를 한눈에 보아요"
          />
          <ImageTextIconFrame
            image="./"
            title="멋사 보러가볼까"
            description="멋사 인스타그램 바로가기"
          />
        </S.Frame>
      </S.Section>
      <S.Section>
        <S.SubTitle>분실물</S.SubTitle>
        <S.Frame>
          <ImageTextIconFrame
            image="./"
            title="분실물 신고하기"
            description="여기서 습득한 분실물을 신고할 수 있어요"
          />
          <ImageTextIconFrame
            image="./"
            title="멋사 보러가볼까"
            description="멋사 인스타그램 바로가기"
          />
        </S.Frame>
      </S.Section>
      <S.Section>
        <S.SubTitle>문의사항</S.SubTitle>
        <S.Frame>
          <ImageTextIconFrame
            image="./"
            title="축제 문의사항 남기기"
            description="축기단 구글폼으로 이동"
          />
          <ImageTextIconFrame image="./" title="축제 FAQ" description="총학생회 인스타그램" />
        </S.Frame>
      </S.Section>

      <S.Section>
        <ImageTextIconFrame image="./" title="축제 웹앱 사용후기" description="구글폼 링크" />
      </S.Section>
    </S.SectionContainer>
  );
}
