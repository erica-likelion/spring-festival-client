import * as S from './LikeButton.styles';
import LikeIcon from '@/assets/icons/heart.svg?react';

export default function LikeButton({ id }: { id: number }) {
  console.log(id);
  return (
    <S.Button onClick={(e) => e.preventDefault()}>
      <LikeIcon />
      <S.Text>n</S.Text>
    </S.Button>
  );
}
