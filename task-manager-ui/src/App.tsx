import React, { useState, useEffect } from 'react';
import { taskService } from './services/taskService';
import { TaskItem } from './types/TaskItem';
import './App.css';

type FilterType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTasks();
    loadTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveTasksToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const loadTasksFromLocalStorage = () => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  const addTask = async () => {
    if (newTaskDescription.trim() === '') return;

    try {
      const newTask = await taskService.createTask(newTaskDescription);
      setTasks([...tasks, newTask]);
      setNewTaskDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (task: TaskItem) => {
    try {
      const updatedTask = { ...task, isCompleted: !task.isCompleted };
      await taskService.updateTask(updatedTask);
      setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  });

  return (
    <div className="App">
      <div className="container">
        <h1>📝 Task Manager</h1>
        
        <div className="add-task">
          <input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Enter a new task..."
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'active' ? 'active' : ''} 
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <ul className="task-list">
            {filteredTasks.map(task => (
              <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTask(task)}
                />
                <span>{task.description}</span>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}

        {filteredTasks.length === 0 && !loading && (
          <p className="no-tasks">No tasks to display</p>
        )}
      </div>
    </div>
  );
}

export default App;