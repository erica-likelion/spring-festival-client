import React from 'react';
import { NoticeData } from '@/constants/main/Notice';
import NoticeCard from '../cards/NoticeCard';
import * as S from './NoticeSlider.styles';
import { useNavigate } from 'react-router-dom';

/**
 * NoticeSlider 컴포넌트
 * 공지사항 데이터 슬라이더 형태로 구현현
 * 각 카드 클릭 시 해당 공지사항의 상세 페이지로 이동
 * @component
 * @returns {JSX.Element} 공지사항 슬라이더 컴포넌트
 */

function NoticeSlicer() {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        {NoticeData.map((notice) => (
          <NoticeCard
            key={`notice${notice.id}`}
            title={notice.title}
            tags={notice.tags}
            body={notice.body}
            onClick={() => navigate(`/main/notice/${notice.id}`)}
          />
        ))}
      </S.Container>
    </>
  );
}

export default React.memo(NoticeSlicer);
