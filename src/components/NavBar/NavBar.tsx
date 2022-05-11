import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { AppBarWrapper, NavWrapper, MainSeperator } from "./NavBar.style";

const AppBar = ({ title }) => {
  return (
    <NavWrapper>
      <AppBarWrapper position="static">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, padding: "1rem" }}
        >
          {title}
        </Typography>
        <Container maxWidth="md"></Container>
      </AppBarWrapper>
      <MainSeperator />
    </NavWrapper>
  );
};

export default AppBar;
