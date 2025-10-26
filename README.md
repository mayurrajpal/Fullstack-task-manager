# Task Manager Full-Stack Application

A simple task management application built with .NET 8 and React + TypeScript.

## Features
- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as completed/uncompleted
- ✅ Filter tasks (All/Active/Completed)
- ✅ Local storage persistence
- ✅ RESTful API
- ✅ Modern UI design

## Tech Stack
- **Backend**: C# .NET 8 Web API
- **Frontend**: React 18 + TypeScript
- **Styling**: Custom CSS
- **HTTP Client**: Axios

## Setup Instructions

### Prerequisites
- .NET 8 SDK
- Node.js 20+ and npm

### Backend Setup
```bash
cd TaskManager.API
dotnet restore
dotnet run
```
API runs on: http://localhost:5000

### Frontend Setup
```bash
cd task-manager-ui
npm install
npm start
```
App runs on: http://localhost:3000

## API Endpoints
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create a new task
- PUT /api/tasks/{id} - Update a task
- DELETE /api/tasks/{id} - Delete a task

## Project Structure
```
TaskManagerApp/
├── TaskManager.API/          # Backend (.NET 8)
│   ├── Controllers/
│   ├── Models/
│   └── Program.cs
└── task-manager-ui/          # Frontend (React + TS)
    ├── src/
    │   ├── components/
    │   ├── services/
    │   └── types/
    └── public/
```

## Author
[Your Name]