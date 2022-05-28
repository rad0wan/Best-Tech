import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ order, refetch }) => {

    const { _id, email, quantity, product, price, productId, customerName, img } = order;

    const totalPrice = parseInt(quantity) * parseInt(price);

    const handleDelete = () => {
        axios.delete(`https://shielded-fjord-09998.herokuapp.com/order/${_id}`)
            .then(res => {
                console.log(res)
                toast('Successfully deleted')
                refetch()
            })
    }

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
                {price && !order.paid && <> <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-success btn-xs mr-2">Pay</button></Link>
                    <label for="my-modal-5" class="btn btn-error text-white btn-xs">Delete</label> </>}
                {
                    price && order.paid && <div>
                        <p class="text-success font-bold">Paid</p>
                        <p class="text-lime-600 font-bold ">Transition Id: <br /> {order.transitionId}</p>
                    </div>
                }
            </th>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Are you sure you want delete {product}!!</h3>
                    <div class="modal-action">
                        <label onClick={handleDelete} for="my-modal-5" class="btn btn-error">Delete</label>
                        <label for="my-modal-5" class="btn">cancel</label>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default Order;