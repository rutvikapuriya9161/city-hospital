import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';


function Login(props) {
    const [user, setUser] = useState('Login');
    const [reset, setReset] = useState(false)

    let schema = yup.object().shape({
        email: yup.string().required("Please enter your email id").email("Please enter a valid email id"),
        password: yup.string().required("Please enter your password"),
        createdOn: yup.date().default(function () {
            return new Date();
        }),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationschema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit } = formik;


    return (
        <center>
            <section>
                <div className="container">
                    <div className="section-title">
                        {reset === "true" ?
                            <h2>Forget Password</h2>
                            :
                            user === "Login" ?
                                <h2>Login</h2>
                                :
                                <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                            {
                                reset === "true" ?
                                    null :
                                    user === "Login" ?
                                        null
                                        :
                                        <div className="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate"></div>
                                        </div>
                            }
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input onChange={handleChange} type="email" className="form-control" name="email" id="email" placeholder="Your email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                                <p>{errors.email}</p>
                            </div>
                            {
                                reset === "true" ?
                                    null :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input onChange={handleChange} type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter valid password" />
                                        <div className="validate" />
                                        <p>{errors.password}</p>
                                    </div>
                            }
                            {
                                reset === "true" ?
                                    <div class="text-center"><button className='s-btn' type='submit'>submit</button></div>
                                    :
                                    user === "Login" ?
                                        <div className="text-center"><button className='s-btn' type="submit">Login</button></div>
                                        :
                                        <div className="text-center"><button className='s-btn' type="submit">Signup</button></div>
                            }
                            {
                                user === "Login" ?
                                    <div className="text-center">
                                        <br>
                                        </br>
                                        <span>Already have an Account<button onClick={() => { setReset('false'); setUser("SignUp") }}>Signup</button></span>
                                    </div>
                                    :
                                    <div className="text-center">
                                        <br>
                                        </br>
                                        <span>Create a New Account ?</span><button type="submit">Login</button>
                                        onSubmit={handleSubmit}
                                    </div>
                            }
                            <br>
                            </br>
                            <div className="text-center"><button type='submit' className='s-btn' onClick={() => setReset('true')}>Forget Password</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </center>
    );
}


export default Login;