import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, details, minOrderQuantity, availableQuantity, price } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-2 pt-2">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-sm text-gray-600'>{details}</p>
                <p>Min Order Quantity: {minOrderQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Price: ${price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary"><Link to={`/purchase/${_id}`}>Buy Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Part;