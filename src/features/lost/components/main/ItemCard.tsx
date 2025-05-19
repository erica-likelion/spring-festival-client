import { LostItem } from './ItemList.types';
import LocationIcon from '@/assets/icons/geopoint.svg?react';
import * as S from './ItemCard.styles';
import StaffLabel from './StaffLabel';
import { theme } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

type ItemCardProps = {
  item: LostItem;
};

/**
 * 분실물 카드 컴포넌트
 * @param item Lostitem
 * @returns {JSX.Element}
 */

export default function ItemCard({ item }: ItemCardProps) {
  const navigate = useNavigate();

  const handleLink = () => {
    const encoded = encodeURIComponent(JSON.stringify(item));
    navigate(`/main/lost/post/${encoded}`);
  };
  return (
    <S.Card
      onClick={() => {
        handleLink();
      }}
    >
      <S.ImageBox $imageUrl={`${item.image}`}>
        {item.staffNotified && <StaffLabel absolute={true} />}
      </S.ImageBox>
      <S.ItemInfoBox>
        <S.ItemName>{item.name}</S.ItemName>
        <S.LocationBox>
          <LocationIcon
            width={'0.875rem'}
            height={'0.875rem'}
            fill={theme.colors.grayScale.gy200}
          />
          <S.LocationText>{item.foundLocation}</S.LocationText>
        </S.LocationBox>
      </S.ItemInfoBox>
    </S.Card>
  );
}
