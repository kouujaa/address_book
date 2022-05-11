import { yupResolver } from "@hookform/resolvers/yup";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
  EditInputWrapper,
  MainWrapper,
  TextFieldStyled,
} from "./ContactEntry.style";

const Home = () => {
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
        name: data.name,
        phone: data.phone,
      },
    });
    // reset({
    //   name: "",
    //   phone: "",
    // });
  };
  const removeContact = (id: string) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };
  const addToPhonebook = () => {
    console.log({ contacts });
    // dispatch({ type: "ADD_TO_PHONEBOOK", payload: contacts });
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
        <Typography variant="h6" color={THEME.RED_MISSED_CALLS}>
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
        <div style={{ marginBottom: "12px" }}>
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

              <Button variant="contained" onClick={addToPhonebook}>
                add contact(s) to phonebook
              </Button>

              {contactMessage()}
            </div>
          </form>
        </div>
        {contacts.length ? renderContacts(contacts, removeContact) : null}
      </Container>
    </MainWrapper>
  );
};

export default Home;

const renderContacts = (contacts: any, removeContact: (id: string) => void) => {
  return (
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
            backgroundColor: index % 2 === 0 ? THEME.GREY_TABLE : THEME.WHITE,
          }}
        >
          <h6>{person.name}</h6>
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
  );
};
