import * as S from './NoticeText.styles';

interface NoticeTextProps {
  image: string;
  title: string;
  body: string;
}

/**
 * 텍스트 40자 까지만 허용
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

/**
 * 공지사항 텍스트 컴포넌트
 * @param {string} [image] - 공지사항 이미지
 * @param {string} title - 공지사항 제목
 * @param {string} body - 공지사항 본문
 * @returns {JSX.Element} 공지사항 텍스트 UI
 */

export default function NoticeText({ image, title, body }: NoticeTextProps) {
  const truncatedBody = truncateText(body, 40);

  return (
    <>
      <S.Container>
        <S.Image src={image} alt="notice" loading="lazy" />
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.body>{truncatedBody}</S.body>
        </S.TextWrapper>
      </S.Container>
    </>
  );
}
