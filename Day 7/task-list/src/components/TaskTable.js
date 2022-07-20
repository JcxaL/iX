import React from 'react'

export default function TaskTable(props) {

  function onToggleTaskClicked(task) {
    task.complete = !task.complete;
    props.onTaskUpdated(task);
  }

  function onTaskRemove(task) {
    props.onTaskRemove(task);
  }

  function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`;
    }

  return (
    <div className='mt-3'>

      <table className="table">
        <thead>
          <tr>
            <th className='col-4'>Task</th>
            <th className='col-5'>Status</th>
            <th className='col-3'></th>
          </tr>
        </thead>
        <tbody>

          {
            props.tasks.map((task) =>
              <tr key={task.id}>
                <td className='h4 p-3'>{task.name}</td>
                <td>
                  <i className={
                    task.complete ? "bi bi-check-circle-fill" : ""
                  }></i>
                  <div>{!task.complete ? "" :"on " + getCurrentDate()}</div>
                </td>
                <td>
                  <button
                    onClick={(e) => onToggleTaskClicked(task)}
                    className='btn'>
                    <i className={
                    task.complete ? "btn-outline-secondary btn bi bi-x" : "bi bi-check2 btn-outline-success btn"
                  }></i>
                  </button>

                  <button
                    onClick={(e) => onTaskRemove(task)}
                    className='btn btn-danger btn'>
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            )
          }

        </tbody>
      </table>

    </div>
  )
}
