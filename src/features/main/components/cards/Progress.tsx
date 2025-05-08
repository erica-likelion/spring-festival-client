import { useState, useEffect } from 'react';
import * as S from './Progress.styles';
import { ProgressProps } from './EventCard.types';

export default function Progress({ startTime, endTime }: ProgressProps) {
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      if (!startTime || !endTime) return;

      const now = new Date();

      const [startHour, startMinute] = startTime.split(':').map(Number);
      const [endHour, endMinute] = endTime.split(':').map(Number);

      const startDate = new Date();
      startDate.setHours(startHour, startMinute, 0);

      const endDate = new Date();
      endDate.setHours(endHour, endMinute, 0);

      // 이벤트가 시작하기 전인 경우
      if (now.getTime() < startDate.getTime()) {
        setActiveCount(0);
        return;
      }

      // 이벤트가 끝난 경우
      if (now.getTime() > endDate.getTime()) {
        setActiveCount(15);
        return;
      }

      const totalDuration = endDate.getTime() - startDate.getTime();
      const timeDuration = now.getTime() - startDate.getTime();
      const progressRatio = timeDuration / totalDuration;

      const active = Math.floor(progressRatio * 15);
      setActiveCount(active);
    };

    calculateProgress();

    const intervalId = setInterval(calculateProgress, 300000);

    return () => clearInterval(intervalId);
  }, [startTime, endTime]);

  return (
    <S.Container>
      {Array.from({ length: 15 }, (_, index) =>
        index < activeCount ? (
          <S.Active key={`active-${index}`} />
        ) : (
          <S.InActive key={`inactive-${index}`} />
        ),
      )}
    </S.Container>
  );
}
