import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { THEME } from "src/helpers";

export const MainDivStyles = styled(AppBar)({
  width: 60,
  height: "100vh",
  background: THEME.TEXT_PRIMARY,
});

export const MainContainerStyles = styled(Container)({
  height: "100vh",
  paddingTop: 15,
  paddingBottom: 15,
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
    marginBottom: "10px",
    width: "20px",
    height: "18px",
  },
});

export const NavLinkWrapper = styled(Box)({
  marginTop: 20,
  a: {
    color: THEME.WHITE_25,
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
