import * as S from './BoothList.styles';
import { ImageTextFrameWithOrganization } from '@/components/image-text-frame';
import { Notification } from '@/components/notification';
import { useNavigate, useLocation } from 'react-router-dom';
import { BOOTH_LIST } from '@/constants/booth/booth';
import { Fragment } from 'react/jsx-runtime';

export default function BoothList() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <S.Container>
      <Notification title="[공지] 미성년자 입장 불가" width="100%" />
      <S.Header>
        <S.Count>전체 26개</S.Count>
      </S.Header>
      <S.BoothList>
        <S.BoothItem>
          {BOOTH_LIST.map((booth) => {
            return (
              <Fragment key={booth.id}>
                <ImageTextFrameWithOrganization
                  key={booth.id}
                  width="100%"
                  image={booth.profileImage}
                  title={booth.pubName}
                  organization={booth.affiliation}
                  canPickup={booth.takeout}
                  onClick={() =>
                    navigate(`/booth/${booth.id}`, {
                      state: { from: location.pathname + location.search },
                    })
                  }
                />
                <S.HorizontalLine />
              </Fragment>
            );
          })}
        </S.BoothItem>
      </S.BoothList>
    </S.Container>
  );
}
