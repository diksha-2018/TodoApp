import React, { useState } from 'react';
import Task from './Task';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
      };
      setTodoList([...todoList, task]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="todoapp">
      <div className="task">
        <h1>TodoApp</h1>
        <input
          type="text"
          placeholder="Add New Task"
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addTask}>ADD TASK</button>
      </div>
      {todoList.length > 0 && (
        <>
          <hr className="line"/>
          <u>
            <h4 className="tasks">Todo-List</h4>
          </u>
          <div className="lists">
            {todoList.map((task) => (
              <Task
                key={task.id}
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;

