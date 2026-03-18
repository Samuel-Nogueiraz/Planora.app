import { createContext, useContext, useState } from 'react';
import { initialTasks } from '../data/mockTasks';

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now(),
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getTasksByDate = (dateStr) => {
    return tasks.filter((task) => task.date === dateStr);
  };

  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    getTasksByDate,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
