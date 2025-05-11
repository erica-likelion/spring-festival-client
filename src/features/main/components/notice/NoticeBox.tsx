import React from 'react';
import * as S from './NoticeBox.styles';
import { NoticeText } from '@/features/main/components/notice/index';
import { NoticeBoxProps } from './Notice.types';

function NoticeBox({ id, img, title, body, onClick }: NoticeBoxProps) {
  return (
    <>
      <S.NoticeBox onClick={() => onClick(id.toString())}>
        <NoticeText image={img} title={title} body={body} />
        <S.HorizontalLine>
          <S.Line />
        </S.HorizontalLine>
      </S.NoticeBox>
    </>
  );
}

export default React.memo(NoticeBox);
