# 📝 To-Do List Application

A simple **To-Do List** application built using **Go (Fiber) + MongoDB + React** for managing tasks efficiently.

---

## 📌 Tech Stack  

### Backend:  
- **Go** – Programming language  
- **Fiber** – Web framework for Go  
- **MongoDB** – NoSQL database  
- **MongoDB Go Driver** – [go.mongodb.org/mongo-driver](https://pkg.go.dev/go.mongodb.org/mongo-driver)  
- **dotenv** – [github.com/joho/godotenv](https://github.com/joho/godotenv)  

### Frontend:  
- **React** – Frontend library  
- **Axios** – API requests handling  
- **CSS** – UI styling  

---

## 📂 Installation & Setup  

### 1️⃣ Clone the Repository  
\`\`\`sh
git clone https://github.com/sunzhqr/to-do-list
cd to-do-list
\`\`\`

---

### 2️⃣ Backend Setup (Go + MongoDB)  

#### **Step 1: Configure \`.env\` File**  
Create a \`.env\` file inside the \`backend/\` directory and add:  
\`\`\`sh
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
PORT=3000
\`\`\`

#### **Step 2: Install Dependencies**  
\`\`\`sh
go mod tidy
\`\`\`

#### **Step 3: Start the Server**  
\`\`\`sh
go run main.go
or 
air
\`\`\`

---

### 3️⃣ Frontend Setup (React)  

#### **Step 1: Install Dependencies**  
\`\`\`sh
cd client
npm install
\`\`\`

#### **Step 2: Start the Frontend**  
\`\`\`sh
npm run dev
\`\`\`

---

## 📌 API Endpoints  

| Method  | Endpoint        | Description            |
|---------|---------------|------------------------|
| **GET**  | \`/api/todos\`     | Retrieve all tasks  |
| **POST** | \`/api/todos\`     | Create a new task   |
| **PATCH** | \`/api/todos/:id\` | Update task status |
| **DELETE** | \`/api/todos/:id\` | Delete a task      |

### Example Request (POST)
\`\`\`http
POST /api/todos
Content-Type: application/json

{
  "body": "New Task",
  "completed": false // actually, it allows you to omit this field
}
\`\`\`

---

## 📌 Features  

✔ **Add new tasks**  
✔ **Delete tasks**  
✔ **Mark tasks as complete/incomplete**  
✔ **Persistent storage using MongoDB**  
✔ **Minimalist and user-friendly UI**  

---

### 🚀 Developed using **Go + React** for modern task management!  
`
