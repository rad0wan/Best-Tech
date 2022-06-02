import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0jzBA6HnPsVcydHRnAz4pxjt6bCFV1KgT99ycS2m1Q1mPHNtW15eFFCNQYXwodvUZ6FVLp8mOTAVk5M4ihlCoM00s97ZHAb3');

const Payment = () => {
    const [order, setOrder] = useState({})
    const { id } = useParams()
    console.log(id);
    const url = `http://localhost:5000/order/${id}`

    // const { isLoading, error, data } = useQuery(['orderData', id], () =>
    //     fetch(url).then(res =>
    //         res.json()
    //     )
    // )

    useEffect(() => {
        fetch(`https://shielded-fjord-09998.herokuapp.com/order/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const { _id, email, quantity, product, price, customerName } = order;
    const totalPrice = parseInt(price) * parseInt(quantity);
    console.log(order);
    console.log(totalPrice);
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
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} ></CheckoutForm>
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;