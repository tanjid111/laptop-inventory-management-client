import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        updateProfile,
        updating,
        updateError
    ] = useUpdateProfile(auth);

    const [userError, setUserError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }


    /* ---------------------------------------Registration submit btn-------------------------------------------------- */
    const onSubmit = async (data) => {
        const { name, email, password, confirmPassword } = data;

        /*---------------------------------------- Error Validation ---------------------------------------------------*/

        if (!/\S+@\S+\.\S+/.test(email)) {
            setUserError('Enter a valid email');
            return;
        };


        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setUserError('Password should contain at least one special character');
            return;
        }

        if (password.length < 6) {
            setUserError('Password should be more than 6 characters')
            return;
        }

        if (password !== confirmPassword) {
            setUserError('You two passwords did not match')
            return;
        }

        await createUserWithEmailAndPassword(email, password)
        setUserError('');
        navigate('/home')
        await updateProfile({ displayName: name });


    };
    return (
        <div className='container'>
            <h2 className="text-center bg-primary mx-auto py-5 text-light fw-bold" style={{ width: "30vw" }}>Registration Form</h2>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <label className='fw-bold text-primary fs-4'>Name</label>
                <input placeholder='Name' type="text" {...register("name")} />
                <label className='fw-bold text-primary fs-4'>Email</label>
                <input placeholder='Email' type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <label className='fw-bold text-primary fs-4'>Password</label>
                <input placeholder='Password' type="password" {...register("password")} />
                <label className='fw-bold text-primary fs-4'>Confirm Password</label>
                <input placeholder='Confirm Password' type="password" {...register("confirmPassword")} />
                <input type={"submit"} className="btn btn-primary mx-auto py-3" />
                <p className='text-danger' style={{ color: 'red' }}>{userError || error?.message || updateError?.message}</p>
                <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={() => navigate('/login')}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Register;