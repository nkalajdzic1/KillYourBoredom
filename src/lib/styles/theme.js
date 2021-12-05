const colors = {
  black: "#1C1C1C",
  white: "#F3F3F3",
  lightGrey: "#0d0c1d87",
};

const fonts = {
  logo: "clamp(20px, 10px + 3vw, 30px)",
  button: "18px",
  label: "18px",
};

const theme = {
  blackTheme: {
    fonts: { ...fonts },
    backgroundColor: colors.black,
    color: colors.white,
    linkHover: colors.lightGrey,
  },
};

export default theme;
