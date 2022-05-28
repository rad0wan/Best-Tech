import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                {/* <figure class="px-10 pt-10">
                    <img src='' alt="Shoes" class="rounded-xl" />
                </figure> */}
                <div class="card-body items-center text-center ">
                    <h2 class="card-title ">Mohammad Ridwan</h2>
                    <p>Email: radowan.me@gmail.com</p>
                    <p>Education: Honor's first year in political science</p>
                    <p className=''>web development Skills: <span>Html,css,JavaScript,Bootstrap,Tailwind,daisyUi, <br /> React,Node,Mongodb,Express</span></p>
                    <p>Some websites:</p>
                    <a className='text-green-600' href="https://discover-the-world-dae31.web.app/">Discover the World</a>
                    <a className='text-green-600' href="https://best-tech0.web.app/"> Best Tech</a>
                    <a className='text-green-600' href="https://spice-house0.web.app/">Spice House</a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;