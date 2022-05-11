import Container from "@mui/material/Container";
import { DataGrid, GridEnrichedColDef } from "@mui/x-data-grid";
import { useContext, useMemo, useState } from "react";
import { NavBar, SearchBar } from "src/components";
import { ContactsContext } from "src/context/ContactContext";
import { fuzzySearch } from "src/helpers";
import { MainWrapper } from "./ContactList.style";

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  //@ts-ignore
  const { contacts } = useContext(ContactsContext);
  const columns: GridEnrichedColDef[] = useMemo(
    () => [
      {
        field: "name",
        headerName: "Name",
        disableColumnMenu: true,
        sortable: false,
        flex: 1,
      },
      {
        field: "phone",
        headerName: "Phone Number",
        disableColumnMenu: true,
        sortable: false,
        flex: 1.5,
      },
    ],
    []
  );
  const rows = contacts?.map((contact) => {
    return {
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
    };
  });
  const filteredRows = useMemo(() => {
    if (searchTerm === "") {
      return rows;
    }
    return fuzzySearch(["name", "phone"], rows, searchTerm);
  }, [rows, searchTerm]);
  return (
    <MainWrapper>
      <NavBar title={"PhoneBook"} />
      <Container maxWidth="md" style={{ marginTop: "2rem" }}>
        <SearchBar
          width="50%"
          handleSearch={(e) => {
            setSearchTerm(e);
          }}
        />
        <div style={{ height: "60vh" }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            style={{ border: "none" }}
            pageSize={10}
            disableSelectionOnClick={true}
            rowsPerPageOptions={[0]}
          />
        </div>
      </Container>
    </MainWrapper>
  );
};

export default ContactList;
