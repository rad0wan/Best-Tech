import React from 'react';

const OrderRow = ({ order }) => {
    return (
        <tr>
            <th>{order.product}</th>
            <td>{order.customerName}</td>
            <td>{
                order.paid
                    ?
                    <p class="text-success font-bold">Paid</p>
                    :
                    <p class="text-warning font-bold">Unpaid</p>
            }</td>
            <td>{order.paid && <>
                <p className='text-primary font-bold'>Pending</p>
                <button className='btn btn-info'>Shipped</button>
            </>}</td>
            <td>{ }</td>
        </tr>
    );
};

export default OrderRow;