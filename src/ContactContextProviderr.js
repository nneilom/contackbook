import axios from 'axios';
import React, { createContext, useState } from 'react'

export const contactContext = createContext();
// ! add
const ContactContextProviderr = ({children}) => {
  const API = 'http://localhost:8001/contacts'
  async function addContact (newContact) {
    await axios.post(API,newContact);
  }

  const [contacts,setContacts] = useState([]);
  // ! Search

  // !read
  async function getContacts () {
    const res = await axios.get(`${API}${window.location.search}`);
    setContacts(res.data)
  }
  // !  delete
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }
    // ! get contact
    async function getOneContactInfo(id) {
      const result = await axios (`${API}/${id}`);
    }
  

  return (
    <contactContext.Provider value={{addContact,getContacts,contacts,deleteContact}}>{children}</contactContext.Provider>
  )
}

export default ContactContextProviderr