import React from 'react'
import ContactListCss from './ContactList.module.css'
import Contact from './Contact'


const ContactList = ({ contacts, filteredName, handleDeleteContact }) => {
    const filteredContacts = (contacts, filteredName) => {
        if (filteredName === '') {
            return contacts
        }
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filteredName.toLowerCase())
        )

    }
    const sortedContacts = filteredContacts(contacts, filteredName);
    return (
        <ul className={ContactListCss.contactList}>
            {sortedContacts
                ? sortedContacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        handleDeleteContact={handleDeleteContact}
                    />
                ))
                : null}
        </ul>

    )
}

export default ContactList
