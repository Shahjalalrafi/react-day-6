import React, { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit= (e) => {
        e.preventDefault()

        if(!text) {
            alert('please input something')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>task</label>
                <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="add task" />
            </div>

            <div className="form-control">
                <label>Day and time</label>
                <input onChange={(e) => setDay(e.target.value)} value={day} type="text" placeholder="add day and time" />
            </div>

            <div className="form-control form-control-check">
                <label>set reminder</label>
                <input onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder} value={reminder} type="checkbox" />
            </div>

            <input type="submit" value="save task"  className="btn btn-block" />
        </form>
    );
};

export default AddTask;