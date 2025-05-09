import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'



function App() {

  const localContact = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(localContact);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const handleAddContact = (newContact) => {

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (contactToDelete) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactToDelete.id)
    );
  };

  const [name, setName] = useState('')

  const searchName = (name) => {

    setName(name)
  }

  return (
    <>
      <div>
        <h1 style={{ color: 'pink' }} >Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox searchName={searchName} />
        <ContactList contacts={contacts} filteredName={name} handleDeleteContact={handleDeleteContact} />
      </div>

    </>
  )
}

export default App
