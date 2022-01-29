import React, {useState} from 'react'
import './Main.css'
import TaskSlot from '../TaskSlot/TaskSlot'
import Form from '../Form/Form'

const tasks = []
const completed_task = []

const Lmao = () => {
    const [task_list,updateTaskList] = useState(tasks)
    const [completed_task_list,updateCompletedTaskList] = useState(completed_task)

    const updateTaskTitle = (oldTitle, newTitle) => {
        const updatedTaskList = []

        task_list.map(task => {
            if (task.title == oldTitle){
                task.title = newTitle
            }

            updatedTaskList.push(task)
        })

        updateTaskList( () => {return updatedTaskList})
    } 

    const completedTaskHandler = task_data => {
        const updated_task_list = []

        task_list.map(task => {
            if (task.title != task_data.title){
                updated_task_list.push(task)
            }
            else{
                console.log(task)
                updateCompletedTaskList(prevTasks => {
                    return [task,...prevTasks]
                })
            }
        })

        updateTaskList(prevTasks => {
            return updated_task_list
        })
    }

    const newTaskHandler = task_data => {
        updateTaskList(prevTasks => {
            return [task_data,...prevTasks]
        })
    }
    return(
        <div className='main-container'>
            <div className='form-container'>
                <Form onAddNewTask={newTaskHandler}/>
            </div>
            <div className='task-list'>
            {
                task_list.map(task => (
                    <TaskSlot key={task.id} title={task.title} descr={task.description} date={task.date.toISOString().split("T")[0]} updateTaskTitle={updateTaskTitle} onTaskCompletion={completedTaskHandler} completed_task={false}/>
                ))
            }
            </div>
            <div className='completed-task'>
            {
                completed_task_list.map(task => (
                    <TaskSlot key={task.id} title={task.title} descr={task.description} date={task.date.toISOString().split("T")[0]} onTaskCompletion={completedTaskHandler} completed_task={true}/>
                ))
            }
            </div>
        </div>
    )
}

export default Lmao