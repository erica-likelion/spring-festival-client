import { LostItem } from './ItemList.types';
import LocationIcon from '@/assets/icons/geopoint_gy200.svg?react';
import * as S from './ItemCard.styles';

type ItemCardProps = {
  item: LostItem;
};

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <S.Card>
      <S.ImageBox $imageUrl={item.imageUrl}>
        {item.isDeliveredToStaff && (
          <S.StaffLabel>
            <S.LabelText>STAFF 전달</S.LabelText>
          </S.StaffLabel>
        )}
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
