import { createContext, useReducer, Dispatch } from "react";
import { contactReducer } from "src/reducer/contactReducer";

type Context = {
  contacts: {
    id: string;
    name: string;
    phone: string;
  }[];
  phonebook: {
    id: string;
    name: string;
    phone: string;
  }[];
  dispatch: Dispatch<any>;
};

export const ContactsContext = createContext<Context>({
  contacts: [],
  phonebook: [],
  dispatch: () => {},
});
export const initialState = { contacts: [], phonebook: [] };

const ContactContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(contactReducer, initialState);
  return (
    <ContactsContext.Provider
      value={{
        contacts: store.contacts,
        phonebook: store.phonebook,
        dispatch,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactContextProvider;
