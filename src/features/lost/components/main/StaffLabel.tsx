import * as S from './StaffLabel.styles';
import { StaffLabelType } from './StaffLabel.types';

export default function StaffLabel({ absolute }: StaffLabelType) {
  return (
    <S.StaffLabel $absolute={absolute}>
      <S.LabelText>STAFF 전달</S.LabelText>
    </S.StaffLabel>
  );
}
