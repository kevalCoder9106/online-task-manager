import React, {useState} from 'react'
import './Form.css'

const Form = (props) => {
    const [title,setTitle] = useState('')
    const [descr,setDescr] = useState('')
    const [date,setDate] = useState('')

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const descrHandler = (event) => {
        setDescr(event.target.value)
    }
    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()

        const task_data = {
            id: Math.random().toString(),
            title: title,
            description: descr,
            date: new Date(date)
        }
        props.onAddNewTask(task_data)

        setTitle('')
        setDescr('')
        setDate('')
    }

    return(
        <form onSubmit={submit}>
            <div className='form-container'>
            <input type='text' placeholder='Title' className='input-field' onChange={titleHandler} value={title}></input>
            <input type='text' placeholder='Description' className='input-field' onChange={descrHandler} value={descr}></input>
            <input type='date' className='date-picker' onChange={dateHandler} value={date}></input>
            <button type='submit' className='pos-button btn'>Add Task</button>
        </div>
        </form>
    )
}

export default Form