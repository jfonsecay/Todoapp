import React, { useState, useEffect } from 'react';
import { ChakraProvider, CSSReset, Box, Text, Input, Button, Checkbox, DarkMode } from '@chakra-ui/react';
import './app.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTasksList = [...tasks, { description: newTask, completed: false }];
    setTasks(newTasksList);
    setNewTask('');
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <ChakraProvider>
      <DarkMode>
        <CSSReset />
        <Box p={4} bg="gray.100">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            To do app
          </Text>
          <Input
            type="text"
            placeholder="Nueva tarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mb={2}
          />
          <Button colorScheme="teal" onClick={addTask} mb={4}>
            Agregar
          </Button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} mb={2}>
                <Checkbox
                  isChecked={task.completed}
                  onChange={() => toggleTaskStatus(index)}
                  mr={2}
                />
                <Text className={task.completed ? 'completed' : ''}>{task.description}</Text>
                <Button colorScheme="red" size="sm" ml={2} onClick={() => deleteTask(index)}>
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        </Box>
      </DarkMode>
    </ChakraProvider>
  );
}

export default App;





