import SingleTask from "./SingleTask";

const Task = ({task, onDelete , onToggle}) => {
   
    return (
        <div>
            {
                task.map(task => <SingleTask key={task.id} onDelete= {onDelete} task= {task} onToggle = {onToggle} />)
            }
        </div>
    );
};

export default Task;