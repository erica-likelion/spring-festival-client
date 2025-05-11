import * as S from './Description.styles';

/**
 * 분실물 등록하기 Description 컴포넌트
 * @param {string} text - 설명
 * @returns {JSX.Element}
 */

export default function Description({ text }: { text: string }) {
  return <S.Text>{text}</S.Text>;
}
