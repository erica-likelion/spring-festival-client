import { StyledButton } from './BlueButton.style';
import { useNavigate } from 'react-router-dom';

interface BlueButtonProps {
  label: string;
  disabled?: boolean;
  isBigger?: boolean;
  href?: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({
  label,
  disabled = true,
  isBigger = true,
  href,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled && href) {
      navigate(href);
    }
  };

  return (
    <StyledButton $isBigger={isBigger} $disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default BlueButton;
