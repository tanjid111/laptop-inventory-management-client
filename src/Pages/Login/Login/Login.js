import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data)
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
    };

    return (
        <div className='container'>
            <h2 className="text-center bg-primary mx-auto py-5 text-light fw-bold" style={{ width: "30vw" }}>Login Form</h2>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <label className='fw-bold text-primary fs-4'>Email</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <label className='fw-bold text-primary fs-4'>Password</label>
                <input type="password" {...register("password")} />
                <input type={"submit"} className="btn btn-primary mx-auto py-3" />
                {/* <p className='text-danger' style={{ color: 'red' }}>{error?.message || userError || resetError?.message}</p> */}
                <p>New to the realtor website? <Link to='/register' className='text-primary text-decoration-none' onClick={() => navigate('/register')}>Please Register</Link></p>
                {/* <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button> </p> */}
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Login;