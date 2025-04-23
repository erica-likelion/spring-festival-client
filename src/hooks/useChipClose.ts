import { useState, useCallback } from 'react';

export function useChipClose(initialChips: string[]) {
  const [chips, setChips] = useState(initialChips);

  const handleChipClose = useCallback((chip: string) => {
    setChips((prev) => prev.filter((c) => c !== chip));
  }, []);

  return {
    chips,
    handleChipClose,
    setChips,
  };
}
