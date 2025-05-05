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
    position: 'absolute' as const,
    zIndex: 5,
  },
  next1: {
    x: 8,
    y: 8,
    opacity: 0.8,
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
    scale: 0.9,
    position: 'absolute' as const,
  }),
  prev1: {
    x: -800,
    y: 8,
    opacity: 0.8,
    position: 'absolute' as const,
    zIndex: 4,
  },
  prev2: {
    x: -800,
    y: 16,
    opacity: 0.3,
    position: 'absolute' as const,
    zIndex: 3,
  },
  prev3: {
    x: -800,
    y: 24,
    opacity: 0.1,
    position: 'absolute' as const,
    zIndex: 2,
  },
};

export const sliderTransition = {
  duration: 0.5,
  ease: [0.56, 0.03, 0.12, 1.04],
};
