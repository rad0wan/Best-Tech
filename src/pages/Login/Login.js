import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let location = useLocation();
    let navigate = useNavigate();
    let errorMassage;
    let from = location.state?.from?.pathname || "/";

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        errorMassage = <p className='text-red-700 text-sm font-bold'>{error.message || gError.message}</p>
    }
    if (user || gUser) {
        navigate(from, { replace: true });
        console.log(user, gUser);
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-xl font-bold ">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered input-accent w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide Valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* password field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="input input-bordered input-accent w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
                                        message: 'Provide Valid password'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-accent w-full max-w-xs' type="submit" value={'Login'} />
                        <p className='text-xs pt-2'>New to Best Tech?<span className='text-yellow-700 cursor-pointer'><Link to={'/signUp'}> Create new account</Link></span></p>
                        <div class="divider">OR</div>
                    </form>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent w-full max-w-xs">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;