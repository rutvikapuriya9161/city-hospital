import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function BookAppointment(props) {

    const [update, setUpdate] = useState(false)

    const history = useHistory();

    useEffect(
        () => {
            let localData = JSON.parse(localStorage.getItem("bookappointment"));

            if (props.location.state && localData !== null) {
                let localData = JSON.parse(localStorage.getItem("bookappointment"));

                let fData = localData.filter((l) => l.id === props.location.state.id);

                formikObj.setValues(fData[0]);
                setUpdate(true);
            }
        }, [])

    let Schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required("please enter email"),
        phone: yup.string().required("please enter phone"),
        date: yup.string().required("please select date"),
        department: yup.string().required("please enter department"),
        message: yup.string().required("please select Message"),
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },

        validationSchema: Schema,

        onSubmit: values => {
            if (update) {
                handleUpdateData(values)
            }else{
                handleInsert(values);
            }
        },
    });

    const { handleSubmit, handleChange, handleBlur, touched, errors, values } = formikObj

    console.log(errors);

    const handleInsert = (values) => {

        let localData = JSON.parse(localStorage.getItem("bookappointment"));


        let id = Math.floor(Math.random() * 1000);

        let data = {
            id: id,
            ...values
        }


        if (localData === null) {
            localStorage.setItem("bookappointment", JSON.stringify([data]));
        }
        else {
            localData.push(data);
            localStorage.setItem("bookappointment", JSON.stringify(localData));
        }

        history.push("/listappointment");

        console.log([data]);
    }

    const handleUpdateData = (values) => {
        let localData = JSON.parse(localStorage.getItem("bookappointment"));

        let uData = localData.map((l) => {
            if (l.id === values.id) {
                return values;
            } else {
                return l;
            }
        });

        localStorage.setItem("bookappointment", JSON.stringify(uData));

        history.replace();

        formikObj.resetForm();

        setUpdate(false)

        history.push("/listappointment")
    }

    return (
        <div>
            <main id="main">
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <div className='row'>
                                <div className='col-6'>
                                    <NavLink to={"/bookappointment"}>Book An Appointment</NavLink>
                                </div>
                                <div className='col-6'>
                                    <NavLink to={"/listappointment"}>List An Appointment</NavLink>
                                </div>
                            </div>
                        </div>

                        <Formik values={formikObj}>
                            <Form className="php-email-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name ? errors.name : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="typs"
                                            className="form-control"
                                            email="type"
                                            id="email"
                                            placeholder="Your Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? errors.email : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="tel"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.phone && touched.phone ? errors.phone : ''}
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="date"
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="date"
                                            value={values.date}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.date && touched.date ? errors.date : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select name="department" id="department" className="form-select" 
                                        value={values.department}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        >
                                            <option value>Select Department</option>
                                            <option value="department 1">Department 1</option>
                                            <option value="department 2">Department 2</option>
                                            <option value="department 3">Department 3</option>
                                        </select>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control"
                                        name="message"
                                        rows={5}
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.message && touched.message ? errors.message : ''}
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    {
                                        update ?
                                            <button type="submit">Update an Appointment</button>
                                            :
                                            <button type="submit">Make an Appointment</button>
                                    }
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default BookAppointment;