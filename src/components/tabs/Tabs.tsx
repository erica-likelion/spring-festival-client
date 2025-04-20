import * as S from './Tabs.styles';

export default function Tabs() {
  const data = ['1일차', '2일차', '3일차', '베스트 메뉴', '추천 메뉴', '인기 메뉴', '음료', '세트'];
  return (
    <S.TabsContainer>
      {data.map((item, index) => (
        <S.Tab key={index} isActive={index === 0}>
          <S.TabText isActive={index === 0}>{item}</S.TabText>
        </S.Tab>
      ))}
    </S.TabsContainer>
  );
}
