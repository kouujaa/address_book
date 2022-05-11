import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const MainWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#b4b4b4",
});

export const EditInputWrapper = styled("div")({
  marginBottom: "30px",
  display: "block",
});

export const TextFieldStyled = styled(TextField)({
  display: "block",
  marginBottom: 5,
});

export const MainSeperator = styled("div")({
  width: "100%",
  height: "5vh",
  backgroundColor: "#222222",
  marginBottom: "10px",
});
