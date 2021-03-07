import React, { useContext } from 'react';
import { CategoryDetail } from '../App';
import Category from '../Category/Category';

const Hi = () => {
    const number = useContext(CategoryDetail)
    return (
        <div>
            <h2>Hi: {number}</h2>
            <Category></Category>
            
        </div>
    );
};

export default Hi;