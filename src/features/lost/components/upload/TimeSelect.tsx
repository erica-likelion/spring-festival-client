import { Tabs } from '@/components/tabs';
import * as S from './TimeSelect.styles';
import Title from './Title';
import { theme } from '@/styles/theme';
import { TimeSelectProps } from './TimeSelect.types';

export default function TimeSelect({
  selectedDay,
  setSelectedDay,
  time,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTime,
  selectOpen,
  setSelectOpen,
}: TimeSelectProps) {
  return (
    <S.TimeBox>
      <Title title="습득 시간" />
      <S.DayTimeBox>
        <S.DayButton>
          <S.DayTimeText>습득 일자</S.DayTimeText>
          <Tabs
            tabs={['1일차', '2일차', '3일차']}
            activeTab={selectedDay}
            onTabClick={(tabs) => setSelectedDay(tabs)}
          />
        </S.DayButton>
        <S.TimeSelect>
          <S.DayTimeText>습득 시간</S.DayTimeText>
          <S.TimeSelectBox>
            <S.TimeSelectOption>{time}</S.TimeSelectOption>
            <S.ArrowIcon
              width="1.5rem"
              height="1.5rem"
              fill={theme.colors.grayScale.white}
              onClick={() => setSelectOpen(!selectOpen)}
              $rotated={selectOpen}
            />
          </S.TimeSelectBox>
        </S.TimeSelect>
      </S.DayTimeBox>
    </S.TimeBox>
  );
}
