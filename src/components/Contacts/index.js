import React, { useState, useEffect } from "react";
import "./styles.css"
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Mehmet", phone_number: "534 888 88 88" },
    { fullname: "Ayşe", phone_number: "542 222 22 22" },
    { fullname: "Nazlı", phone_number: "530 444 44 44" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
        <h1>Contacts App</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
