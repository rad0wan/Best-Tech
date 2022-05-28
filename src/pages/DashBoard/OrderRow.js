import React from 'react';

const OrderRow = ({ order }) => {
    return (
        <tr>
            <th>{order.product}</th>
            <td>{ }</td>
            <td>{ }</td>
            <td>{ }</td>
            <td>{ }</td>
        </tr>
    );
};

export default OrderRow;