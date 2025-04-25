export type CSSWidthValue = `${number}${'px' | 'rem' | 'em' | '%' | 'vh' | 'vw'}` | 'auto' | '100%';

export type CSSMarginValue =
  | `${number}${'px' | 'rem' | 'em' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax'}`
  | 'auto'
  | '0'
  | `calc(${string})`
  | `clamp(${string})`
  | 'inherit'
  | 'initial'
  | 'unset';
