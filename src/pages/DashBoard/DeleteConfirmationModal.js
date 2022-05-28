import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { _id, product } = deletingOrder;

    const handleDelete = () => {
        axios.delete(`https://shielded-fjord-09998.herokuapp.com/order/${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    toast.success('Successfully deleted')
                    setDeletingOrder(null)
                }
            })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want delete order {product}!</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;