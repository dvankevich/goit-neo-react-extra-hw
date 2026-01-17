import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { toggleTheme, selectThemeMode } from "../redux/settings/slice";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);

  return (
    <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeSwitcher;
