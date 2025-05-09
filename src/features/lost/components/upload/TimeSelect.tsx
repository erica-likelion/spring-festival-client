import { Tabs } from '@/components/tabs';
import * as S from './TimeSelect.styles';
import Title from './Title';
import { TimeSelectProps } from './TimeSelect.types';

const TIME_OPTIONS = [
  '08:00 ~ 10:00',
  '10:00 ~ 12:00',
  '12:00 ~ 14:00',
  '14:00 ~ 16:00',
  '16:00 ~ 18:00',
  '18:00 ~ 20:00',
  '20:00 ~ 22:00',
  '22:00 ~ 24:00',
];

export default function TimeSelect({
  selectedDay,
  setSelectedDay,
  time,
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
            onTabClick={(tab) => setSelectedDay(tab)}
          />
        </S.DayButton>

        <S.TimeSelect>
          <S.DayTimeText>습득 시간</S.DayTimeText>
          <S.TimeSelectBox $open={selectOpen} onClick={() => setSelectOpen(!selectOpen)}>
            <S.SelectHeader>
              <S.TimeSelectOption>{time}</S.TimeSelectOption>
              <S.ArrowIcon $rotated={selectOpen} width={'1.5rem'} height={'1.5rem'} />
            </S.SelectHeader>
            <S.DropdownWrapper $open={selectOpen}>
              {TIME_OPTIONS.map((t) => (
                <S.DropdownItem
                  key={t}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTime(t);
                    setSelectOpen(false);
                  }}
                >
                  <S.TimeSelectOption>{t}</S.TimeSelectOption>
                </S.DropdownItem>
              ))}
            </S.DropdownWrapper>
          </S.TimeSelectBox>
        </S.TimeSelect>
      </S.DayTimeBox>
    </S.TimeBox>
  );
}
