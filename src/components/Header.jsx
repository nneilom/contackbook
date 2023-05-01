import React, { useContext, useEffect, useState } from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { contactContext } from "../ContactContextProviderr";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(searchParams.get("q") || "");

  const { getContacts } = useContext(contactContext);

  useEffect(() => {
    setSearchParams({ q: searchVal });
    getContacts();
  }, [searchVal]);

  return (
    <Navbar>
      <Container>
        <Link to={"/"}>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to={"/counter"}>
          <Navbar.Brand>Counter</Navbar.Brand>
        </Link>
        <Link to={"/add"}>
          <Navbar.Brand>Add</Navbar.Brand>
        </Link>
        <Form.Control
          value={searchVal}
          placeholder="Search..."
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
