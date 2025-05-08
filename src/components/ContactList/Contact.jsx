import React from 'react'
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import Css from './ContactList.module.css'

const Contact = ({ id, name, number, handleDeleteContact }) => {
    return (
        <>
            <li>
                <div className={Css.contact}>
                    <div className={Css.contactName}><FaUser /><span>{name}</span></div>
                    <div className={Css.contactNmbr}><FaPhoneAlt /><span>{number}</span></div>
                </div>
                <div><button className={Css.deleteBtn} type='button' onClick={() => {
                    handleDeleteContact({ id, name, number })
                }}>DELETE</button></div>
            </li>
        </>
    )
}

export default Contact;
