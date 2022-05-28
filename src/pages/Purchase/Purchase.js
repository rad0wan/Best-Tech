import { async } from '@firebase/util';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const [errorMsg, setErrorMsg] = useState('')
    const [quantity, setQuantity] = useState(0)
    const navigate = useNavigate()

    const id = useParams()
    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`https://shielded-fjord-09998.herokuapp.com/product/${id.id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    const { _id, name, img, details, minOrderQuantity, availableQuantity, price } = product;

    const handleQuantity = event => {
        const quantity = event.target.value;
        console.log(quantity);
        if (quantity < minOrderQuantity) {
            setErrorMsg(`You have to purchase at least ${minOrderQuantity} products`)
            setQuantity(quantity)
            return;
        } else if (quantity > availableQuantity) {
            setErrorMsg(`You have to purchase at maximum range ${availableQuantity} products`)
            setQuantity(quantity)
            return;
        }
        setErrorMsg('')
        setQuantity(quantity)
    }
    console.log(quantity);
    const handleSubmit = event => {
        event.preventDefault()

        const info = {
            email: user.email,
            quantity: quantity,
            product: name,
            price: price,
            productId: _id,
            customerName: user.displayName,
            img: img
        }

        axios.post('https://shielded-fjord-09998.herokuapp.com/order', info)
            .then(res => {
                console.log(res.data);
                toast("Successfully your order added")
                navigate('/dashBoard')
            })
    }
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
                    <form onSubmit={handleSubmit}>
                        <div class="form-control w-full max-w-xs">
                            <input
                                onChange={handleQuantity}
                                type="number"
                                placeholder="Select quantity"
                                class="input input-bordered input-success w-full max-w-xs"
                                defaultValue={minOrderQuantity}
                            />
                            <label class="label">
                                <span className='text-red-600 label-text-alt'>{errorMsg}</span>
                            </label>
                        </div>
                        {(quantity < minOrderQuantity || quantity > availableQuantity) ?
                            < input disabled class="btn btn-outline btn-success " type="submit" value={'Purchase Now'} />
                            :
                            < input class="btn btn-outline btn-success " type="submit" value={'Purchase Now'} />}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;