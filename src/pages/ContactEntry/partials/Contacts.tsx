import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { MainWrapper, ContactWrapper } from "./Contacts.style";
import { THEME } from "src/helpers";

interface ContactProps {
  contacts: any;
  removeContact: (id: string) => void;
}
const Contacts = (props: ContactProps) => {
  const { contacts, removeContact } = props;
  return (
    <MainWrapper>
      {contacts?.map((person, index) => (
        <ContactName
          key={person.id}
          person={person}
          removeContact={removeContact}
          index={index}
        />
      ))}
    </MainWrapper>
  );
};

export default Contacts;

const ContactName = ({ person, removeContact, index }) => {
  return (
    <ContactWrapper
      key={person.id}
      style={{
        backgroundColor: index % 2 === 0 ? THEME.GREY_TABLE : THEME.WHITE,
      }}
    >
      <h6>{person.name}</h6>
      <h6>{person.phone}</h6>
      <DeleteForeverIcon
        color="primary"
        style={{ cursor: "pointer" }}
        onClick={() => {
          removeContact(person.id);
        }}
      />
    </ContactWrapper>
  );
};
