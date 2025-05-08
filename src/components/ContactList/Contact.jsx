import React from 'react'
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ name, number }) => {
    return (
        <>
            <li>
                <div>
                    <div><FaUser /><p>{name}</p></div>
                    <div><FaPhoneAlt /><p>{number}</p></div>
                </div>
                <div><button>DELETE</button></div>
            </li>
        </>
    )
}

export default Contact
