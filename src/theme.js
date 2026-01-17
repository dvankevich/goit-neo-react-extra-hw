import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const getTheme = (mode) =>
  createTheme({
    cssVariables: true,
    palette: {
      mode, // "light" або "dark"
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#ffffff" : "#2d2d2d",
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 100px ${mode === "light" ? "#ffffff" : "#2d2d2d"} inset !important`,
              WebkitTextFillColor:
                mode === "light" ? "#000000" : "#ffffff !important",
            },
          },
        },
      },
    },
  });
