import { Route, Routes } from "react-router";
import { ROUTES } from "src/helpers";
import ContactEntry from "src/pages/ContactEntry/ContactEntry";
import ContactList from "src/pages/ContactList/ContactList";
import { Navigation } from "src/components";
import "./App.css";
import ContactContextProvider from "src/context/ContactContext";

function App() {
  return (
    <ContactContextProvider>
      <div style={{ display: "flex" }}>
        <Navigation />
        <Routes>
          <Route path={ROUTES.HOME} element={<ContactEntry />} />
          <Route path={ROUTES.LIST_CONTACTS} element={<ContactList />} />
        </Routes>
      </div>
    </ContactContextProvider>
  );
}

export default App;
