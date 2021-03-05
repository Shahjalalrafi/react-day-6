import React from 'react';

const Button = ({ color, text, onclick }) => {
    return (
        <div>
            <button style={{ backgroundColor: color}} onClick= {onclick} className="btn">{text} </button>
        </div>
    );
};

export default Button;