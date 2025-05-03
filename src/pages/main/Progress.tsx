import * as S from './Progress.styles';

export default function Progress({ startTime, endTime }: { startTime: string; endTime: string }) {
  return (
    <S.Container>
      {startTime} ~ {endTime}
    </S.Container>
  );
}
