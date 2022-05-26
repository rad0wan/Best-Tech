import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.asus.com/event/pcdiy/us/assets/img/hero/hero-pcdiy.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='...' />
                    <div>
                        <h1 class="text-5xl font-bold">Which parts you need!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;