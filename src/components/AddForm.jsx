import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { contactContext } from "../ContactContextProviderr";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const { addContact } = useContext(contactContext);
  const navigate = useNavigate();

  const handleValues = () => {
    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert("заполните все поля");
    }
    const newContact = { name, lastName, phone };
    addContact(newContact);
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column mt-5 align-item-center w-50">
      <h1>Add contact</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Lastname"
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone"
      />
      <Button onClick={handleValues} variant="dark">
        add contact
      </Button>
    </div>
  );
};

export default AddForm;
