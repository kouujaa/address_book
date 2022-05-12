import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/helpers";
import {
  MainBoxStyles,
  MainContainerStyles,
  MainDivStyles,
  MainToolbarStyles,
  NavLinkWrapper,
} from "./Navigation.styles";

const Navigation = () => {
  return (
    <>
      <MainDivStyles position="static">
        <MainContainerStyles maxWidth="xl">
          <MainToolbarStyles disableGutters>
            <MainBoxStyles>
              <Tooltip title="Add contact" placement="right" arrow>
                <NavLinkWrapper>
                  <NavLink to={ROUTES.HOME}>
                    <LooksOneIcon color="inherit" style={{ fontSize: 20 }} />
                  </NavLink>
                </NavLinkWrapper>
              </Tooltip>
              <Tooltip title="View Phonebook" placement="right" arrow>
                <NavLinkWrapper>
                  <NavLink to={ROUTES.LIST_CONTACTS}>
                    <LooksTwoIcon />
                  </NavLink>
                </NavLinkWrapper>
              </Tooltip>
            </MainBoxStyles>
          </MainToolbarStyles>
        </MainContainerStyles>
      </MainDivStyles>
    </>
  );
};

export default Navigation;
