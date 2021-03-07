import SingleTask from "./SingleTask";

const Task = ({task}) => {
   
    return (
        <div>
            {
                task.map(task => <SingleTask key={task.id} task= {task} />)
            }
        </div>
    );
};

export default Task;