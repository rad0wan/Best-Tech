import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const id = useParams()
    console.log(id.id);
    const { data: product, isLoading } = useQuery('product', () => fetch(`http://localhost:5000/product/${id.id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    const { name, img, details, minOrderQuantity, availableQuantity, price } = product;

    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-2xl mt-10">
                <figure><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-gray-500'>{details}</p>
                    <p className='font-semibold'>Min Order Quantity: <span className='text-lime-600'>{minOrderQuantity}</span></p>
                    <p className='font-semibold'>Available Quantity: <span className='text-green-700'>{availableQuantity}</span></p>
                    <p className='font-semibold'>Price: <span className='text-teal-500'>{price}$</span>/pice</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            {/* <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label> */}
                            <input
                                type="number"
                                placeholder="Select quantity"
                                class="input input-bordered input-success w-full max-w-xs"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Quantity is required'
                                    },
                                    validate: value => value > minOrderQuantity && value < availableQuantity,
                                    message: 'Please select a current value'
                                })}
                            />
                            <label class="label">
                                {errors.quantity?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'validate' && <span className='text-red-600 label-text-alt'>{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <input class="btn btn-outline btn-success " type="submit" value={'Purchase Now'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;