import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavBar } from "src/components";
import { ContactsContext } from "src/context/ContactContext";
import {
  EditInputWrapper,
  MainSeperator,
  MainWrapper,
  TextFieldStyled,
} from "./ContactEntry.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { MAX_IMPORT_CONTACTS } from "src/helpers";

import * as Yup from "yup";

const Home = () => {
  // form validation rules
  const formValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^[+0][0-9]{3}[(]?[0]?[)]?[0-9]{3}?[0-9]{4,6}$/,
        "Please enter a valid phone number"
      ),
  });
  const formOptions = { resolver: yupResolver(formValidationSchema) };
  //@ts-ignore
  const { contacts, dispatch } = useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formOptions);

  const _onSubmit = (data) => {
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
      },
    });
    // reset({
    //   firstName: "",
    //   lastName: "",
    //   phone: "",
    // });
  };
  const removeContact = (id: string) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };
  const contactMessage = () => {
    if (contacts.length <= 0) {
      return (
        <Typography variant="h5" color={"GrayText"}>
          You have no contacts
        </Typography>
      );
    } else if (contacts.length >= MAX_IMPORT_CONTACTS) {
      return (
        <Typography variant="h5" color={"warning"}>
          Maximum contacts reached
        </Typography>
      );
    } else {
      return (
        <Typography
          variant="h5"
          color={"primary"}
        >{`You have ${contacts.length} contacts`}</Typography>
      );
    }
  };
  return (
    <MainWrapper>
      <NavBar />
      <MainSeperator />
      <Container maxWidth="md">
        <div style={{ marginBottom: "12px" }}>
          <form onSubmit={handleSubmit(_onSubmit)}>
            <EditInputWrapper>
              <TextFieldStyled
                id="first_name"
                label="First Name"
                variant="standard"
                {...register("firstName")}
              />
              {errors.firstName && <span>This field is required</span>}
            </EditInputWrapper>
            <EditInputWrapper>
              <TextFieldStyled
                id="last_name"
                label="Last Name"
                variant="standard"
                {...register("lastName")}
              />
              {errors.lastName && <span>This field is required</span>}
            </EditInputWrapper>
            <EditInputWrapper>
              <TextFieldStyled
                id="phone_number"
                label="Phone Number"
                variant="standard"
                helperText="Format: +443739182931, 02012345567"
                {...register("phone")}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>Enter Valid Number</span>
              )}
            </EditInputWrapper>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Button variant="contained" type="submit">
                Load Contact
              </Button>
              <Button variant="contained">add contact(s) to phonebook</Button>

              {contactMessage()}
            </div>
          </form>
        </div>
        {contacts.length ? (
          <div style={{ height: "40vh", overflowY: "scroll" }}>
            {contacts?.map((person, index) => (
              <div
                key={person.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 10px",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
                }}
              >
                <h6>{person.firstName}</h6>
                <h6>{person.lastName}</h6>
                <h6>{person.phone}</h6>
                <DeleteForeverIcon
                  color="primary"
                  onClick={() => {
                    removeContact(person.id);
                  }}
                />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </MainWrapper>
  );
};

export default Home;
