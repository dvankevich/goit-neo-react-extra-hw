import { useSelector } from "react-redux";
import { selectThemeMode } from "../redux/settings/slice";
import { getTheme } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";

const AppThemeProvider = ({ children }) => {
  const mode = useSelector(selectThemeMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
