import { useFormik, Formik } from 'formik';
import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { signUpAction, signInAction } from '../../Redux/Action/auth.action';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';


function Login(props) {
    const [user, setUser] = useState('Login');
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch();

    const handleLogin = () => {
        localStorage.setItem("user", "123");
    }

    let schemaObj, initVal;

    if (user === "Login") {
        schemaObj ={
            email: yup.string().email("Please enter your email id").required("Please enter a valid email id"),
            password: yup.string().required("Please enter your password"),
        }
        initVal = {
            email: '',
            password: '',
        }
    }else if(user === "signUp"){
        schemaObj ={
            email: yup.string().email("Please enter your email id").required("Please enter a valid email id"),
            password: yup.string().required("Please enter your password"),
        }
        initVal = {
            name: '',
            email: '',
            password: '',
        }
    }

    let schema = yup.object().shape(schemaObj);

    const handleData = (values) => {
        // let localData = JSON.parse(localStorage.getItem("user"));

        // if (localData == null){
        //     localStorage.setItem("user", JSON.stringify([values]));
        // }else{
        //     localData.push(values);
        //     localStorage.setItem("user", JSON.stringify(localData));
        // }
        // console.log(values);

        dispatch(signUpAction(values));
    }

        const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,

        onSubmit: values => {
            if(user === "Login") {
                handleLogin()
            }else{
                handleData(values);
            }
        },
    });

    const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;
    console.log(errors);

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
                        <Form className="php-email-form" onSubmit={handleSubmit}>
                            {
                                reset === "true" ?
                                    null :
                                    user === "Login" ?
                                        null
                                        :
                                        <div className="col-md-4 form-group">
                                            <input type="text"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="name"
                                                placeholder="Your name"
                                                name="name"
                                                className="form-control"
                                            />
                                            <div className="validate"></div>
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control"
                                    name="email" id="email"
                                    placeholder="Your email"
                                />
                                <div className="validate"></div>
                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>
                            {
                                reset === "true" ?
                                    null :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-control"
                                            name="password" id="password"
                                            placeholder="Your password"
                                        />
                                        <div className="validate" />
                                        <p>{errors.password && touched.password ? errors.password : ''}</p>
                                    </div>
                            }
                            {
                                reset === "true" ?
                                    <div className="text-center"><button className='s-btn' type='submit'>submit</button></div>
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
                                        <span>Create a New Account ?<button onClick={() => { setReset('false'); setUser("Login") }}>Login</button></span>
                                    </div>
                            }
                            {/* <br>
                                </br> */}
                            <div className="text-center"><button type='submit' className='s-btn' onClick={() => setReset('true')}>Forget Password</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </center>
    );
}


export default Login;
