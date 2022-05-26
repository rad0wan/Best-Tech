import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <h1 className='text-center text-3xl text-accent font-bold lg:mt-8 my-2 lg:mb-2 '>Welcome to our dashBoard</h1>
            <div class="drawer drawer-mobile">
                <input id="dashboard-slider" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-slider" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashBoard'}>My Orders</Link></li>
                        <li><Link to='/dashBoard/addAReviews'>Add A Reviews</Link></li>
                        <li><Link to='/dashBoard/myProfile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;