import * as S from './Performance.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';
import { Notification } from '@/components/notification';
import { Tabs } from '@/components/tabs';
import { ImageTextIconFrame } from '@/components/image-text-icon-frame';
import HelpIcon from '@/assets/icons/help_gy600.svg?react';
import TimeIcon from '@/assets/icons/time_gy200.svg?react';
import AlertIcon from '@/assets/icons/alert.svg?react';
import { Carousel } from '@/features/performance';

export default function Performance() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<string>('1일차');

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
          onTabClick={setSelectedDay}
        />
      </S.DayWrap>

      <S.Carousel>
        <Carousel />
        <S.SingerTimeWrap>
          <S.SingerName>뉴진스</S.SingerName>
          <S.TimeBox>
            <TimeIcon width={'1.125rem'} height={'1.125rem'} />
            <S.TimeText>21:00~22:00</S.TimeText>
          </S.TimeBox>
          <S.AlertBox>
            <AlertIcon width={'1rem'} height={'1rem'} />
            <S.AlertText>알림 받기</S.AlertText>
          </S.AlertBox>
        </S.SingerTimeWrap>
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
