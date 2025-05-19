/**
 * 애니메이션 설정
 * @param {number} direction - 이동 방향
 * @returns {object} - 애니메이션 설정
 */

export const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.1,
    opacity: 0,
    position: 'absolute' as const,
  }),
  active: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 5,
    position: 'absolute' as const,
  },
  next1: {
    x: 8,
    y: 8,
    opacity: 0.6,
    position: 'absolute' as const,
    zIndex: 4,
  },
  next2: {
    x: 16,
    y: 16,
    opacity: 0.3,
    position: 'absolute' as const,
    zIndex: 3,
  },
  next3: {
    x: 24,
    y: 24,
    opacity: 0.1,
    position: 'absolute' as const,
    zIndex: 2,
  },
  hidden: {
    x: '-400%',
    opacity: 0,
    display: 'none',
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 1.3,
    zIndex: 5,
    position: 'absolute' as const,
  }),
  prev1: {
    x: -800,
    y: 8,
    opacity: 0.8,
    position: 'absolute' as const,
    zIndex: 6,
  },
  prev2: {
    x: -800,
    y: 16,
    opacity: 0.3,
    position: 'absolute' as const,
    zIndex: 6,
  },
  prev3: {
    x: -800,
    y: 24,
    opacity: 0.1,
    position: 'absolute' as const,
    zIndex: 6,
  },
};

/**
 * 지속 시간, 가속도 곡선 설정
 */
export const sliderTransition = {
  duration: 0.5,
  ease: [0.45, 0, 0.55, 1],
};
