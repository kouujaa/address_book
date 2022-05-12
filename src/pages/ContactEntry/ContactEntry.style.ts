import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { THEME } from "src/helpers/theme";

export const MainWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: THEME.GREY,
});

export const EditInputWrapper = styled("div")({
  marginBottom: "2rem",
  display: "block",
});

export const TextFieldStyled = styled(TextField)({
  display: "block",
  marginBottom: 5,
});
export const FormWrapper = styled("div")({
  marginBottom: "1rem",
});
export const ActionWrapper = styled("div")({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  marginTop: "1rem",
});
