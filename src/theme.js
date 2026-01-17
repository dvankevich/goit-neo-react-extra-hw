import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const getTheme = (mode) =>
  createTheme({
    cssVariables: true,
    palette: {
      mode,
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
          },
          input: {
            color: mode === "light" ? "rgba(0, 0, 0, 0.87)" : "#ffffff",

            "&::placeholder": {
              color:
                mode === "light"
                  ? "rgba(0, 0, 0, 0.42)"
                  : "rgba(255, 255, 255, 0.5)",
              opacity: 1,
            },

            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 100px ${
                mode === "light" ? "#ffffff" : "#2d2d2d"
              } inset !important`,
              WebkitTextFillColor:
                mode === "light" ? "#000000" : "#ffffff !important",
              caretColor: mode === "light" ? "#000000" : "#ffffff",
            },
          },
        },
      },
    },
  });
