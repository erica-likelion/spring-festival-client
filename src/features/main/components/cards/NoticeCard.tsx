import * as S from './NoticeCard.styles';
import { ColorButton } from '@/components/colorbuttons';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';
import React, { useState } from 'react';
import { NoticeBodyProps } from '../notice/Notice.types';
import { truncateText } from '@/utils/truncateText';

function NoticeCard({ title, body, tags = [], onClick, isFirst }: NoticeBodyProps) {
  const [isDragging, setIsDragging] = useState(false);
  const truncatedTitle = truncateText(title, 23);
  const truncatedBody = truncateText(body, 35);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (!isDragging && onClick) {
      onClick(); // 드래그가 아닌 경우 클릭 가능
    }
  };

  return (
    <S.Container
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      $isFirst={isFirst}
    >
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
