export type TimeSelectProps = {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  time: string;
  setTime: (time: string) => void;
  selectOpen: boolean;
  setSelectOpen: (open: boolean) => void;
};
