import { OpenAlert } from '@/features/alarm';
import * as S from './BoothList.styles';
import { ImageTextFrameWithOrganization } from '@/components/image-text-frame';
import { Notification } from '@/components/notification';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BoothList() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <S.Container>
      <Notification title="[공지] 미성년자 입장 불가" width="100%" />
      <S.Header>
        <S.Count>전체 00개</S.Count>
        <OpenAlert />
      </S.Header>
      <S.BoothList>
        <S.BoothItem>
          <ImageTextFrameWithOrganization
            width="100%"
            image={''}
            title={'PubName'}
            organization={'organization Name'}
            canPickup={true}
            onClick={() =>
              navigate(`/booth/${1}`, { state: { from: location.pathname + location.search } })
            }
          />
          <S.HorizontalLine />
        </S.BoothItem>
      </S.BoothList>
    </S.Container>
  );
}
