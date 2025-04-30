import * as S from './TimeTable.styles';
import ClockIcon from '@/assets/icons/clock.svg?react';
import { singers, time } from '@/constants/performance/SingerList';
import { useEffect, useState } from 'react';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { NavBar } from '@/components/nav-bar';
import TabNav from '@/components/tab-nav';

/**
 * TimeTable component
 * @returns {JSX.Element}
 */

const TABS = ['1일차', '2일차', '3일차'] as const;

export default function TimeTable() {
  const [selectedDay, setSelectedDay] = useState<'1일차' | '2일차' | '3일차'>('1일차');
  const [currentTime, setCurrentTime] = useState(new Date());
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const currentPerformances = singers[selectedDay];
  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isNowPlaying = (start: string, end: string) => {
    const [startHour, startMin] = start.split(':').map(Number);
    const [endHour, endMin] = end.split(':').map(Number);

    const startTotal = startHour * 60 + startMin;
    const endTotal = endHour * 60 + endMin;
    const nowTotal = currentTime.getHours() * 60 + currentTime.getMinutes();

    return nowTotal >= startTotal && nowTotal < endTotal;
  };

  const calculateDurationInBlocks = (start: string, end: string) => {
    const [startHour, startMin] = start.split(':').map(Number);
    const [endHour, endMin] = end.split(':').map(Number);

    const startTotalMinutes = startHour * 60 + startMin;
    const endTotalMinutes = endHour * 60 + endMin;

    const diffMinutes = endTotalMinutes - startTotalMinutes;

    return diffMinutes / 30;
  };

  return (
    <S.Container>
      <NavBar isBack={true} title="타임테이블" />
      <TabNav tabs={TABS} currentStep={selectedDay} setStep={setSelectedDay} />
      <S.TimeWrap>
        <S.Divider />
        {time.map((t, index) => (
          <div key={index}>
            <S.Time>{t}</S.Time>
            <S.Divider />
          </div>
        ))}
        <S.TimeTable key={selectedDay}>
          {currentPerformances.map((performance, index) => {
            const durationBlocks = calculateDurationInBlocks(performance.start, performance.end);
            const active = isNowPlaying(performance.start, performance.end);

            return (
              <S.BoxWrap key={index} block={durationBlocks} isFirst={index === 0}>
                <S.Wrap>
                  <S.TimeBox isActive={active} isEmpty={!performance.name} />
                  <S.ContentBox isActive={active} isEmpty={!performance.name}>
                    {performance.name && (
                      <S.PerformanceNameTimeBox>
                        <S.PerformanceName>{performance.name}</S.PerformanceName>
                        <S.PerformanceTime>
                          <ClockIcon width="1.125rem" height="1.125rem" />
                          {performance.start}~{performance.end}
                        </S.PerformanceTime>
                      </S.PerformanceNameTimeBox>
                    )}
                  </S.ContentBox>
                </S.Wrap>
              </S.BoxWrap>
            );
          })}
        </S.TimeTable>
      </S.TimeWrap>
    </S.Container>
  );
}
