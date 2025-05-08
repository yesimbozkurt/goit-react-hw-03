import { Field, Form, Formik } from 'formik'
import React from 'react'
// import * as Yup from "yup";
import { nanoid } from 'nanoid'
import SearchBoxCss from './SearchBox.module.css'

const SearchBox = ({ searchName }) => {
    const searchId = nanoid();
    const handleChange = e => {
        const { value } = e.target;
        searchName(value)
    }

    return (
        <Formik>
            <Form>
                <label htmlFor={searchId}>Find contacts by name</label>
                <Field id={searchId}
                    name='search'
                    className={SearchBoxCss.search}
                    onChange={handleChange} />
            </Form>
        </Formik>
    )
}

export default SearchBox
