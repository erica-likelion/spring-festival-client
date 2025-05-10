import * as S from './NoticeCard.styles';
import { ColorButton } from '@/components/colorbuttons';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';
import React from 'react';
import { NoticeBodyProps } from '../../notice/Notice.types';
import { truncateText } from '@/utils/truncateText';

function NoticeCard({ title, body, tags = [] }: NoticeBodyProps) {
  const truncatedTitle = truncateText(title, 30);
  const truncatedBody = truncateText(body, 35);

  return (
    <S.Container>
      <S.HeaderSection>
        <S.TagWrapper>
          {tags.map((tag, index) => (
            <ColorButton key={index} backgroundColor={tag.color as ColorKey} label={tag.text} />
          ))}
        </S.TagWrapper>
      </S.HeaderSection>
      <S.InfoSection>
        <S.TextWrapper>
          <S.EventTitle>{truncatedTitle}</S.EventTitle>

          <S.EventText>{truncatedBody}</S.EventText>
        </S.TextWrapper>
      </S.InfoSection>
    </S.Container>
  );
}

export default React.memo(NoticeCard);
