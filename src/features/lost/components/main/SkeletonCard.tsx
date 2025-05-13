import * as S from './SkeletonCard.styles';

export default function SkeletonCard() {
  return (
    <S.Card>
      <S.SkeletonImage
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <S.SkeletonInfo>
        <S.SkeletonName
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <S.SkeletonText
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </S.SkeletonInfo>
    </S.Card>
  );
}
