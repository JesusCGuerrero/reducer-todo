import React, { useReducer, useEffect } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import { initialState, reducer } from './reducers/Reducer'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state)

  return (
    <div className="myApp">
      <h1>To Do List</h1>
      
      <ToDoForm dispatch={dispatch} />
      <ToDo dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;