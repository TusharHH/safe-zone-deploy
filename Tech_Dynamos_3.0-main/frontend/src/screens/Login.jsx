import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Login.css";
import { useState } from 'react';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const navigate = useNavigate();
    const [backendError, setBackendError] = useState("");


    const navigate1 = useNavigate();

    const handleClick = () => {
        navigate1('/signup'); 
    };


    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', data, {
                withCredentials: true
            });

            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem("name", res.data.name);
                navigate("/");
            }
        } catch (err) {
            setBackendError(err.response?.data?.message || "An error occurred");
        }
    };

    return (
        <>
            <div className='login'>
                <div className="loginForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="header">
                            <span className='title'>Login / Signup</span>
                            <span className="desc">Now you can login get access to
                                <br /><span>community and chats</span>
                            </span>
                        </div>
                        <div className="form">
                            <button type='button' onClick={handleClick} className='label'>Signup</button>
                            <div className="email">
                                <label>Enter your Email : </label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        onChange: () => clearErrors('email')
                                    })}
                                    type="email"
                                    placeholder="Email"
                                />
                                {errors.email && <div className="error-message">{errors.email.message}</div>}
                            </div>
                            <div className="password">
                                <label>Enter your Password : </label>
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                        onChange: () => clearErrors('password')
                                    })}
                                    type="password"
                                    placeholder="Password"
                                />
                                {errors.password && <div className="error-message">{errors.password.message}</div>}
                            </div>
                            {backendError && <div className="error-message">{backendError}</div>}
                            <div className="button">
                                <button type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="formImg">
                    <img src="./login.jpg" />
                </div>
            </div>
        </>
    );
};

export default LoginForm;
