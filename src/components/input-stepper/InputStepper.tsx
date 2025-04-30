import { AnimatePresence, useMotionValue, animate } from 'framer-motion';
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
export default function InputStepper({ setValue }: { setValue: (value: number) => void }) {
  const value = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isEdit, setIsEdit] = useState(false);

  const handleIncrement = () => {
    const current = Math.round(value.get());
    if (current < 12) {
      setDirection(1);
      animate(value, current + 1, {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      });
      setValue(current + 1);
    }
  };

  const handleDecrement = () => {
    const current = Math.round(value.get());
    if (current > 0) {
      setDirection(-1);
      animate(value, current - 1, {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      });
      setValue(current - 1);
    }
  };

  value.on('change', (v) => {
    setDisplayValue(Math.round(v));
  });

  return (
    <S.Container>
      <S.Button onClick={handleDecrement} whileTap={{ scale: 0.9 }}>
        <MinusIcon
          fill={Math.round(value.get()) === 0 ? '#fafafa' : '#17171B'}
          width={'1.5rem'}
          height={'1.5rem'}
        />
      </S.Button>
      <AnimatePresence mode="wait">
        <S.InputField onClick={() => setIsEdit(true)}>
          {isEdit ? (
            <S.InputFieldInput
              type="number"
              autoFocus
              value={displayValue}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (!isNaN(val) && val >= 0 && val <= 12) {
                  value.set(val);
                  setValue(val);
                }
              }}
              onBlur={() => setIsEdit(false)}
              min={0}
              max={12}
            />
          ) : (
            <S.InputFieldText
              key={displayValue}
              custom={direction}
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
              {displayValue}
            </S.InputFieldText>
          )}
        </S.InputField>
      </AnimatePresence>
      <S.Button onClick={handleIncrement} whileTap={{ scale: 0.9 }}>
        <PlusIcon fill="#fafafa" />
      </S.Button>
    </S.Container>
  );
}
