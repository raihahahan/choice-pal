const colorPalette = {
  dark: {
    primary: "#000000", // "#212121"
    secondary: "1C1B1B",
    accent: "#08C2C2",
    immediate_contrast: "#FFFFFF",
  },
  light: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    accent: "#0FABC3",
    immediate_contrast: "#000000",
  },
};

export const globalStyles = {
  dark: {
    background: {
      backgroundColor: colorPalette.dark.primary,
    },
    text: {
      color: colorPalette.dark.immediate_contrast,
    },
    accent: colorPalette.dark.accent,
  },
  light: {
    background: {
      backgroundColor: colorPalette.light.primary,
    },
    text: {
      color: colorPalette.light.immediate_contrast,
    },
    accent: colorPalette.light.accent,
  },
};
