import { createContext, useReducer } from "react";
import { contactReducer } from "src/reducer/contactReducer";

// interface contacts {
//   id: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
// }
export const ContactsContext = createContext({});
export const initialState = { contacts: [] };

const ContactContextProvider = ({ children }) => {
  const [{ contacts }, dispatch] = useReducer(contactReducer, initialState);
  return (
    <ContactsContext.Provider
      value={{
        contacts,
        dispatch,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactContextProvider;
