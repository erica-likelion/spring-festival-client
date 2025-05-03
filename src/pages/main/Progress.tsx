import { useState, useEffect } from 'react';
import * as S from './Progress.styles';

export default function Progress({ startTime, endTime }: { startTime: string; endTime: string }) {
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const now = new Date();
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const startDate = new Date();
    startDate.setHours(startHour, startMinute, 0);

    const endDate = new Date();
    endDate.setHours(endHour, endMinute, 0);

    const totalDuration = endDate.getTime() - startDate.getTime();

    if (totalDuration <= 0) {
      setActiveCount(0);
      return;
    }

    const timeDuration = now.getTime() - startDate.getTime();

    if (timeDuration <= 0) {
      setActiveCount(0);
      return;
    }

    if (timeDuration >= totalDuration) {
      setActiveCount(15);
      return;
    }

    const progressRatio = timeDuration / totalDuration;
    const active = Math.floor(progressRatio * 15);
    setActiveCount(active);
  }, [startTime, endTime]);

  return (
    <S.Container>
      {Array.from({ length: 15 }, (_, index) =>
        index < activeCount ? <S.Active key={index} /> : <S.InActive key={index} />,
      )}
    </S.Container>
  );
}
