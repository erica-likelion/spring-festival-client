import { theme } from '@/styles/theme';
import * as S from './Title.styles';
import CircleIcon from '@/assets/icons/eclipse.svg?react';

/**
 * 분실물 등록하기 Title 컴포넌트
 * @param {string} title - 제목
 * @returns {JSX.Element}
 */

export default function Title({ title }: { title: string }) {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
      <CircleIcon width={'0.5rem'} height={'0.5rem'} fill={theme.colors.primary.bl400} />
    </S.Container>
  );
}
