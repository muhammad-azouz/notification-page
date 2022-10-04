import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Plus Jakarta Sans",
  body: "Plus Jakarta Sans",
};

const theme = extendTheme({
  colors: {
    primary: {
      blue: "hsl(219, 85%, 26%)",
      red: "hsl(1, 90%, 64%)",
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      background: "hsl(210, 60%, 98%)",
      LightGrayishBlue1: "hsl(211, 68%, 94%)",
      LightGrayishBlue2: "hsl(219, 14%, 63%)",
      GrayishBlue: "hsl(219, 14%, 63%)",
      DarkGrayishBlue: "hsl(219, 12%, 42%)",
      VeryDarkBlue: "hsl(224, 21%, 14%)",
    },
  },
  styles: {
    global: {
      body: {
        bg: "hsl(210, 60%, 98%)",
        fontWeight: 500,
        fontSize: "16px",
        width: "100%",
        display: "flex",
        pt: { base: 0, md: "20" },
        justifyContent: "center",
      },
    },
  },
  fonts,
});

export default theme;
/* offset-x | offset-y | blur-radius | spread-radius | color */
