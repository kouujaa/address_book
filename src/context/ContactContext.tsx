import { createContext, useReducer } from "react";
import { contactReducer } from "src/reducer/contactReducer";

// interface contacts {
//   id: string;
//   name: string;
//   phone: string;
// }
export const ContactsContext = createContext({});
export const initialState = { contacts: [], phonebook: [] };

const ContactContextProvider = ({ children }) => {
  const [{ contacts, phonebook }, dispatch] = useReducer(
    contactReducer,
    initialState
  );
  return (
    <ContactsContext.Provider
      value={{
        contacts,
        phonebook,
        dispatch,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactContextProvider;
