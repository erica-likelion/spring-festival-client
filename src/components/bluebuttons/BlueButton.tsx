import { StyledButton } from './BlueButton.style';
import { BlueButtonProps } from './BlueButton.types';

/**
 * 디자인 시스템 기반의 공통 BlueButton 컴포넌트입니다.
 * 사용자 정의 텍스트(label)를 표시하며, 클릭 시 onClick 함수를 실행합니다.
 * `isBigger` 값에 따라 스타일(폰트, 패딩, 테두리)이 달라집니다.
 *
 * @param string label - 버튼에 표시될 텍스트
 * @param {boolean} [disabled=false] - 버튼 비활성화 여부
 * @param {boolean} [isBigger=true] - 버튼 크기 여부 (기본: true)
 * @param {function} [onClick] - 버튼 클릭 시 실행할 콜백 함수
 *
 * @returns {React.ReactElement} BlueButton 컴포넌트
 *
 * @example
 * // 기본 사용 예시
 * <BlueButton label={"등록하기"} onClick={() => navigate('/booth')} />
 *
 * @example
 * // 작은 버튼 + 비활성화
 * <BlueButton label={"웨이팅 취소"} isBigger={false} onClick={() => navigate('/booth')} />
 */

const BlueButton: React.FC<BlueButtonProps> = ({
  label,
  disabled = false,
  isBigger = true,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledButton $isBigger={isBigger} disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default BlueButton;
