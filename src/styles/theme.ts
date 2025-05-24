import { css } from 'styled-components';

const createFontStyle = (
  size: number,
  weight: number,
  lineHeightPercent: number,
  letterSpacing: number = 0,
) => css`
  font-family:
    SUIT,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: ${size}rem;
  font-style: normal;
  font-weight: ${weight};
  line-height: ${lineHeightPercent}%;
  letter-spacing: ${letterSpacing}rem;
`;

const colors = {
  primary: {
    bl400: '#4F75F9',
  },
  secondary: {
    pk200: '#FBA7FD',
    ye200: '#F9F79F',
    rd500: '#F55353',
    gr500: '#45E02A',
    bl500: '#3A64F8',
    or100: '#FFDCBC',
    pp100: '#E1DAFF',
    gr130: '#C1E1CB',
    yl140: '#FBFFC9',
    bl130: '#BAE0FF',
    rd090: '#FECFD9',
    pk100: '#F5D5FF',
  },
  grayScale: {
    white: '#FAFAFA',
    offwhite: '#F5F5F5',
    gy50: '#F4F4F4',
    gy100: '#E9E9EA',
    gy200: '#D3D4D4',
    gy300: '#BCBEBF',
    gy400: '#A6A9AA',
    gy500: '#909394',
    gy600: '#7A7D7F',
    gy700: '#64686A',
    gy800: '#4D5255',
    gy900: '#373D3F',
    gy950: '#212526',
    black: '#17171B',
  },
};

const fonts = {
  body: {
    large400: createFontStyle(1.125, 400, 154, -0.0225),
    large500: createFontStyle(1.125, 500, 154, -0.0225),
    medium400: createFontStyle(1, 400, 150, -0.02),
    medium500: createFontStyle(1, 500, 150, -0.02),
    small400: createFontStyle(0.875, 400, 142, -0.0175),
    small500: createFontStyle(0.875, 500, 142, -0.0175),
    xsmall400: createFontStyle(0.75, 400, 150, -0.015),
    xsmall500: createFontStyle(0.75, 500, 150, -0.015),
  },
  header: {
    h1: createFontStyle(1.75, 700, 130, -0.035),
    h2: createFontStyle(1.5, 700, 134, -0.03),
    h3: createFontStyle(1.25, 700, 142, -0.025),
    h4: createFontStyle(1, 700, 150, -0.02),
  },
};

const effects = {
  dropShadow: {
    ds100: css`
      box-shadow: 0px 0px 4px 0px rgba(0 0 0 0.2);
    `,
    ds200: css`
      box-shadow: 0px 0px 4px 0px rgba(0 0 0 0.2);
    `,
    ds300: css`
      box-shadow: 0px 0px 4px 0px rgba(0 0 0 0.2);
    `,
  },
  layerBlur: {
    lb100: css`
      filter: blur(0.5px);
    `,
    lb200: css`
      filter: blur(1px);
    `,
    lb300: css`
      filter: blur(1.5px);
    `,
  },
  backgroundBlur: {
    bb100: css`
      backdrop-filter: blur(0.5px);
    `,
    bb200: css`
      backdrop-filter: blur(1px);
    `,
    bb300: css`
      backdrop-filter: blur(1.5px);
    `,
  },
};

const media = {
  browser: '@media (display-mode: browser)',
  standalone: '@media (display-mode: standalone)',
  standaloneLike:
    '@media (display-mode: standalone), (display-mode: fullscreen), (display-mode: minimal-ui)',
};

export const theme = {
  colors,
  media,
  fonts,
  effects,
} as const;

export type ThemeType = typeof theme;
