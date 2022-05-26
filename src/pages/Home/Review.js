import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Review = ({ review }) => {

    const { name, img, description, location, rating } = review

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <div >
                    <img className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={img} alt="UserImage" />
                    <h2 class="card-title">{name}</h2>
                    <p className='text-xs'>{location}</p>
                </div>
                <p className='text-gray-700 text-sm'>{description}</p>
                <div class="card-actions justify-start text-orange-500 items-center">
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> {rating}star
                </div>
            </div>
        </div>
    );
};

export default Review;