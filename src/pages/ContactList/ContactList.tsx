import Container from "@mui/material/Container";
import { DataGrid, GridEnrichedColDef } from "@mui/x-data-grid";
import { useContext, useMemo, useState } from "react";
import { NavBar, SearchBar } from "src/components";
import { ContactsContext } from "src/context/ContactContext";
import { fuzzySearch } from "src/helpers";
import { MainWrapper, TableWrapper } from "./ContactList.style";

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { phonebook } = useContext(ContactsContext);

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
  const rows = phonebook
    ?.map((contact) => {
      return {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
      };
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
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
        <TableWrapper>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            style={{ border: "none" }}
            pageSize={10}
            disableSelectionOnClick={true}
            rowsPerPageOptions={[0]}
          />
        </TableWrapper>
      </Container>
    </MainWrapper>
  );
};

export default ContactList;
