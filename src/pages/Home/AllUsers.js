import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState('')
    const { data, isLoading, refetch } = useQuery('users', () =>
        fetch('https://shielded-fjord-09998.herokuapp.com/user').then(res => res.json())
    )
    useEffect(() => {
        setUsers(data)
        console.log(data);
    }, [data])
    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        axios.delete(`https://shielded-fjord-09998.herokuapp.com/user/${id}`)
            .then(res => {
                console.log(res)
                toast('Successfully deleted')
                refetch()
            })

    }

    console.log(userId._id);
    return (
        <div>
            <h1>Users {users?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                setUserId={setUserId}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">Are you sure you want delete {userId?.email}!!</h3>
                        <div class="modal-action">
                            <label onClick={() => handleDelete(userId?._id)} for="my-modal-6" class="btn btn-error">Delete</label>
                            <label for="my-modal-6" class="btn">cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;