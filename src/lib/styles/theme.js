const colors = {
  black: "#1C1C1C",
  white: "#F3F3F3",
  lightGrey: "#d2d0d0",
  lightPink: "#de7a7a",
  lightRed: "#c64141",
};

const fontFamilies = {
  fontPoppins: "'Poppins', sans-serif",
};

const fonts = {
  logo: "clamp(20px, 10px + 3vw, 30px)",
  button: "18px",
  label: "18px",
};

const theme = {
  blackTheme: {
    colors: { ...colors },
    fonts: { ...fonts },
    fontFamilyDefault: fontFamilies.fontPoppins,
    linkColor: colors.lightRed,
    hoveredLinkColor: colors.lightPink,
    backgroundColor: colors.black,
    color: colors.white,
    linkHover: colors.lightGrey,
  },
};

export default theme;
