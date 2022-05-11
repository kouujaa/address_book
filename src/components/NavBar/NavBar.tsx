import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { AppBarWrapper, NavWrapper } from "./NavBar.style";

const ButtonAppBar = () => {
  return (
    <NavWrapper>
      <AppBarWrapper position="static">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, padding: "1rem" }}
        >
          PhoneBook
        </Typography>
        <Container maxWidth="md"></Container>
      </AppBarWrapper>
    </NavWrapper>
  );
};

export default ButtonAppBar;
