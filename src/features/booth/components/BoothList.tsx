import { OpenAlert } from '@/features/alarm';
import * as S from './BoothList.styles';
import { ImageTextFrameWithOrganization } from '@/components/image-text-frame';
import { Notification } from '@/components/notification';
export default function BoothList() {
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
          />
          <S.HorizontalLine />
        </S.BoothItem>
      </S.BoothList>
    </S.Container>
  );
}
