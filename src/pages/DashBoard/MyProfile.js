import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const MyProfile = () => {

    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const info = {
            email: user.email,
            education: data.education,
            linkedIn: data.linkedIn,
            location: data.location,
            phoneNumber: data.phoneNumber
        }
        console.log(info);
        console.log(data.linkedIn);
        console.log(data)
        axios.put(`http://localhost:5000/user/${user.email}`, info)
            .then(res => {
                console.log(res);
                console.log(res.data);
                toast("Successfully your profile updated")
                reset()
            })
    };

    const { data: profile, isLoading } = useQuery('profile', () => fetch(`http://localhost:5000/user/${user.email}`).then(res => res.json()))
    console.log(profile);
    if (isLoading) {
        return <Loading></Loading>
    }
    const { phoneNumber, location, linkedIn, education } = profile
    return (
        <div className='mt-5 ml-5 grid grid-cols-1 lg:grid-cols-2'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL} alt="UserProfile" class="rounded-xl" />
                </figure>
                <div class="card-body ">
                    <h2 class="card-title">Name: {user?.displayName}</h2>
                    <p className='text-slate-800 font-bold'>Email: <span className='text-cyan-600 font-semibold'>{user.email}</span></p>
                    <p className='text-slate-800 font-bold'>Education: <span className='text-cyan-600 font-semibold'>{education}</span></p>
                    <p className='text-slate-800 font-bold'>location: <span className='text-cyan-600 font-semibold'>{location}</span></p>
                    <p className='text-slate-800 font-bold'>phone number: <span className='text-cyan-600 font-semibold'>{phoneNumber}</span></p>
                    <p className='text-slate-800 font-bold'>linked In Link: <span className='text-cyan-600 font-semibold'>{linkedIn}</span></p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* education */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">education</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your education"
                                class="input input-bordered input-success w-full max-w-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'education is required'
                                    },
                                    pattern: {
                                        value: 3,
                                        message: 'Provide a education institute'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.education?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.education.message}</span>}
                                {errors.education?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.education.message}</span>}
                            </label>
                        </div>
                        {/* location  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">location </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your location "
                                class="input input-bordered input-success w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'location  is required'
                                    },
                                    pattern: {
                                        value: 4,
                                        message: 'Provide a valid location'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.location?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.location.message}</span>}
                                {errors.location?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.location.message}</span>}
                            </label>
                        </div>
                        {/* phone number */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">phone number </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your phone number "
                                class="input input-bordered input-success w-full max-w-xs"
                                {...register("phoneNumber", {
                                    required: {
                                        value: true,
                                        message: 'phone number  is required'
                                    },
                                    pattern: {
                                        value: 11,
                                        message: 'Provide a valid phone Number'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.phoneNumber?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.phoneNumber.message}</span>}
                                {errors.phoneNumber?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.phoneNumber.message}</span>}
                            </label>
                        </div>
                        {/* Linked in link */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Linked In </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Linked In Link "
                                class="input input-bordered input-success w-full max-w-xs"
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'Linked In  is required'
                                    },
                                    pattern: {
                                        value: 4,
                                        message: 'Provide a valid Linked In'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.linkedIn?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.linkedIn.message}</span>}
                                {errors.linkedIn?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.linkedIn.message}</span>}
                            </label>
                        </div>
                        <input class="btn btn-success w-full max-w-xs" type="submit" value={'Update Now'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;