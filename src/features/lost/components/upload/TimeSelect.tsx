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

/**
 * 분실물 등록하기 TimeSelect 컴포넌트
 * @param {TimeSelectProps} props - Props for the TimeSelect component
 * @param {string} selectedDay - 선택된 날짜
 * @param {React.Dispatch<React.SetStateAction<string>>} setSelectedDay - 날짜 선택 함수
 * @param {string} time - 선택된 시간
 * @param {React.Dispatch<React.SetStateAction<string>>} setTime - 시간 선택 함수
 * @param {boolean} selectOpen - 드롭다운 열림 여부
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setSelectOpen - 드롭다운 열림 함수
 * @returns {JSX.Element}
 */

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
