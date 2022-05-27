import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/purchase/${id}`)
    }

    const { _id, name, img, details, minOrderQuantity, availableQuantity, price } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-2 pt-2">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-sm text-gray-500'>{details}</p>
                <p className='font-semibold'>Min Order Quantity: <span className='text-lime-600'>{minOrderQuantity}</span></p>
                <p className='font-semibold'>Available Quantity: <span className='text-green-700'>{availableQuantity}</span></p>
                <p className='font-semibold'>Price: <span className='text-teal-500'>{price}$</span>/pice</p>
                <div class="card-actions">
                    <button className='btn btn-primary' onClick={() => handleClick(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;