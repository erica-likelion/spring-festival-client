import * as S from './NoticeText.styles';

interface NoticeTextProps {
  image?: string;
  title: string;
  body: string;
}
/**
 * 텍스트 55자 까지만 허용
 * @param {string} text - 원본 텍스트
 * @param {number} maxLength - 최대 표시할 글자 수
 * @returns {string}
 */

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

export default function NoticeText({ image, title, body }: NoticeTextProps) {
  const truncatedBody = truncateText(body, 55);

  return (
    <>
      <S.Container>
        <S.Image src={image} alt="notice" />
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.body>{truncatedBody}</S.body>
        </S.TextWrapper>
      </S.Container>
    </>
  );
}
