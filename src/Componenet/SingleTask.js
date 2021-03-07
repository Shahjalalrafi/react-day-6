import React from 'react';

const SingleTask = ({task}) => {
    return (
        <div className="task">
            <h1>{task.name}</h1>
        </div>
    );
};

export default SingleTask;