import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate(`/login`);
    }

    const handleRegister = event =>{
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;



    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" />
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='password' required/> 
                <input type="submit" value="Register" />
                <p>Already Have an Account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Log In</Link></p>
            </form>
            
        </div>
    );
};

export default Register;