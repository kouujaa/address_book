import { v4 } from "uuid";
// import { MAX_IMPORT_CONTACTS } from "src/helpers";

export const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      //   if (state.contacts >= MAX_IMPORT_CONTACTS) {
      //     return state;
      //   } else {
      return {
        contacts: [{ id: v4(), ...action.payload }, ...state.contacts],
      };
    //   }
    case "REMOVE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      throw new Error();
  }
};
