import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading';
import OrderRow from './OrderRow';
import Product from './Product';

const ManageProducts = () => {
    const [item, setItem] = useState('')
    const { data: products, isLoading, refetch } = useQuery('productss', () => fetch('https://shielded-fjord-09998.herokuapp.com/product')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(item);
    const handleDelete = () => {
        console.log(item);
        axios.delete(`https://shielded-fjord-09998.herokuapp.com/product/${item._id}`)
            .then(res => {
                console.log(res)
                toast('Successfully deleted')
                refetch()
            })
    }
    return (
        <div>
            <h1 className='text-2xl'>Products: {products?.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Min Quantity</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            products?.map((product, index) => <Product
                                product={product}
                                key={index}
                                index={index}
                                refetch={refetch}
                                setItem={setItem}
                            ></Product>)
                        }
                    </tbody>
                </table>
                <input type="checkbox" id="my-modal-7" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="my-modal-7" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">Are you sure you want delete {item?.name}!!</h3>
                        <div class="modal-action">
                            <label onClick={handleDelete} for="my-modal-7" class="btn btn-error">Delete</label>
                            <label for="my-modal-7" class="btn">cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;