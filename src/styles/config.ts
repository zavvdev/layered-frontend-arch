export const PALETTE = {
  primary: {
    main: "#d4802a",
    dark: "#b5712b",
    light: "#e5994c",
  },
  gray: {
    light: "#dcdcdc",
    dark: "#4b4b4b",
  },
  black: {
    main: "#292929",
    light: "#6d6d6d",
  },
  white: {
    main: "#ffffff",
    dim: "#fafafa",
  },
  red: {
    main: "#f23f3f",
    dim: "#f28f8f",
  },
};

export const THEME = {
  palette: PALETTE,
};

export type Theme = typeof THEME;
