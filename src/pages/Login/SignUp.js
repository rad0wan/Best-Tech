import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../shared/Loading';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let errorMassage;

    if (loading || updating || gLoading) {
        return <Loading></Loading>
    }
    if (error || uError || gError) {
        errorMassage = <p className='text-red-700 text-sm font-bold'>{error.message || uError.message || gError.message}</p>
    }

    const onSubmit = async (data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        reset()
    };
    console.log(user);

    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body text-center">
                        <h2 class="text-xl font-bold ">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* name field */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    class="input input-bordered input-accent w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },
                                        pattern: {
                                            value: 3
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.name.message}</span>}
                                </label>
                            </div>
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
                            <input className='btn btn-accent w-full max-w-xs' type="submit" value={'Sign Up'} />
                            {/* error massage */}
                            {errorMassage}
                            <p className='text-xs pt-2'>Already have an account?<span className='text-yellow-700 cursor-pointer'><Link to={'/Login'}> Login Now</Link></span></p>
                            <div class="divider">OR</div>
                        </form>
                        <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent w-full max-w-xs">Continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;