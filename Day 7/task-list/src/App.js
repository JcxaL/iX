import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';


export default function App() {

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    // update the tasks state with the new task
    setTasks([...tasks, task]);
  }

  function updateTask(task) {
    const newTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });
    setTasks(newTasks);
  }

  function removeTask(task) {
    const newTasks = tasks.filter((t) => {
      return t.id !== task.id;
    });
    setTasks(newTasks);
  }

  return (
    <div className='container mt-5'>
      <div className='card card-body text-center'>
        <h1>Task Manager v0.2</h1>
        <hr></hr>
        <div className='text-muted'>
          Note down your tasks here!
        </div>

        <TaskInput onTaskCreated={createTask} />

        <TaskTable
          tasks={tasks}
          onTaskUpdated={updateTask}
          onTaskRemove={removeTask}
        />

      </div>
    </div>
  )
}
