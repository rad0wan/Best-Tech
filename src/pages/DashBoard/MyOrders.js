import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteConfirmModal from './DeleteConfirmationModal';
import Order from './Order';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h1>My Orders</h1>
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
                <div>
                    {
                        deletingOrder && <DeleteConfirmModal
                            deletingOrder={deletingOrder}
                            setDeletingOrder={setDeletingOrder}
                            refetch={refetch}
                        ></DeleteConfirmModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;