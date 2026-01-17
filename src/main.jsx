import { StrictMode, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./components/App";
import { store, persistor } from "./redux/store";
import { getTheme } from "./theme";
import { selectThemeMode } from "./redux/settings/slice"; // Створіть цей селектор

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Створюємо компонент, який реагує на зміну теми в Redux
const AppThemeProvider = ({ children }) => {
  const mode = useSelector(selectThemeMode);

  // useMemo оптимізує продуктивність, щоб не перестворювати об'єкт теми при кожному рендері
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          {" "}
          {/* Тепер ThemeProvider всередині Provider */}
          <BrowserRouter
            future={{
              v7_relativeSplatPath: true,
              v7_startTransition: true,
            }}
          >
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </BrowserRouter>
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
