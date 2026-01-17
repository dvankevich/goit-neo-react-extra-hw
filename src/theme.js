import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: { main: "#556cd6" },
    secondary: { main: "#19857b" },
    error: { main: red.A400 },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "rgba(0, 0, 0, 0.87)",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.87)",
          },
        },
        input: {
          color: "rgba(0, 0, 0, 0.87)",
          "&::placeholder": {
            color: "rgba(0, 0, 0, 0.42)",
            opacity: 1,
          },

          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #ffffff inset !important",
            WebkitTextFillColor: "rgba(0, 0, 0, 0.87) !important",
          },
        },
      },
    },
  },
});

export default theme;
