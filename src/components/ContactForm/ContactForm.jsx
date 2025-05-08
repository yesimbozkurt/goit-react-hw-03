import React from 'react'
import ContactFormCss from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";


const ContactForm = () => {
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
    return (
        <Formik initialValues={{}}
            onSubmit={() => { }}
            validationSchema={FeedbackSchema}>
            <Form className={ContactFormCss.form}>
                <div>
                    <label htmlFor={nameId}>Name</label>
                    <Field id={nameId} className={ContactFormCss.field} name='name' />
                    <ErrorMessage name='name' component='span' className={ContactFormCss.error} />
                </div>
                <div>
                    <label htmlFor={numberId}>Number</label>
                    <Field id={numberId} className={ContactFormCss.field} name='number' />
                    <ErrorMessage name='number' component='span' className={ContactFormCss.error} />
                </div>
                <button type='submit' className={ContactFormCss.button}>Add contact</button>
            </Form>

        </Formik>
    )
}

export default ContactForm
