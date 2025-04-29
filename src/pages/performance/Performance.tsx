import * as S from './Performance.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';
import { Notification } from '@/components/notification';
import { Tabs } from '@/components/tabs';
import { ImageTextIconFrame } from '@/components/image-text-icon-frame';
import HelpIcon from '@/assets/icons/help_gy600.svg?react';
import { Carousel } from '@/features/performance';
import { performanceData } from '@/constants/performance/SingerInfo';

export type DayType = '1일차' | '2일차' | '3일차';

export default function Performance() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<DayType>('1일차');
  const performances = performanceData[selectedDay];
  return (
    <S.PerformanceContainer>
      <NavBar isBack={false} />
      <S.InfoWrap>
        <S.TodayPerformanceText>오늘의 공연</S.TodayPerformanceText>
        <Notification title="미성년자 입장 제한 안내" />
      </S.InfoWrap>
      <S.DayWrap>
        <S.TextWrap>
          <S.StartText>공연 시작 17:00시</S.StartText>
          <HelpIcon width={'1.125rem'} height={'1.125rem'} />
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
            onClick={() => navigate('/main/notice/detail')}
          />
        </S.FrameBox>
      </S.TableNoteWrap>
    </S.PerformanceContainer>
  );
}
