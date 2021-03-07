import React from 'react';
import { Link, useHistory } from 'react-router-dom';

  const design = {
      border: "1px solid red",
      padding: "5px",
      margin: "3px"
    }

const Friends = ( {friend}) => {
    let History= useHistory()
    const HandleClick = (his) => {
        History.push(`/friend/${his}`)
    }
    return (
        <div>
            <div style={design}>
                <p>
                    
                        <h1>Name: {friend.name}</h1>
                        <p>Email: {friend.email}</p>
                        <Link to ={`/friend/${friend.id}`}>show details</Link>
                        <button onClick={() =>      HandleClick(friend.id)}>show details</button>
                </p>
            </div>
        </div>
    );
};

export default Friends;