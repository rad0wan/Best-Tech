import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Part from './Part';

const OurParts = () => {

    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://shielded-fjord-09998.herokuapp.com/product', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    return (
        <div>
            <h1 className='text-emerald-700 text-3xl font-bold my-5 text-center'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts && parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default OurParts;