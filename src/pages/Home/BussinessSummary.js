import React from 'react';
import { GiPartyFlags } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';

const BusinessSummary = () => {
    return (
        <div style={{ background: 'url(https://baumeister.qodeinteractive.com/wp-content/uploads/2017/12/h1-slider-4-img-1.png)' }} className='text-center'>
            <h1 className='text-emerald-700 text-3xl font-bold mt-20 '>Millions Business Trust us</h1>
            <p className='text-gray-700 font-bold'>Try to understand user expectation</p>
            <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='pb-5'><GiPartyFlags size={80} color={'green'} /></p>
                    <p className='text-4xl font-bold'>45</p>
                    <p className='text-green-600 font-bold'>Countries</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='pb-5'><GrProjects size={80} color={'green'} /></p>
                    <p className='text-4xl font-bold'>545+</p>
                    <p className='text-green-600 font-bold'>Complete Project</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='pb-5'><BsFillPeopleFill size={80} color={'green'} /></p>
                    <p className='text-4xl font-bold'>454+</p>
                    <p className='text-green-600 font-bold'>Happy clients</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='pb-5'><FcLike size={80} color={'green'} /></p>
                    <p className='text-4xl font-bold'>435+</p>
                    <p className='text-green-600 font-bold'>FeedBacks</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;