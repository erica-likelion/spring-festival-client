export const Z_INDEX = {
  MAP: 0,
  MAP_OVERLAY: 100,
  CONTENTS: 200,
  HEADER: 300,
  RECENTER_BUTTON: 350,
  BOTTOM_SHEET: 400,
} as const;

type Z_INDEX_VALUES = (typeof Z_INDEX)[keyof typeof Z_INDEX];
type Z_INDEX_OBJECT = typeof Z_INDEX;

export type { Z_INDEX_VALUES, Z_INDEX_OBJECT };
export default Z_INDEX;
