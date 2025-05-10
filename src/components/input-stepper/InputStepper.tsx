import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import * as S from './InputStepper.styles';
import MinusIcon from '@/assets/icons/minus.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';

/**
 * 숫자 입력을 위한 스테퍼 컴포넌트
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {(value: number) => void} props.setValue - 숫자 값이 변경될 때 호출되는 콜백 함수
 * @returns {JSX.Element} 스테퍼 컴포넌트
 *
 * @example
 * ```tsx
 * const [value, setValue] = useState(0);
 * <InputStepper setValue={setValue} />
 * ```
 */
export default function InputStepper({
  setValue,
  value,
}: {
  setValue: (value: number) => void;
  value: number;
}) {
  const [isEdit, setIsEdit] = useState(false);

  const handleIncrement = () => {
    if (value < 12) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <S.Container>
      <S.Button onClick={handleDecrement} whileTap={{ scale: 0.9 }}>
        <MinusIcon fill={value === 0 ? '#64686A' : '#fafafa'} width={'1.5rem'} height={'1.5rem'} />
      </S.Button>
      <AnimatePresence mode="wait">
        <S.InputField onClick={() => setIsEdit(true)}>
          {isEdit ? (
            <S.InputFieldInput
              type="number"
              autoFocus
              value={value}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (!isNaN(val) && val >= 0 && val <= 12) {
                  setValue(val);
                }
              }}
              onBlur={() => setIsEdit(false)}
              min={0}
              max={12}
            />
          ) : (
            <S.InputFieldText
              key={value}
              variants={{
                initial: (custom: number) => ({ y: custom > 0 ? -10 : 10, opacity: 0 }),
                animate: { y: 0, opacity: 1 },
                exit: (custom: number) => ({ y: custom > 0 ? 10 : -10, opacity: 0 }),
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {value}
            </S.InputFieldText>
          )}
        </S.InputField>
      </AnimatePresence>
      <S.Button onClick={handleIncrement} whileTap={{ scale: 0.9 }}>
        <PlusIcon fill={value === 12 ? '#64686A' : '#fafafa'} />
      </S.Button>
    </S.Container>
  );
}
