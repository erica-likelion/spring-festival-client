import { LostItem } from './ItemList.types';
import LocationIcon from '@/assets/icons/geopoint_gy200.svg?react';
import * as S from './ItemCard.styles';
import StaffLabel from './StaffLabel';

type ItemCardProps = {
  item: LostItem;
};

/**
 * 분실물 카드 컴포넌트
 * @param item Lostitem
 * @returns {JSX.Element}
 */

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <S.Card>
      <S.ImageBox $imageUrl={item.imageUrl}>
        {item.isDeliveredToStaff && <StaffLabel absolute={true} />}
      </S.ImageBox>
      <S.ItemInfoBox>
        <S.ItemName>{item.name}</S.ItemName>
        <S.LocationBox>
          <LocationIcon width={'0.875rem'} height={'0.875rem'} />
          <S.LocationText>{item.location}</S.LocationText>
        </S.LocationBox>
      </S.ItemInfoBox>
    </S.Card>
  );
}
