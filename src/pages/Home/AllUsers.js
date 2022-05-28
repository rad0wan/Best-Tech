import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const { data, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/user').then(res => res.json())
    )
    useEffect(() => {
        setUsers(data)
        console.log(data);
    }, [data])
    if (isLoading) {
        return <Loading />
    }
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
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;