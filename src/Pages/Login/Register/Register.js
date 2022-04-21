import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate(`/login`);
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName : name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>

                <input type="text" name="name" id="name" placeholder='Your Name' />
                <input type="email" name="email" id="email" placeholder='Your Email' required />

                <input type="password" name="password" id="pasword" placeholder='password' required />
                {/*===================
                   input check box
                   =================== */}
                <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="check-box" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car terms and Conditions</label>
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car terms and Conditions</label> */}

                <input
                    disabled={!agree}
                    type="submit"
                    className='btn btn-primary mt-3'
                    value="Register" />

                <p>Already Have an Account ? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Log In</Link></p>

                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Register;