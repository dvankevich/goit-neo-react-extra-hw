import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getNavLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#ffeb3b" : "white",
    borderBottom: isActive ? "2px solid #ffeb3b" : "none",
    paddingBottom: "4px",
    transition: "all 0.3s ease",
  });

  return (
    <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <NavLink to="/" style={getNavLinkStyle}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.1rem",
            fontWeight: 500,
            "&:hover": { opacity: 0.8 },
          }}
        >
          Home
        </Typography>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" style={getNavLinkStyle}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": { opacity: 0.8 },
            }}
          >
            Contacts
          </Typography>
        </NavLink>
      )}
    </Box>
  );
};
