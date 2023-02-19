import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [value1, setValue1] = useState("");
    const [currentId, setCurrentId] = useState();
    const [isEditing, setEditing] = useState(false);
    const [editText, setEditText] = useState("");

    //Add task function
    const handleAddTask = (e, input) => {
        e.preventDefault();
        const newTask = {
            text: input,
            completed: false
        }
        tasks.push(newTask);
        console.log(tasks);
        setTasks(tasks);
        setValue1("");
    }

  return (
    <div className="App">
      <h1 className='text-center p-3 fw-bolder'>TODO APP</h1>
        <form className='text-center' onSubmit={(e) => handleAddTask(e, value1)}>
        <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)}/>
        <button className='m-2 btn btn-info'>Add</button>
        </form>
      
      <ul className='mx-5'>
        {tasks.map((item, i) => (
            <li key={i} className={item.completed === true? "text-decoration-line-through": "text-decoration-none"}>
                {item.text}
                    <button className='btn btn-success m-2'>Completed</button>
                    <button className='btn btn-primary me-2'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
