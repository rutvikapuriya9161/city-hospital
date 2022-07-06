import React, { useRef } from 'react';

function RefExample(props) {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const conpasswordRef = useRef();

    const handleSubmit = () => {
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(conpasswordRef.current.value);

        nameRef.current.style.backgroundColor = '#fc5d35'
        nameRef.current.style.color = '#fff'
        emailRef.current.focus();
        conpasswordRef.current.style.backgroundColor = '#fc5d35'
        conpasswordRef.current.style.color = '#fff'


    }

    return (
        <div>
            <center>
                <br></br>
                <br></br>
                <input ref={nameRef} type="text" name='name' placeholder='Your Name'/>
                <br></br>
                <br></br>
                <input ref={emailRef} type="email" name='email' placeholder='Your Email'/>
                <br></br>
                <br></br>
                <input ref={passwordRef} type="password" name='password' placeholder='Your Password'/>
                <br></br>
                <br></br>
                <input ref={conpasswordRef} type="password" name='password' placeholder='Your Conform Password'/>
                <br></br>
                <br></br>
                <button class="appointment-btn scrollto" onClick={() => handleSubmit()}>Submit</button>
            </center>
        </div>
    );
}

export default RefExample;