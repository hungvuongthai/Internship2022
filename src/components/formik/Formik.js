import React from 'react';
import "./Formik.css"
import { useFormik } from 'formik';


export default function Validate() {
    const formik = useFormik({
        initialValues: {
            validateOnMount: true,
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validate: values => {
            const errors = {};

            if (!values.firstName) {
                errors.firstName = 'Required';
            }

            if (!values.lastName) {
                errors.lastName = 'Required';
            }
            if (!values.message) {
                errors.message = 'Required';
            }


            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });
    return (
        <div className="container">
            <div style={{ textAlign: 'center' }}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://www.w3schools.com/w3images/map.jpg" style={{ width: '100%' }} />
                </div>
                <div className="column">

                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="firstName" name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            placeholder="Your name..." />
                        {formik.errors.firstName && formik.touched.firstName && <div style={{ color: 'red' }}>{formik.errors.firstName}</div>}
                        <input type="text" id="lastName" name="lastName" onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName} placeholder="Your last name..." />

                        {formik.errors.lastName && formik.touched.lastName && <div style={{ color: 'red' }}>{formik.errors.lastName}</div>}
                        <input type="email" id="email" name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} placeholder="Your email..." />
                        {formik.errors.email && formik.touched.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
                        <textarea id="message" name="message" onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            defaultValue={formik.values.message} placeholder="Write something..." style={{ height: '170px' }} />
                        {formik.errors.message && formik.touched.message && <div style={{ color: 'red' }}>{formik.errors.message}</div>}

                        <input disabled={!formik.isValid}
                            type="submit" />
                    </form>
                </div>
            </div>
        </div>

    )
}