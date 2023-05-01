import React, { useContext, useEffect } from "react";
import { contactContext } from "../ContactContextProviderr";
import ContactsCard from "./ContactsCard";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container d-flex">
      {contacts.map((item) => (
        <ContactsCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContactList;
