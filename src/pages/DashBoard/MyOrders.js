import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import DeleteConfirmModal from './DeleteConfirmationModal';
import Order from './Order';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [deletingOrder, setDeletingOrder] = useState(null)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://shielded-fjord-09998.herokuapp.com/order/${user.email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h1 className='text-2xl'>My Orders: {orders?.length}</h1>

            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders && orders.map(order => <Order
                                key={order._id}
                                order={order}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            ></Order>)
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;