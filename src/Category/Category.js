import React, { useContext, useEffect, useState } from 'react';
import { CategoryDetail } from '../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allCategory = [
    {name: 'Lenovo', category: 'laptop'}, {name: 'asus', category: 'mobile'}, {name: 'hp', category: 'camera'},
    {name: 'Lenovo', category: 'laptop'}, {name: 'asus', category: 'camera'}, {name: 'hp', category: 'mobile'},
    {name: 'Lenovo', category: 'camera'}, {name: 'asus', category: 'laptop'}, {name: 'hp', category: 'laptop'},
]

const Category = () => {
    const category = useContext(CategoryDetail)
    const [products, setProducts] =  useState([])

    console.log(category)
    useEffect(() => {
        const matchProducdt = allCategory.filter(pd => pd.category.toLowerCase() === category && category.toLowerCase())
        setProducts(matchProducdt)
    }, [category])
    return (
        <div>
            <h1>This is category: {category}</h1>
            {
                products.map(pd => <CategoryDetails product= {pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Category;