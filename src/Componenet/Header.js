import React from 'react';
import '../index.css'
import Button from './Button';

const Header = ({title}) => {
    const onclick = () => {
        console.log('clicked')
    }
    return (
        <header className='header'>
            <h1>Task tracker</h1>
            <Button color="red" text = "add" onclick= {onclick} />
        </header>
    );
};

Header.defaultProps = {
    title: 'Task tracker'
}



export default Header;<h1>Task tracker</h1>