// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Ir de compras', completed: true },
    { id: 2, name: 'Hacer las tareas', completed: false },
    { id: 3, name: 'Hacer los entregables', completed: true },
  ]);

  const addTask = newName => {
    const newTask = {
      id: Date.now(),
      name: newName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      <div className="add-task">
        <input
          type="text"
          placeholder="Nueva tarea"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button onClick={() => addTask(document.querySelector('input').value)}>Agregar</button>
      </div>
    </div>
  );
}

export default App;

