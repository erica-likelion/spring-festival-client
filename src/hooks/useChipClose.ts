import { useState, useCallback } from 'react';

/**
 * Custom React hook to manage a list of chips
 *
 * @param {string[]} initialChips - The initial list of chip values.
 * @returns {{
 *   chips: string[],
 *   handleChipClose: (chip: string) => void,
 *   setChips: React.Dispatch<React.SetStateAction<string[]>>
 * }}
 *
 * @example
 * const { chips, handleChipClose, setChips } = useChipClose(['React', 'Vue']);
 * handleChipClose('Vue'); // Removes 'Vue' from the chips
 */

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
