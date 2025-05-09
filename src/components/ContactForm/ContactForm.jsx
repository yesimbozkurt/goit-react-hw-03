import React from 'react'
import ContactFormCss from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";


const ContactForm = ({ onAddContact }) => {
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        number: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
    });
    const nameId = nanoid();
    const numberId = nanoid();

    const handleSubmit = (values) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        };
        onAddContact(newContact);
    };
    return (
        <Formik initialValues={{ name: '', number: '' }}
            onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
            }}
            validationSchema={FeedbackSchema}>
            <Form className={ContactFormCss.form}>
                <div className={ContactFormCss.formGroup}>
                    <label htmlFor={nameId}>Name</label>
                    <Field id={nameId} className={ContactFormCss.field} name='name' />
                    <ErrorMessage name='name' component='span' className={ContactFormCss.error} />
                </div>
                <div className={ContactFormCss.formGroup}>
                    <label htmlFor={numberId}>Number</label>
                    <Field id={numberId} className={ContactFormCss.field} name='number' />
                    <ErrorMessage name='number' component='span' className={ContactFormCss.error} />
                </div>
                <button onClick={() => {
                    handleSubmit({ nameId, numberId })
                }} type='submit' className={ContactFormCss.button}>Add contact</button>
            </Form>

        </Formik >
    )
}

export default ContactForm
