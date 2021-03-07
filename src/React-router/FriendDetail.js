import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let { friendId } = useParams()
    const [friend, setFriend] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <p>this is friend details: {friendId}</p>
            <h3>Name:  {friend.name}</h3>
            <h4>Email:  {friend.email}</h4>
            <h4>Number:  {friend.phone}</h4>
            <h4>Website:  {friend.website}</h4>
        </div>
    );
};

export default FriendDetail;