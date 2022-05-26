import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';

const Purchase = () => {

    const id = useParams()

    const { data: product, isLoading } = useQuery('product', () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    const { name, img, details, minOrderQuantity, availableQuantity, price } = product;
    return (
        <div>
            <h1>{product && product.name}</h1>
        </div>
    );
};

export default Purchase;