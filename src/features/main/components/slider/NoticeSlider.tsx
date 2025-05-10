import React from 'react';
import { NoticeData } from '@/constants/main/Notice';
import NoticeCard from '../cards/NoticeCard';
import * as S from './NoticeSlider.styles';
function NoticeSlicer() {
  return (
    <>
      <S.Container>
        {NoticeData.map((notice) => (
          <NoticeCard
            key={notice.id} // 고유한 key 설정
            title={notice.title}
            tags={notice.tags}
            body={notice.body}
          />
        ))}
      </S.Container>
    </>
  );
}

export default React.memo(NoticeSlicer);
