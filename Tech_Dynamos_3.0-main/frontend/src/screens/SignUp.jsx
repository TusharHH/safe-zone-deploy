import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = watch('password');

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('https://tech-dynamos-3-0-backend.vercel.app/api/auth/signup', data, {
                withCredentials: true
            });
            console.log(res.data);
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Username</label>
                <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Username is required' })}
                    placeholder="Username"
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    placeholder="Email"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' }
                    })}
                    placeholder="Password"
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Confirm Password is required',
                        validate: value => value === password || 'Passwords must match'
                    })}
                    placeholder="Confirm Password"
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
