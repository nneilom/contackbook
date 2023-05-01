import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { contactContext } from "../ContactContextProviderr";
import { useNavigate } from "react-router-dom";

function ContactsCard({ name, lastName, phone, id }) {
  const { deleteContact } = useContext(contactContext);
  const navigate = useNavigate();

  return (
    <Card
      style={{
        width: "15rem",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{lastName}</Card.Title>
        <Button variant="warning">{phone}</Button>
      </Card.Body>
      <Card.Body>
        <Button
          onClick={() => {
            navigate(`edit/${id}`);
          }}
          variant="primary"
        >
          Edit
        </Button>
        <Button onClick={() => deleteContact(id)} variant="primary">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactsCard;
