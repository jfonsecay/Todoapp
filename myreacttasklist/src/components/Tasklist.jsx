import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;

    
