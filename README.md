# 📝 Online Quiz System

A simple quiz application with user authentication using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js).  
It supports **full CRUD operations** with token-based authentication (**JWT**).

## 🚀 Features

### 🔹 Admin
- **Login Authentication**: Secure login with error messages for invalid credentials.
- **Quiz Management**: Add, edit, and delete quizzes (title, description, timer).
- **Question Management**: Add, edit, and delete multiple-choice questions.
- **View Quizzes**: List all quizzes added to the system.
- **View Scores**: Monitor scores of all users or a particular quiz.
- **Dashboard**: Admin panel with necessary data visualization.

### 🔹 User
- **Browse Quizzes**: View all available quizzes.
- **Attempt Quizzes**: Take quizzes if not attempted before.
- **View Scores**: Check scores after completing a quiz.
- **Attempt History**: Review previously attempted quizzes and scores.
- **User Dashboard**: Summary of user activity.

---

## 🛠 Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS

---

## 🔧 Installation Guide

### 📌 Prerequisites
Ensure you have **Node.js** and **MongoDB** installed.

### 1️⃣ Clone the Repository
   ```sh
    git clone https://github.com/Uditverma-333/Quiz-Application.git
    cd Quiz-Application
   ```
   
### 2️⃣ Install backend dependencies:
   ```sh
    cd backend
    npm install
   ```
   
### 📌 Set up environment variables:
    Create a .env file in the backend directory with the following content:
   ```sh
    # Server Configuration
    PORT=4000
    CORS_ORIGIN=http://localhost:5173
    # Database Configuration
    DB_URL=mongodb+srv://uditverma150:pWlE08VcDVTIboJX@cluster0.3fcq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    # Authentication (JWT Secret)
    JWT_SECRET=55422a38a6830ebd68ad8ef8c040c73c7d72e9ff517671d8325ac5d5ca776558 
   ```

### 🚀 Start the backend server:
   ```sh
    npm run dev
   ```

### 3️⃣ Frontend Setup

   ``` sh
    cd ../frontend
    npm install
   ```

### 🚀 Start Frontend Server
   ``` sh
    npm run dev
   ```
The application will be accessible at:
- Frontend: http://localhost:5173
- Backend: http://localhost:4000

### 📌 API Endpoints
#### 🔑 Authentication

| Method | Endpoint       | Description                                  |
|--------|--------------|----------------------------------------------|
| POST   | `/login`     | Authenticate admin/user and return a JWT token |
| POST   | `/register`  | Sign up a new user                          |

#### 🛠️ Quiz Management

| Method | Endpoint                 | Description                        |
|--------|--------------------------|------------------------------------|
| GET    | `/admin-quizzes`         | Get all quizzes (Admin only)      |
| GET    | `/attempts/:id`          | Get attempts for a quiz (Admin only) |
| POST   | `/quizzes`               | Create a new quiz (Admin only)    |
| PUT    | `/quizzes/:id`           | Update a quiz (Admin only)        |
| DELETE | `/quizzes/:id`           | Delete a quiz (Admin only)        |

#### ❓ Question Management

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| GET    | `/questions/:id`    | Get all questions for a quiz        |
| POST   | `/questions`        | Add a new question (Admin only)     |
| PUT    | `/questions/:id`    | Update a question (Admin only)      |
| DELETE | `/questions/:id`    | Delete a question (Admin only)      |

#### 📊 Data & Attempt Management

| Method | Endpoint                 | Description                                  |
|--------|--------------------------|----------------------------------------------|
| GET    | `/quizzes`               | Get all available quizzes                   |
| GET    | `/quizzes/:id`           | Get a specific quiz                         |
| POST   | `/quizzes/:id/attempt`   | Attempt a quiz                              |
| GET    | `/attempts`              | Get all user attempts                       |