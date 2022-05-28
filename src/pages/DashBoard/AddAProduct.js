import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const ApiKey = '2f698655bc0b68ac81ac5d3127edd234'

    const onSubmit = async data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('img', result);
                const img = result.data.url;
                if (result.success) {
                    const product = {
                        product: data.name,
                        details: data.Description,
                        price: data.price,
                        maxOrderQuantity: data.maxOrderQuantity,
                        minOrderQuantity: data.minOrderQuantity,
                        img: img
                    }
                    // send to  database
                    axios.post('http://localhost:5000/product', product, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(res => {
                        console.log(res.data);
                        const inserted = res.data;
                        if (inserted.insertedId) {
                            toast.success('Successfully added')
                            reset();
                        } else {
                            toast.error('Failed to add')
                            reset();
                        }
                    })
                }
            })

    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl'>Add a new Product</h1>
                {/* Name Felid */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            pattern: {
                                value: 3,
                                message: 'Provide Valid Name'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.name.message}</span>}
                    </label>
                </div>
                {/* Description Felid */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea
                        placeholder="Your Description"
                        class="textarea textarea-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is required'
                            },
                            pattern: {
                                value: 3,
                                message: 'Write Something'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.description?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.description.message}</span>}
                        {errors.description?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.description.message}</span>}
                    </label>
                </div>
                {/* minOrderQuantity Felid */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Min Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your min Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minOrderQuantity", {
                            required: {
                                value: true,
                                message: 'minOrderQuantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minOrderQuantity?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.minOrderQuantity.message}</span>}
                    </label>
                </div>
                {/* maxOrderQuantity Felid */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Max Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your max Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("maxOrderQuantity", {
                            required: {
                                value: true,
                                message: 'maxOrderQuantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.maxOrderQuantity?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.maxOrderQuantity.message}</span>}
                    </label>
                </div>
                {/* price Felid */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.price.message}</span>}
                    </label>
                </div>
                {/* image field */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.image.message}</span>}
                        {errors.image?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.image.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddAProduct;