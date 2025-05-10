import { useNavigate } from 'react-router-dom';
import * as S from './Menu.styles';
import { ImageTextIconFrame } from '@/components/image-text-icon-frame';
import { useMemo } from 'react';

/**
 * Menu 컴포넌트
 * 메뉴 클릭시 내부 경로 이동 또는 외부 URL로 연결
 * @component
 * @returns {JSX.Element}
 */

export default function Menu() {
  const navigate = useNavigate();

  const externalLinks = useMemo(
    () => ({
      instagramStudent: 'https://www.instagram.com/hanyang_erica_stu/',
      instagramLikelion: 'https://www.instagram.com/likelion_erica/',
      googleForm: 'https://forms.gle/2YmD7kKm1YJSmQSF7',
      linkTree:
        'https://linktr.ee/hanyangericastu?fbclid=PAZXh0bgNhZW0CMTEAAadthHc2bzHYTJpR9bKdWqWf5dkrhAQ4keGj3co0OaEQFbvxfv_pwv7r_6pQLw_aem_cSOQAKzd9acl-2z3bVSdmQ',
    }),
    [],
  );

  return (
    <S.SectionContainer>
      <S.Section>
        <S.SubTitle>SNS</S.SubTitle>
        <S.Frame>
          <ImageTextIconFrame
            image="./"
            title="총학생회 인스타그램 바로가기"
            description="축제 공지를 한눈에 보아요"
            onClick={() => (window.location.href = externalLinks.instagramStudent)}
          />
          <ImageTextIconFrame
            image="./"
            title="멋사 보러가볼까"
            description="멋사 인스타그램 바로가기"
            onClick={() => (window.location.href = externalLinks.instagramLikelion)}
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
            onClick={() => navigate('/main/lost')}
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
            onClick={() => (window.location.href = externalLinks.linkTree)}
          />
          <ImageTextIconFrame
            image="./"
            title="축제 FAQ"
            description="총학생회 인스타그램"
            onClick={() => (window.location.href = externalLinks.linkTree)}
          />
        </S.Frame>
      </S.Section>

      <S.Section>
        <ImageTextIconFrame
          image="./"
          title="축제 웹앱 사용후기"
          description="구글폼 링크"
          onClick={() => (window.location.href = externalLinks.googleForm)}
        />
      </S.Section>
    </S.SectionContainer>
  );
}
