import React, { useContext } from 'react';
import { CategoryDetail } from '../App';


const Hello = () => {
    const [count, setCount] = useContext(CategoryDetail)
    return (
        <div>
            <h1>hello: {count}</h1>
            <button onClick={() => setCount("Laptop")}>laptop</button>
            <button onClick={() => setCount("mobile")}>mobile</button>
            <button onClick={() => setCount("camera")}>camera</button>
        </div>
    );
};

export default Hello;