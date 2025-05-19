import React, { useEffect, useRef, useState } from 'react';
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
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateConstraints = () => {
      if (sliderRef.current && wrapperRef.current) {
        const visible = wrapperRef.current.clientWidth; // 보이는부분 화면에
        const total = sliderRef.current.scrollWidth; // 슬라이더 전체 너비
        const padding = 15;

        setDragConstraints({
          left: visible - total + padding,
          right: 0,
        });
      }
    };

    updateConstraints();

    //크기 자동 감지
    const resize = new ResizeObserver(updateConstraints);
    if (wrapperRef.current) {
      resize.observe(wrapperRef.current);
    }

    return () => resize.disconnect();
  }, []);

  return (
    <S.SliderWrapper ref={wrapperRef}>
      <S.Container ref={sliderRef} drag="x" dragConstraints={dragConstraints}>
        <S.Box>
          {NoticeData.slice()
            .reverse()
            .map((notice, index) => (
              <NoticeCard
                key={`notice${notice.id}`}
                title={notice.title}
                tags={notice.tags}
                body={notice.body}
                onClick={() => navigate(`/main/notice/${notice.id}`)}
                isFirst={index === 0}
              />
            ))}
        </S.Box>
      </S.Container>
    </S.SliderWrapper>
  );
}

export default React.memo(NoticeSlicer);
