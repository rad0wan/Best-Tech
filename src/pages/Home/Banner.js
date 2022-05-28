import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.asus.com/event/pcdiy/us/assets/img/hero/hero-pcdiy.jpg" class="max-w-xs lg:max-w-md rounded-lg shadow-2xl" alt='...' />
                    <div>
                        <h1 class="text-5xl font-bold">Which parts you need!</h1>
                        <p class="py-6">Best Tech is passionate about technology and driven by innovation. We dream, we dare and we strive to create an effortless and joyful digital life for everyone. We're always in search of incredible ideas and experiences, and we aspire to deliver the incredible in everything we do.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;