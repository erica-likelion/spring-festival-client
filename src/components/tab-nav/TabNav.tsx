import { TabNavProps } from '@/components/tab-nav/TabNav.type';
import * as S from './TabNav.styles';

export default function TabNav({ tabs }: TabNavProps) {
  return (
    <S.Container>
      <S.Nav>
        <S.List>
          {tabs.map((item) => (
            <S.Item key={item.label} onClick={() => {}}>
              {item.label}
              {item.label === '랭킹' ? <S.Underline layoutId="underline" id="underline" /> : null}
            </S.Item>
          ))}
        </S.List>
      </S.Nav>
    </S.Container>
  );
}
