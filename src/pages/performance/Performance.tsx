import * as S from './Performance.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';
import { Notification } from '@/components/notification';
import { Tabs } from '@/components/tabs';
import { ImageTextIconFrame } from '@/components/image-text-icon-frame';
import { Carousel } from '@/features/performance';
import { performanceData } from '@/constants/performance/SingerInfo';
import { ModalHelp } from '@/features/performance';
import useModal from '@/hooks/useModal';

export type DayType = '1일차' | '2일차' | '3일차';

/**
 * Performance 페이지
 * @returns {JSX.Element}
 */

export default function Performance() {
  const { open } = useModal(ModalHelp);
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<DayType>('1일차');
  const performances = performanceData[selectedDay];

  const handleHelpClick = () => {
    open(
      {
        title: '공연 정보 제공 안내',
      },
      {
        isHelpIcon: true,
      },
    );
  };
  return (
    <S.PerformanceContainer>
      <NavBar isBack={false} />
      <S.InfoWrap>
        <S.TodayPerformanceText>오늘의 공연</S.TodayPerformanceText>
        <Notification
          title="[공지] 공연관람 유의사항"
          onClick={() => navigate('/main/notice/25')}
        />
      </S.InfoWrap>
      <S.DayWrap>
        <S.TextWrap>
          <S.StartText>{`공연 시작 17:${selectedDay === '1일차' ? '00' : '30'}시`}</S.StartText>
          <S.HelpIconStyled onClick={() => handleHelpClick()} />
        </S.TextWrap>
        <Tabs
          tabs={['1일차', '2일차', '3일차']}
          activeTab={selectedDay}
          onTabClick={(tab) => setSelectedDay(tab as DayType)}
        />
      </S.DayWrap>

      <S.Carousel>
        <Carousel data={performances} />
      </S.Carousel>
      <S.TableNoteWrap>
        <S.NoteText>공연 유의사항</S.NoteText>
        <S.FrameBox>
          <ImageTextIconFrame
            image=""
            title="전체 타임 테이블 확인하기"
            description="공연 일정 한 번에 확인하기"
            onClick={() => navigate('/performance/timetable')}
          />
          <ImageTextIconFrame
            image=""
            title="❗️공연 유의사항 보러가기"
            description="공연 보기 전 필독!"
            onClick={() => navigate('/main/notice/25')}
          />
        </S.FrameBox>
      </S.TableNoteWrap>
    </S.PerformanceContainer>
  );
}
