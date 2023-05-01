import React from 'react'
import Counter from './components/Counter'
import CounterContextProvider from './CounterContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactList from './components/ContactList'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'
import ContactsCard from './components/ContactsCard'
import Contatcts from './components/Contatcts'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactContextProviderr from './ContactContextProviderr'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ContactContextProviderr>
      <Header/>

      <CounterContextProvider>
        <Routes>
          <Route path='/' element={<ContactList ></ContactList>}/>
          <Route path='/add' element={<AddForm></AddForm>} />
          <Route path='/edit/:id' element={<EditForm></EditForm>}/>
          <Route path='contacts-card' element={<ContactsCard></ContactsCard>}/>
          <Route path='contstcs' element={<Contatcts></Contatcts>}/>
          <Route path='/counter' element={<Counter/>}></Route>
        </Routes>
      </CounterContextProvider>
      </ContactContextProviderr>
      </BrowserRouter>
    </div>
  )
}

export default App