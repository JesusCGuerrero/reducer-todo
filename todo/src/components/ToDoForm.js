import React, { useState } from 'react'


const ToDoForm = (props) => {
    const [task, setTask] = useState("")

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    // console.log(task)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(task)
        setTask('')
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a new task" onChange={handleChange}/>
                <button className="submit" type="submit" onClick={() => props.dispatch({type: 'ADD_TASK', payload: task})}>Submit</button>
            </form>
        </div>
    )
}

export default ToDoForm