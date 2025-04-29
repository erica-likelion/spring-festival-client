import * as S from './Indicator.style';
interface IndicatorProps {
  totalPages: number;
  currentPage: number;
}
export default function Indicator({ totalPages, currentPage }: IndicatorProps) {
  const dots = [...Array(totalPages).keys()];

  return (
    <S.Container>
      {dots.map((index) => (
        <S.Dots key={index} isActive={index === currentPage} />
      ))}
    </S.Container>
  );
}
