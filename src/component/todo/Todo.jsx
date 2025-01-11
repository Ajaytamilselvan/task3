import React, { useState } from "react";
import "./Todo.css";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, { text: newTask, completed: false }]); 
    setNewTask(""); // Clear input
  };

  const handleToggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); 
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);
  };

  const navclose=useNavigate();
  const handleClose=()=>{
    navclose('/Nav')
  }

  return (
    <>
      <div className="close-btn"><button onClick={handleClose}>X</button></div>
      <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Todo;
