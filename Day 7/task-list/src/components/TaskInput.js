import React, { useState } from 'react';

import { Task } from '../models/task';

export default function TaskInput(props) {

  const [taskName, setTaskName] = useState('');

  function submitBtn(event) {
    event.preventDefault();

    const newTask = new Task(
      (new Date()).getTime(),
      taskName,
      false,
    );
    
    props.onTaskCreated(newTask);

    setTaskName('');
  }

  return (
    <div className='mt-4'>
      <form onSubmit={submitBtn}>

        <div className="input-group mb-3">
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Task Name" />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            disabled={!taskName}
            >
            +
          </button>
        </div>

      </form>
    </div>
  )
}
