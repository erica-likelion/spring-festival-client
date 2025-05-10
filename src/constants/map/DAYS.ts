const days = ['1일차', '2일차', '3일차'] as const;
type DAYS = (typeof days)[number];

export { days };
export type { DAYS };
