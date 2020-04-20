import React, { useState, useReducer } from 'react'

const ToDo = (props) => {

    return (
    <div>
        <button className="remove" onClick={() => {props.dispatch({ type: "REMOVE_COMPLETED"});}}>Remove Finished Tasks</button>
        {props.state.todos.map((item) => {
            return <h3 className={item.completed ? ' completed' : ''} key={item.id} onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: item.id})}>
                 {item.task}</h3>
        })}
        
    </div>
    )
}

export default ToDo