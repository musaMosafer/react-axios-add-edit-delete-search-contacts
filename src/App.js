import {
  Contacts,
  Navbar,
  AddContact,
  NoPage404,
  EditContact,
  ViewContact,
} from "./components";

import TestApp from "./temp/TestApp";

import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {
  getAllGroups,
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
} from "./services/contactService";

function App() {
  const initialNewContact = () => {
    return {
      id: "",
      fullname: "",
      mobile: "",
      email: "",
      photo: "/img/younes.jpg",
      job: "",
      groupid: "",
    };
  };

  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [groups, setgroups] = useState([]);
  const [getcontacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [newContact, setNewContact] = useState(() => initialNewContact());
  const [currentEditContact, setCurrentEditContact] = useState(() =>
    initialNewContact()
  );

  const navigate = useNavigate();

  {
    /* --- Start Section Search --- */
  }
  const filterContacts = (_filterWord) => {
    setFilteredContacts(() => getcontacts);
    setFilteredContacts(() =>
      getcontacts.filter(
        (item) =>
          item.fullname.toLowerCase().indexOf(_filterWord.toLowerCase()) !== -1
      )
    );
  };

  const onChangeSearchWord = (e) => {
    const _eTargetValue = e.target.value;
    setFilteredContacts(() => getcontacts);

    console.log("e.target.value");
    console.log(_eTargetValue);
    setSearchWord(_eTargetValue);
    filterContacts(_eTargetValue);
  };
  {
    /* --- End Section Search --- */
  }

  const onChangeSetEditContact = (event) => {
    setCurrentEditContact({
      ...currentEditContact,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeSetNewContact = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  const onSubmitEditContact = async (contact, contactId) => {
    try {
      const { status } = await updateContact(contact, contactId);

      if (status === 200) {
        setContacts(
          getcontacts.map((c) => {
            if (c.id == contactId) {
              return contact;
            } else {
              return c;
            }
          })
        );
        setFilteredContacts(() => getcontacts);
        setNewContact(() => initialNewContact());
        navigate("/contacts");
      } else {
        console.log("status");
        console.log(status);
        console.log("some problem on editing contact");
      }
      // go to the page without refresh
    } catch (error) {
      console.log("App.js -- onSubmitEditContact -- catch error:");
      console.log(error.message);
    }
  };

  const onSubmitAddContact = async (event) => {
    // Prevent the browser from reloading the page
    event.preventDefault();

    try {
      const { status } = await createContact(newContact);

      if (status === 201) {
        setContacts(() => [...getcontacts, newContact]);
        setFilteredContacts(() => getcontacts);

        setNewContact(() => initialNewContact());
        navigate("/contacts");
      } else {
        console.log("status");
        console.log(status);
        console.log("some problem on creating new contact");
      }
    } catch (error) {
      console.log("App.js -- onSubmitAddContact -- catch error:");
      console.log(error.message);
    }
  };

  const onDeleteContact = async (_id) => {
    try {
      const { status } = await deleteContact(_id);
      if (status == 200) {
        console.log("contact is successfully deleted");
        // const { data: contactsData } = await getAllContacts();
        // setContacts(contactsData);
        setContacts(getcontacts.filter((item) => item.id !== _id));

        setFilteredContacts(() => getcontacts);
      } else {
        console.log("status=");
        console.log(status);
      }
    } catch (error) {
      console.log("App.js -- onDeleteContact -- catch error:");
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: groupsData } = await getAllGroups();
        setgroups(() => groupsData);

        const { data: contactsData } = await getAllContacts();
        setContacts(() => contactsData);
        setFilteredContacts(() => contactsData);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchData();
  }, []); // this will run in Mount and only once

  useEffect(() => {
    setFilteredContacts(() => getcontacts);
    // if we are in the middle of search continiue filtering
    if (searchWord && searchWord !== "") {
      filterContacts(searchWord);
    }
  }, [getcontacts]); // run when getcontacts is changed

  return (
    <div className="App">
      <Navbar
        onChangeSearchWord={onChangeSearchWord}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={
            <Contacts
              loading={loading}
              contacts={filteredContacts}
              onDeleteContact={onDeleteContact}
            />
          }
        />
        <Route
          path="/contacts/add"
          element={
            <AddContact
              loading={loading}
              newContact={newContact}
              setNewContact={setNewContact}
              onChangeSetNewContact={onChangeSetNewContact}
              onSubmitForm={onSubmitAddContact}
              groups={groups}
              contacts={getcontacts}
            />
          }
        />
        <Route
          path="/contacts/:contactId"
          element={<ViewContact groups={groups} contacts={getcontacts} />}
        />{" "}
        <Route
          path="/contacts/edit/:contactId"
          element={
            <EditContact
              groups={groups}
              contacts={getcontacts}
              onSubmitEditContactForm={onSubmitEditContact}
              currentContact={currentEditContact}
              setCurrentContact={setCurrentEditContact}
              SetEditedContact={onChangeSetEditContact}
            />
          }
        />
        <Route path="/contacts/testapp" element={<TestApp />} />
        <Route path="*" element={<NoPage404 />} />
      </Routes>
    </div>
  );
}

export default App;
