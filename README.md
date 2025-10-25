# 📝 Task Manager - Full-Stack Application

A modern, responsive task management application built with .NET 8 and React with TypeScript. This application demonstrates full-stack development capabilities with a RESTful API backend and an interactive Bootstrap-based frontend.

## ✨ Features

### Core Functionality
- ✅ **Create Tasks** - Add new tasks with descriptions
- ✅ **View Tasks** - Display all tasks in an organized list
- ✅ **Update Tasks** - Mark tasks as completed or uncompleted
- ✅ **Delete Tasks** - Remove individual tasks with confirmation
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Clear Completed** - Bulk delete all completed tasks

### Advanced Features
- 💾 **localStorage Persistence** - Tasks are automatically saved locally
- 🔄 **API Synchronization** - Syncs with backend on startup
- 📊 **Statistics Dashboard** - Real-time stats showing total, active, and completed tasks
- ⏰ **Last Saved Timestamp** - Displays when data was last saved
- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - Instant UI updates with optimistic rendering
- 🔔 **User Confirmations** - Prevents accidental deletions

## 🛠️ Tech Stack

### Backend
- **Framework**: .NET 8 Web API
- **Language**: C# 12
- **Storage**: In-memory data store
- **API Style**: RESTful
- **CORS**: Enabled for frontend integration

### Frontend
- **Framework**: React 18
- **Language**: TypeScript 5
- **UI Library**: React Bootstrap 5
- **HTTP Client**: Axios
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: Bootstrap 5 + Custom CSS
- **Storage**: Browser localStorage API

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/{id}` | Update an existing task |
| DELETE | `/api/tasks/{id}` | Delete a task |

### Sample Request/Response

**POST /api/tasks**
```json
Request:
{
  "description": "Complete the project documentation"
}

Response:
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "description": "Complete the project documentation",
  "isCompleted": false
}
```

## 🚀 Setup Instructions

### Prerequisites

Before running this application, ensure you have the following installed:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) (version 8.0 or higher)
- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (for cloning the repository)

### Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/task-manager-fullstack.git
cd task-manager-fullstack
```

#### 2. Backend Setup
```bash
# Navigate to backend directory
cd TaskManager.API

# Restore dependencies
dotnet restore

# Run the application
dotnet run
```

The backend API will start on **http://localhost:5019** (or the port shown in your terminal)

#### 3. Frontend Setup

Open a **new terminal window** and run:
```bash
# Navigate to frontend directory (from root folder)
cd task-manager-ui

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend application will open automatically at **http://localhost:3000**

### ⚠️ Important Configuration

If your backend runs on a different port than 5019, update the API URL:

**File**: `task-manager-ui/src/services/taskService.ts`
```typescript
const API_URL = 'http://localhost:YOUR_PORT/api/tasks';
```

## 📁 Project Structure
```
TaskManagerApp/
├── TaskManager.API/              # Backend (.NET 8 Web API)
│   ├── Controllers/
│   │   └── TasksController.cs   # API endpoints
│   ├── Models/
│   │   └── TaskItem.cs          # Task data model
│   ├── Program.cs               # Application entry point
│   └── TaskManager.API.csproj   # Project file
│
├── task-manager-ui/             # Frontend (React + TypeScript)
│   ├── public/                  # Static files
│   ├── src/
│   │   ├── services/
│   │   │   └── taskService.ts   # API communication
│   │   ├── types/
│   │   │   └── TaskItem.ts      # TypeScript interfaces
│   │   ├── App.tsx              # Main React component
│   │   ├── custom.css           # Custom styling
│   │   └── main.tsx             # Application entry
│   ├── package.json             # Dependencies
│   └── tsconfig.json            # TypeScript config
│
└── README.md                    # This file
```

## 🎨 Features Showcase

### Statistics Dashboard
Real-time statistics showing:
- Total number of tasks
- Active (uncompleted) tasks
- Completed tasks

### Smart Filtering
Three filter modes:
- **All Tasks**: Shows all tasks regardless of status
- **Active**: Shows only uncompleted tasks
- **Completed**: Shows only completed tasks

### localStorage Integration
- Automatically saves tasks to browser storage
- Loads cached tasks on startup for instant access
- Syncs with backend after initial load
- Displays last saved timestamp

### User Experience
- Smooth animations and transitions
- Hover effects on interactive elements
- Confirmation dialogs for destructive actions
- Loading states during operations
- Empty state messages with friendly icons
- Responsive design for all screen sizes

## 🧪 Testing the Application

### Manual Testing Checklist

1. **Add Task**
   - Enter a task description
   - Click "Add Task" or press Enter
   - Verify task appears in the list

2. **Complete Task**
   - Click checkbox next to a task
   - Verify task is marked as completed (green background, strikethrough)
   - Verify statistics update

3. **Filter Tasks**
   - Add some tasks and mark some as complete
   - Test each filter (All, Active, Completed)
   - Verify correct tasks are displayed

4. **Delete Task**
   - Click delete button (🗑️) on a task
   - Confirm deletion in dialog
   - Verify task is removed

5. **localStorage**
   - Add some tasks
   - Refresh the page
   - Verify tasks persist

6. **Clear Completed**
   - Mark several tasks as complete
   - Click "Clear Completed" button
   - Verify all completed tasks are removed

### Testing API with Swagger

Navigate to `http://localhost:5019/swagger` to access the interactive API documentation and test endpoints directly.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Assignment Requirements Fulfilled

### Backend Requirements ✅
- [x] RESTful API using .NET 8 Core
- [x] In-memory data storage
- [x] TaskItem model with Id, Description, IsCompleted properties
- [x] All CRUD endpoints (GET, POST, PUT, DELETE)

### Frontend Requirements ✅
- [x] React with TypeScript
- [x] Single-page application
- [x] Display all tasks in a list
- [x] UI for adding tasks
- [x] UI for toggling completion status
- [x] UI for deleting tasks
- [x] Axios for API integration
- [x] React Hooks for state management

### Enhancements ✅
- [x] Task filtering (All / Completed / Active)
- [x] Bootstrap framework for styling
- [x] localStorage for data persistence
- [x] Additional features (statistics, clear completed, confirmations)

## 🚧 Known Limitations

- Backend uses in-memory storage (data is lost when server restarts)
- No user authentication or authorization
- No data validation beyond basic checks
- Single-user application (no multi-user support)

## 🔮 Future Enhancements

- Database integration (SQL Server, PostgreSQL)
- User authentication and authorization
- Task categories and tags
- Due dates and reminders
- Task priority levels
- Search functionality
- Export tasks to CSV/PDF
- Dark mode theme
- Drag-and-drop task reordering

## 👨‍💻 Development Notes

### Running in Development Mode

**Backend:**
```bash
cd TaskManager.API
dotnet watch run  # Auto-restarts on code changes
```

**Frontend:**
```bash
cd task-manager-ui
npm start  # Auto-reloads on code changes
```

### Building for Production

**Backend:**
```bash
cd TaskManager.API
dotnet publish -c Release -o ./publish
```

**Frontend:**
```bash
cd task-manager-ui
npm run build
```

## 📄 License

This project is created for educational purposes as part of a coding assignment.

## 🤝 Contributing

This is an assignment project and is not open for contributions.

## 📧 Contact

For questions or feedback regarding this assignment, please contact through the appropriate academic channels.

---

**Created as part of Home Assignment 1 - Basic Task Manager**  
**Framework**: .NET 8 + React + TypeScript + Bootstrap  
**Date**: October 2025