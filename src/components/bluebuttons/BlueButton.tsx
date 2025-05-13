import { StyledButton } from './BlueButton.style';
import { BlueButtonProps } from './BlueButton.types';

/**
 * 디자인 시스템 기반의 공통 BlueButton 컴포넌트입니다.
 * 사용자 정의 텍스트(label)를 표시하며, 클릭 시 onClick 함수를 실행합니다.
 * `size` 값에 따라 스타일(폰트, 패딩, 너비, 테두리)이 달라집니다.
 *
 * @param {string} label - 버튼에 표시될 텍스트
 * @param {boolean} [disabled=false] - 버튼 비활성화 여부
 * @param {'small' | 'large' | 'large-header'} [size='large'] - 버튼 크기 및 스타일
 * @param {function} [onClick] - 버튼 클릭 시 실행할 콜백 함수
 *
 * @returns {React.ReactElement} BlueButton 컴포넌트
 *
 * @example
 * <BlueButton label="로그인" size="large" onClick={handleClick} />
      <BlueButton label="등록하러 가기" size="large-header" disabled={true} onClick={handleClick} />
      <BlueButton label="등록하러 가기" size="large-header" onClick={handleClick} />
      <BlueButton label="웨이팅 취소" size="small" onClick={handleClick} />
 */
const BlueButton: React.FC<BlueButtonProps> = ({
  label,
  disabled = false,
  size = 'large',
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <StyledButton $size={size} disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default BlueButton;
