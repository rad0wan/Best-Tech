import React from 'react';
import { useQuery } from 'react-query';
import Review from './Review';

const Reviews = () => {

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://shielded-fjord-09998.herokuapp.com/review').then(res => res.json()))



    return (
        <div className='my-20'>
            <h1 className='text-emerald-700 text-3xl font-bold text-center my-20'>What Our Client Says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews && reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;