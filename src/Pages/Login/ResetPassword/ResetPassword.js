import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const [
        userError,
        setUserError
    ] = useState('');
    const [
        sendPasswordResetEmail,
        sending, resetError
    ] = useSendPasswordResetEmail(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();

    if (sending) {
        return <Loading></Loading>
    }

    const onSubmit = async (data) => {

        const { email } = data;

        if (!/\S+@\S+\.\S+/.test(email)) {
            setUserError('Enter a valid email');
            return;
        };

        if (email) {
            await sendPasswordResetEmail(email);
            setUserError('')
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
            setUserError('Please enter your email address')
        }

    };



    return (

        <div className='container'>
            <h2 className="text-center bg-primary mx-auto py-5 text-light fw-bold" style={{ width: "30vw" }}>Reset Form</h2>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <label className='fw-bold text-primary fs-4'>Email</label>
                <input type="email" {...register("email", { required: false })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type={"submit"} className="btn btn-primary mx-auto py-3" />
                <p className='text-danger' style={{ color: 'red' }}> {resetError?.message || userError}</p>

            </form>
            <ToastContainer />
        </div>


    );
};

export default ResetPassword;