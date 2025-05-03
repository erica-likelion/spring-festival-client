import { StyledButton } from './BlueButton.style';
import { BlueButtonProps } from './BlueButton.types';

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
    <StyledButton $isBigger={isBigger} $disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default BlueButton;
