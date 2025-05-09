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
    return (

        <ul className={ContactListCss.contactList}>
            {filteredContacts(contacts, filteredName).map((contact) => (

                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    handleDeleteContact={handleDeleteContact}
                />

            ))}
        </ul>

    )
}

export default ContactList
