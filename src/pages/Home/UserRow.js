import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {

    const [deletingOrder, setDeletingOrder] = useState('a')

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('failed to make admin')
            }
            return res.json()
        })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin successfully added')
                }
            })
    }
    console.log(user);
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/user/${user._id}`)
            .then(res => {
                console.log(res)
                toast('Successfully deleted')
                setDeletingOrder(null)
                refetch()
            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' ?
                <button onClick={makeAdmin} class="btn btn-success text-white btn-sm">Make Admin</button> :
                <span className='text-primary font-bold'>Already Admin</span>}</td>
            {/* <td><button onClick={handleDelete} class="btn btn-error text-white btn-sm"></button></td> */}
            {/* <!-- The button to open modal --> */}
            <td><label for="my-modal-6" class="btn btn-error text-white btn-sm">Remove Admin</label></td>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Are you sure you want delete {user.email}!!</h3>
                    <div class="modal-action">
                        <label onClick={handleDelete} for="my-modal-6" class="btn btn-error">Delete</label>
                        <label for="my-modal-6" class="btn">cancel</label>
                    </div>
                </div>
            </div>
        </tr >
    );
};

export default UserRow;