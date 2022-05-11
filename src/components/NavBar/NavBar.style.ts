import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const NavWrapper = styled(Box)({
  flexGrow: 1,
  minHeigth: "20vh",
});

export const AppBarWrapper = styled(AppBar)({
  minHeigth: "40vh",
  backgroundColor: "#0f1222",
  paddingTop: "15px",
  paddingBottom: "15px",
});
