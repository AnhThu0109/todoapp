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

    //Remove function
    const handleRemove = (currentId) => {
      const newTaskList = tasks.filter((item, id) => {return id !== currentId});
      console.log(newTaskList);
      setTasks(newTaskList);
  }

  //Edit function
  const handleEditClick = (id) => {
      setEditing(true);
      setCurrentId(id);
      setEditText(tasks[id].text);
  }
  const handleEdit = (e, id, input) => {
      e.preventDefault();
      const editTask = {
          text: input,
          completed: false
      }
      tasks.map((item, index) => {
          if(index === id) {
              item.text = input;
          }
      })
      setTasks(tasks);
      setEditing(false);
  }

  //Cancel edit function
  const handleCancel = () => {
      setEditing(false);
  }

  //Completed task function
  const handleCompleted = (id) => {
      tasks.map((item, index) => {
          if(index === id){
              item.completed = !item.completed;
          }
      });
      const newCompleteTask = [...tasks];
      console.log(newCompleteTask);
      setTasks(newCompleteTask);
  }


  return (
    <div className="App">
      <h1 className='text-center p-3 fw-bolder'>TODO APP</h1>
      {isEditing === true ? (
        <form className='text-center' onSubmit={(e) => handleEdit(e, currentId, editText)}>
        <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
        <button className='m-2 btn btn-info'>Update</button>
        <button className='btn btn-danger' onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <form className='text-center' onSubmit={(e) => handleAddTask(e, value1)}>
        <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)}/>
        <button className='m-2 btn btn-info'>Add</button>
        </form> )}
      
      <ul className='mx-5'>
        {tasks.map((item, i) => (
            <li key={i} className={item.completed === true? "text-decoration-line-through": "text-decoration-none"}>
                {item.text}
                    <button className='btn btn-success m-2' onClick={() => handleCompleted(i)}>Completed</button>
                    <button className='btn btn-primary me-2' onClick={() => handleEditClick(i)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => handleRemove(i)}>Delete</button>
                </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
