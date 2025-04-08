import { css } from 'styled-components';

const createFontStyle = (
  size: number,
  weight: number,
  lineHeightPercent: number,
  letterSpacing: number = 0,
) => css`
  font-size: ${size}px;
  font-style: normal;
  font-weight: ${weight};
  line-height: ${lineHeightPercent}%;
  letter-spacing: ${letterSpacing}px;
`;

const colors = {
  primary: {
    bl400: '#4F75F9',
  },
  secondary: {
    pk200: '#FBA7FD',
    ye200: '#F9F79F',
  },
  grayScale: {
    white: '#FAFAFA',
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
    black: '#17171B',
  },
};

const fonts = {
  body: {
    large400: createFontStyle(18, 400, 154, -0.36),
    large500: createFontStyle(18, 500, 154, -0.36),
  },
  header: {
    h1: createFontStyle(28, 700, 130, -0.56),
    h2: createFontStyle(24, 700, 134, -0.48),
    h3: createFontStyle(20, 700, 142, -0.4),
    h4: createFontStyle(16, 700, 150, -0.32),
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
};

export type Theme = typeof theme;
