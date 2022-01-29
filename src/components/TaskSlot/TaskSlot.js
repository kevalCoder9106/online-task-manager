import './TaskSlot.css'
import React, {useState} from 'react'

const TaskSlot = (props) => {
    const [title,setTitle] = useState(props.title)

    const changeTitle = () => {
        const oldTitle = title;
        const newTitle = prompt("Enter new title")

        setTitle(newTitle)
        props.updateTaskTitle(oldTitle,newTitle)
    }

    const sendTaskData = () => {
        const task_data = {
            title: title,
            descr: props.descr,
            date: props.date
        }

        props.onTaskCompletion(task_data)        
    }

    return(
        <div className='slot-container'>
            <div className='slot'>
                <h2 className='title'>{title}</h2>
                <h5 className='descr'>{props.descr}</h5>
                <h3 className='due-date'>{props.date}</h3>
            </div>
            {
                props.completed_task === false
                ?
                <div>
                    <button className='change-title-btn btn' onClick={changeTitle}>Change Title</button>
                    <button className='done-btn btn' onClick={sendTaskData}>Done</button>
                </div>
                :
                // nothing
                console.log()
            }
        </div>
    )
}

export default TaskSlot