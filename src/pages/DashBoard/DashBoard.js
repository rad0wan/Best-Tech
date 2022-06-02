import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    console.log(admin);

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
                        {
                            !admin && <>
                                <li><Link to={'/dashBoard'}>My Profile</Link></li>
                                <li><Link to='/dashBoard/addAReviews'>Add A Reviews</Link></li>
                                <li><Link to='/dashBoard/myOrders'>My Orders</Link></li>
                            </>
                        }
                        {admin && <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/orders'>All Orders</Link></li>
                            <li><Link to='/dashboard/AddAProduct'>Add A Product</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;