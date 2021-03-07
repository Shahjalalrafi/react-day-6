import React, { useContext } from 'react';
import { CategoryDetail } from '../App';

const CategoryDetails = ({product}) => {
    // const {name} = props.product
    return (
        <div>
            <h4>category details: {product.name}</h4>
        </div>
    );
};

export default CategoryDetails;