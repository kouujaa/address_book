import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { THEME } from "src/helpers/theme";

export const NavWrapper = styled(Box)({
  flexGrow: 1,
  minHeigth: "20vh",
});

export const AppBarWrapper = styled(AppBar)({
  minHeigth: "40vh",
  backgroundColor: THEME.PRIMARY_BACKGROUND,
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

export const MainSeperator = styled("div")({
  width: "100%",
  height: "5vh",
  backgroundColor: THEME.OFF_BLACK,
  marginBottom: "1rem",
});
