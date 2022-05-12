import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { THEME } from "src/helpers";

export const MainDivStyles = styled(AppBar)({
  width: 60,
  height: "100vh",
  background: THEME.PRIMARY2,
});

export const MainContainerStyles = styled(Container)({
  height: "100vh",
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

export const MainToolbarStyles = styled(Toolbar)({
  flexDirection: "column",
  alignContent: "space-between",
  height: "100%",
});

export const MainBoxStyles = styled(Box)({
  flexDirection: "column",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",

  "& .logo": {
    marginBottom: "1rem",
    width: "1rem",
    height: "1rem",
  },
});

export const NavLinkWrapper = styled(Box)({
  marginTop: 20,
  a: {
    color: THEME.WHITE,
  },

  "a.active": {
    borderRadius: 4,
    width: 38,
    height: 38,
    color: THEME.WHITE,
    backgroundColor: THEME.PRIMARY,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});
