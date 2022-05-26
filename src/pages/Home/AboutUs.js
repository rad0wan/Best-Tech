import React from 'react';

const AboutUs = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='basis-1/2' src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/10/Computer-Parts-Stores.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5" class="max-w-sm rounded-lg shadow-2xl" alt='..' />
                    <div className='basis-1/2'>
                        <p class="py-6">About Us</p>
                        <h1 class="text-5xl font-bold">The manufacture of industrial equipment requires!</h1>
                        <p className='py-6'>We may not manufacture tires, mattresses, medications, or animal feeds, but Manufacturer is part of all of those products – and many more. While we often contribute only small amounts of material, those contributions are precisely what make the difference.</p>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;