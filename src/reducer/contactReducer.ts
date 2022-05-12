import { v4 } from "uuid";
import { MAX_IMPORT_CONTACTS } from "src/helpers";

enum ActionKind {
  ADD_CONTACT = "ADD_CONTACT",
  REMOVE_CONTACT = "REMOVE_CONTACT",
  ADD_TO_PHONEBOOK = "ADD_TO_PHONEBOOK",
}

interface PhonebookAction {
  type: ActionKind;
  payload: any;
}

interface PhonebookState {
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
}

export const contactReducer = (
  state: PhonebookState,
  action: PhonebookAction
) => {
  switch (action.type) {
    case "ADD_CONTACT": {
      if (state.contacts.length >= MAX_IMPORT_CONTACTS) {
        return state;
      } else {
        const isDuplicate = state.contacts.find(
          (contact) =>
            contact.name === action.payload.name ||
            contact.phone === action.payload.phone
        );
        if (isDuplicate) return state;
        return {
          contacts: [{ id: v4(), ...action.payload }, ...state.contacts],
          phonebook: [...state.phonebook],
        };
      }
    }
    case "REMOVE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        phonebook: [...state.phonebook],
      };
    case "ADD_TO_PHONEBOOK":
      return {
        phonebook: [...state.phonebook, ...action.payload],
        contacts: [],
      };
    default:
      return state;
  }
};
