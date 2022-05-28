import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Order = ({ order }) => {

    const { _id, email, quantity, product, price, productId, customerName, img, refetch, setDeletingOrder } = order;

    const totalPrice = parseInt(quantity) * parseInt(price);

    // const handleDelete = () => {
    //     axios.delete(`http://localhost:5000/order/${_id}`)
    //         .then(res => {
    //             console.log(res)
    //             toast('Successfully deleted')
    //             refetch()
    //         })

    // }

    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Product" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{product}</div>
                    </div>
                </div>
            </td>
            <td>
                {quantity} pices
            </td>
            <td>{price}$/pice</td>
            <td>{totalPrice}$</td>
            <th>
                <button class="btn btn-success btn-xs mr-2">Pay</button>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-error btn-xs">Delete</label>
            </th>
        </tr>
    );
};

export default Order;