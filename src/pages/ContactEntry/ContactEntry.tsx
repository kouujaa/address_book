import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { NavBar } from "src/components";
import { ContactsContext } from "src/context/ContactContext";
import { MAX_IMPORT_CONTACTS, ROUTES, THEME } from "src/helpers";
import * as Yup from "yup";
import {
  ActionWrapper,
  EditInputWrapper,
  MainWrapper,
  TextFieldStyled,
  FormWrapper,
} from "./ContactEntry.style";
import Contacts from "./partials/Contacts";

type FormData = {
  name: string;
  phone: string;
};

const ContactEntry = () => {
  const navigate = useNavigate();
  // form validation rules
  const formValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^[+0][0-9]{3}[(]?[0]?[)]?[0-9]{3}?[0-9]{4,6}$/,
        "Please enter a valid phone number"
      ),
  });
  const formOptions = { resolver: yupResolver(formValidationSchema) };
  const { contacts, dispatch } = useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>(formOptions);

  const _onSubmit = (data) => {
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        name: data.name,
        phone: data.phone,
      },
    });
    reset({
      name: "",
      phone: "",
    });
  };
  const removeContact = (id: string) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };
  const addToPhonebook = () => {
    console.log({ contacts });
    dispatch({ type: "ADD_TO_PHONEBOOK", payload: contacts });
    navigate(ROUTES.LIST_CONTACTS);
  };
  const contactMessage = () => {
    if (contacts.length <= 0) {
      return (
        <Typography variant="h6" color={THEME.PRIMARY}>
          You have no contacts
        </Typography>
      );
    } else if (contacts.length >= MAX_IMPORT_CONTACTS) {
      return (
        <Typography variant="h6" color={THEME.RED}>
          Maximum contacts reached
        </Typography>
      );
    } else {
      return (
        <Typography
          variant="h6"
          color={THEME.SUCCESS_MAIN}
        >{`${contacts.length} contact(s) added`}</Typography>
      );
    }
  };
  return (
    <MainWrapper>
      <NavBar title={"Add Contacts"} />
      <Container maxWidth="md">
        <FormWrapper>
          <form onSubmit={handleSubmit(_onSubmit)}>
            <EditInputWrapper>
              <TextFieldStyled
                id="name"
                label="Name"
                variant="standard"
                helperText="Only alphabets are allowed"
                {...register("name")}
              />
              {errors.name && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
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
            <ActionWrapper>
              <Button variant="contained" type="submit">
                Load Contact
              </Button>

              <Button variant="contained" onClick={addToPhonebook}>
                add contact(s) to phonebook
              </Button>

              {contactMessage()}
            </ActionWrapper>
          </form>
        </FormWrapper>
        {contacts.length ? (
          <Contacts contacts={contacts} removeContact={removeContact} />
        ) : null}
      </Container>
    </MainWrapper>
  );
};

export default ContactEntry;
