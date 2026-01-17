import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { AppBar as MuiAppBar, Toolbar, Box } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ThemeSwitcher from "../ThemeSwitcher";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static" sx={{ marginBottom: "20px" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <ThemeSwitcher />
      </Toolbar>
    </MuiAppBar>
  );
};
