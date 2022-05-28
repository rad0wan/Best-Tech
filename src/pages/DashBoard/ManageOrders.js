import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import OrderRow from './OrderRow';

const ManageOrders = () => {
    const [orders, setOrder] = useState([])
    const { data, isLoading, refetch } = useQuery('Order', () =>
        fetch('http://localhost:5000/order').then(res => res.json())
    )
    useEffect(() => {
        setOrder(data)
        console.log(data);
    }, [data])
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1>Order {orders?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>unpaid</th>
                            <th>pending</th>
                            <th>shipped </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderRow
                                key={index}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;