import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState(["abc"]);
  return (
    <div className="App">
      <h1 className='text-center'>TODO APP</h1>
      <form className='text-center'>
        <input type="text"/>
        <button className='m-2 btn btn-info'>Add</button>
      </form>

      <ul className='mx-5'>
        {tasks.map((item, index) => {
            return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
