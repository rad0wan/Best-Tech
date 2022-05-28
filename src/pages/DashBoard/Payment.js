import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0jzBA6HnPsVcydHRnAz4pxjt6bCFV1KgT99ycS2m1Q1mPHNtW15eFFCNQYXwodvUZ6FVLp8mOTAVk5M4ihlCoM00s97ZHAb3');

const Payment = () => {

    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const { _id, email, quantity, product, price, customerName } = order;
    const totalPrice = parseInt(price) * parseInt(quantity);
    return (
        <div className=' mx-5'>
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-green-600 font-bold'>Hello, {customerName}</p>
                    <h2 class="card-title text-gray-700 ">PLease Pay for <span className='text-amber-700'>{product}</span></h2>
                    <p>Your products is available for delivery</p>
                    <p>Please pay: $<span className='text-lime-700 font-bold'>{totalPrice}</span></p>
                </div>
            </div>
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;