import * as S from './NoticeBody.styles';
import { ColorButton } from '@/components/colorbuttons';
import { ColorKey } from '@/components/colorbuttons/ColorButton.types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NoticeBodyProps } from './Notice.types';

/**
 * 공지사항 상세 페이지의 본문
 * @param {Object} props - 컴포넌트의 props
 * @param {string} props.title - 제목
 * @param {{ text: string; color: string }[]} props.tags - 태그 배열
 * @param {string} props.body - 본문 내용 (마크다운)
 * @returns {JSX.Element}
 */

function NoticeBody({ title, tags, body }: NoticeBodyProps) {
  return (
    <>
      <S.Main>
        <S.Title>{title}</S.Title>
        <S.TagWrapper>
          {tags.map((tag, index) => (
            <ColorButton key={index} backgroundColor={tag.color as ColorKey} label={tag.text} />
          ))}
        </S.TagWrapper>
        <S.Body>
          <ReactMarkdown
            components={{
              a: ({ href, children }) => (
                <S.CustomLink href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </S.CustomLink>
              ),
            }}
          >
            {body}
          </ReactMarkdown>
        </S.Body>
      </S.Main>
    </>
  );
}

export default React.memo(NoticeBody);
