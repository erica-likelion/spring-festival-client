import * as S from './NoticeText.styles';

interface NoticeTextProps {
  image: string;
  title: string;
  body: string;
}

export default function NoticeText({ image, title, body }: NoticeTextProps) {
  return (
    <>
      <S.Container>
        <S.Image src={image} alt="notice" />
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.body>{body}</S.body>
        </S.TextWrapper>
      </S.Container>
    </>
  );
}
