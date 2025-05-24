import { useNavigate } from 'react-router-dom';
import * as S from './Menu.styles';
import { ImageTextIconFrame } from '@/components/image-text-icon-frame';
import { externalLinks } from '@/constants/main/ExternalLink';
import Student from '@/assets/images/menu/ericanote.jpeg';
import Form from '@/assets/icons/form_logo.svg';
import Lost from '@/assets/icons/lost_logo.svg';
import Make from '@/assets/icons/lionlove_logo.svg';
import Lion from '@/assets/icons/lion_logo.svg';
/**
 * Menu 컴포넌트
 * 메뉴 클릭시 내부 경로 이동 또는 외부 URL로 연결
 * @component
 * @returns {JSX.Element}
 */

export default function Menu() {
  const navigate = useNavigate();

  return (
    <S.SectionContainer>
      <S.Section>
        <S.SubTitle aria-label="SNS 바로가기">SNS 바로가기</S.SubTitle>
        <S.Frame>
          <ImageTextIconFrame
            image={Student}
            title="총학생회 인스타그램 바로가기"
            description="축제 공지를 한눈에 보아요"
            onClick={() => window.open(externalLinks.instagramStudent, '_blank')}
          />
          <ImageTextIconFrame
            image={Lion}
            title="멋사 보러가볼까"
            description="멋사 인스타그램 바로가기"
            onClick={() => window.open(externalLinks.instagramLikelion, '_blank')}
          />
        </S.Frame>
      </S.Section>
      <S.Section>
        <S.SubTitle aria-label="분실물">분실물</S.SubTitle>
        <S.Frame>
          <ImageTextIconFrame
            image={Lost}
            title="분실물 신고하기"
            description="여기서 습득한 분실물을 신고할 수 있어요"
            onClick={() => navigate('/main/lost')}
          />
        </S.Frame>
      </S.Section>
      <S.Section>
        {/* 링크 수정필요 */}
        <S.SubTitle aria-label="문의사항">문의사항</S.SubTitle>
        <S.Frame>
          <ImageTextIconFrame
            image={Form}
            title="축제 문의사항 남기기"
            description="축기단 링크트리로 이동"
            onClick={() => window.open(externalLinks.linkTree, '_blank')}
          />
          <ImageTextIconFrame
            image={Student}
            title="축제 FAQ"
            description="총학생회 인스타그램"
            onClick={() => window.open(externalLinks.linkTree, '_blank')}
          />
        </S.Frame>
      </S.Section>

      <S.Section>
        <S.Frame>
          <ImageTextIconFrame
            image={Form}
            title="축제 웹앱 사용후기"
            description="구글폼 링크로 이동"
            onClick={() => window.open(externalLinks.googleForm, '_blank')}
          />
          <ImageTextIconFrame
            image={Make}
            title="만든 이들"
            description="멋쟁이사자처럼 운영진 제작 후기"
            onClick={() => navigate('/main/about')}
          />
        </S.Frame>
      </S.Section>
    </S.SectionContainer>
  );
}
