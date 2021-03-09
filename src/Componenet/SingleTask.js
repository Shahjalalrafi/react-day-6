import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'

const SingleTask = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3  onDoubleClick= {() => onToggle(task.id)}>{task.name} <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.date}</p>
        </div>
    );
};

export default SingleTask;