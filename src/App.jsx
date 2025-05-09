import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'



function App() {
  const [contacts, setContacts] = useState(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );


  const handleAddContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };





  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const [name, setName] = useState('')

  const searchName = (name) => {
    console.log(name)
    setName(name)
  }


  return (
    <>
      <div>
        <h1 style={{ color: 'pink' }} >Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox searchName={searchName} />
        <ContactList contacts={contacts} filteredName={name} onDelete={handleDeleteContact} />
      </div>

    </>
  )
}

export default App
