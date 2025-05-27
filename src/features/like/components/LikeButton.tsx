import { useRef, useState } from 'react';
import * as S from './LikeButton.styles';
import LikeIcon from '@/assets/icons/heart.svg?react';
import Lottie from 'react-lottie-player';
import ONCE_CLICK from '@/assets/lotties/once_like.json';
import MULTIPLE_CLICK from '@/assets/lotties/multiple_like.json';
import { useLikeStore } from '@/features/like/stores/useLikeStore';
import { dotFormatter } from '@/utils/priceFormatter';

type AnimInstance = {
  id: number;
  data: object;
};

export default function LikeButton({
  id,
  top = '-5.14rem',
  left = '-1.24rem',
}: {
  id: number;
  top?: string;
  left?: string;
}) {
  const clickTimeRef = useRef<number | null>(null);
  const animIdRef = useRef(0);
  const [animations, setAnimations] = useState<AnimInstance[]>([]);
  const likes = useLikeStore((state) => state.likes).find((like) => like.id === id);
  const upLike = useLikeStore((state) => state.updateLikeCount);
  const [userLikeCount, setLikeCount] = useState(likes?.updateCount || 0);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const now = Date.now();

    let interval = null;
    if (clickTimeRef.current !== null) {
      interval = now - clickTimeRef.current;
    }
    clickTimeRef.current = now;

    const animData = interval !== null && interval < 1000 ? MULTIPLE_CLICK : ONCE_CLICK;

    const newAnim: AnimInstance = {
      id: animIdRef.current++,
      data: animData,
    };

    setLikeCount((prev) => prev + 1);
    upLike(id, userLikeCount + 1);
    setAnimations((prev) => [...prev, newAnim]);
  };

  const handleComplete = (id: number) => {
    setAnimations((prev) => prev.filter((anim) => anim.id !== id));
  };
  if (likes === undefined) return null;
  return (
    <S.Button onClick={handleClick}>
      <LikeIcon width="1.25rem" height="1.25rem" />
      {animations.map((anim) => (
        <Lottie
          key={anim.id}
          animationData={anim.data}
          play
          loop={false}
          onComplete={() => handleComplete(anim.id)}
          style={{
            width: '7rem',
            height: '7rem',
            position: 'absolute',
            top: top,
            left: left,
            pointerEvents: 'none',
          }}
        />
      ))}
      <S.Text>
        {likes?.likeCount + userLikeCount >= 10000000
          ? '9,999,999+'
          : dotFormatter(likes?.likeCount + userLikeCount)}
      </S.Text>
    </S.Button>
  );
}
