import axios from 'axios';
import { TaskItem } from '../types/TaskItem';

const API_URL = 'http://localhost:5019/api/tasks';

export const taskService = {
  getAllTasks: async (): Promise<TaskItem[]> => {
    const response = await axios.get<TaskItem[]>(API_URL);
    return response.data;
  },

  createTask: async (description: string): Promise<TaskItem> => {
    const response = await axios.post<TaskItem>(API_URL, { description });
    return response.data;
  },

  updateTask: async (task: TaskItem): Promise<TaskItem> => {
    const response = await axios.put<TaskItem>(`${API_URL}/${task.id}`, task);
    return response.data;
  },

  deleteTask: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};