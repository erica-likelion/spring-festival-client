import Card from '@/features/main/components/madeby/Card';
import * as S from './MadeBy.styles';
import Logo from '@/assets/images/madeby/madeby_logo.webp';
import Mock from '@/assets/images/madeby/madeby_image.webp';
import { allMembers } from '@/constants/main/Members';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';
import { NavBar } from '@/components/nav-bar';

/**
 * MadeBy 컴포넌트
 * @returns {JSX.Element}
 */

export default function MadeBy() {
  const parts = ['기획&디자인', '프론트엔드', '백엔드'];
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);
  return (
    <S.Container>
      <NavBar title="만든 이들" isBack={true} />
      <S.Image src={Logo} alt="logo" />

      <S.Image2 src={Mock} alt="mock" />
      <S.TextWrap>
        <S.MainTitle>우리는 ‘멋쟁이사자처럼’ 동아리입니다.</S.MainTitle>
        <S.SubTitle>
          3개월간 기획부터 디자인, 개발까지 정성을 담아 봄축제 어플을 만들었습니다. 사용자들이 쉽고
          즐겁게 축제를 즐길 수 있도록 고민을 거듭해 팀원 모두가 각자의 역할에서 최선을 다해
          협업했습니다. 축제의 설렘을 어플 속에 고스란히 담아냈습니다. <br />
          <br />
          지금 여러분께 우리의 결과물을 자신 있게 소개합니다!
        </S.SubTitle>
      </S.TextWrap>
      <S.PartWrap>
        {parts.map((part) => {
          const members = allMembers.filter((member) => member.part === part);
          return (
            <S.PartBox key={part}>
              <S.PartTitle>{part}</S.PartTitle>
              <S.PartCard>
                {members.map((member, index) => (
                  <Card key={index} {...member} />
                ))}
              </S.PartCard>
            </S.PartBox>
          );
        })}
      </S.PartWrap>
    </S.Container>
  );
}
