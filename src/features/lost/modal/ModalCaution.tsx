import { BlueButton } from '@/components/bluebuttons';
import * as S from './ModalCaution.styles';
import { ModalCautionProps } from './ModalCaution.types';

/**
 * ModalCaution 컴포넌트
 * @param {ModalCautionProps} props - Props for the ModalCaution component
 * @param {string} title - 제목
 * @param {() => void} props.onConfirm - 클릭 이벤트 핸들러
 * @returns {JSX.Element} - Rendered ModalCaution component
 */

export default function ModalCaution({ onConfirm }: ModalCautionProps) {
  return (
    <S.Container>
      <S.Title>정확한 내용을 작성하셨나요?</S.Title>
      <S.TextWrap>
        <S.Text>한 번 등록된 분실물은 다시 수정하거나</S.Text>
        <S.Text>삭제할 수 없어요. 이렇게 등록할까요?</S.Text>
      </S.TextWrap>
      <BlueButton label="등록하기" size="large" onClick={onConfirm} />
    </S.Container>
  );
}
