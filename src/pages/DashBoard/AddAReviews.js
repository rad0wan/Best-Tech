import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReviews = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const info = {
            name: user.displayName,
            description: data.description,
            rating: data.rating,
            img: user?.photoURL || ''
        }
        axios.post('http://localhost:5000/review', info)
            .then(res => {
                console.log(res.data);
                toast("Successfully review added")
                reset()
            })
    };



    return (
        <div className='flex justify-start mt-5 ml-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body ">
                    <h2 class="card-title">Add A Reviews Now!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Rating</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your rating"
                                class="input input-bordered input-accent w-full max-w-xs"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is required'
                                    },
                                    pattern: {
                                        value: /[1-5]/,
                                        message: 'Provide a number 1-5'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.rating?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.rating.message}</span>}
                                {errors.rating?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.rating.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea
                                placeholder="Your Description"
                                class="textarea textarea-accent w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is required'
                                    },
                                    pattern: {
                                        value: 3,
                                        message: 'Write Something'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.description?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.description.message}</span>}
                                {errors.description?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.description.message}</span>}
                            </label>
                        </div>
                        <input class="btn btn-accent w-full max-w-xs" type="submit" value={'Add Review'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReviews;     