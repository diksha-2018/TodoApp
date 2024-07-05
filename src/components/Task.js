import React from 'react';

const Task = (props) => {
  return (
    <div className={`list1 ${props.completed ? 'completed' : 'incomplete'}`}>
      <div className="task1">{props.taskName}</div>
      <div className="buttons-container">
        <button className="button1" onClick={() => props.completeTask(props.id)}>Completed</button>
        <button className="button2" onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;




