import React, { useContext } from 'react';
import { CategoryDetail } from '../App';

const Thank = () => {
    const [num, setNum] = useContext(CategoryDetail)
    return (
        <div>
            <h1>Thank YOu: {num}</h1>
            <button onClick= {() => setNum(num +2)}>increase from thank</button>
        </div>
    );
};

export default Thank;