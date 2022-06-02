import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, index, refetch, setItem }) => {
    const { _id, name, img, availableQuantity, price, minOrderQuantity } = product;

    const handleDelete = () => {
        console.log(_id);
        axios.delete(`https://shielded-fjord-09998.herokuapp.com/product/${_id}`)
            .then(res => {
                console.log(res)
                toast('Successfully deleted')
                refetch()
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>
                <div class="avatar">
                    <div class="w-16 mask mask-squircle">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </th>
            <td>{name}</td>
            <td>${price}</td>
            <td>{minOrderQuantity} pices</td>
            <td>{availableQuantity} pices</td>
            {/* <!-- The button to open modal --> */}
            <td><label onClick={() => setItem(product)} for="my-modal-7" class="btn btn-error ">Delete</label></td>
            {/* <!-- Put this part before </body> tag-- > */}
            {/* <input type="checkbox" id="my-modal-7" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-7" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Are you sure you want delete {name}{_id}!!</h3>
                    <div class="modal-action">
                        <label onClick={handleDelete} for="my-modal-7" class="btn btn-error">Delete</label>
                        <label for="my-modal-7" class="btn">cancel</label>
                    </div>
                </div>
            </div> */}
        </tr>
    );
};

export default Product;