import React from 'react';

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.name}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
      {task.completed ? (
        <button onClick={() => onToggle(task.id)}>Pendiente</button>
      ) : (
        <button onClick={() => onToggle(task.id)}>Completada</button>
      )}
    </div>
  );
}

export default Task;
