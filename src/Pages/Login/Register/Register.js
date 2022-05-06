import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='container'>
            <h2 className="text-center bg-primary mx-auto py-5 text-light fw-bold" style={{ width: "30vw" }}>Registration Form</h2>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <label className='fw-bold text-primary fs-4'>Name</label>
                <input type="text" {...register("name")} />
                <label className='fw-bold text-primary fs-4'>Email</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <label className='fw-bold text-primary fs-4'>Password</label>
                <input type="password" {...register("password")} />
                <input type={"submit"} className="btn btn-primary mx-auto py-3" />
                {/* <p className='text-danger' style={{ color: 'red' }}>{userError || error?.message}</p> */}
                <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={() => navigate('/login')}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Register;