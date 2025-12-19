# 💬 PulseTalk – Real-Time Chat Application

PulseTalk is a **full-stack real-time chat application** built using **React, Zustand, Node.js, Express, MongoDB, and Socket.IO**.  
It supports **1-to-1 messaging**, real-time updates, and a smooth chat experience.

---

## 🚀 Features

- 🔐 User Authentication (JWT based)
- 💬 Real-time Messaging with Socket.IO
- 🧠 Global State Management using Zustand
- ⚡ Instant UI updates (Optimistic rendering)
- 📦 Message persistence using MongoDB
- 🔄 Auto refresh & sync on page reload
- 🟢 Online user detection (Socket based)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Zustand (State Management)
- React Router DOM
- Tailwind CSS
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.IO
- JWT Authentication

---

## 📂 Project Structure

```bash
PulseTalk/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── zustand/
│   │   ├── context/
│   │   └── App.jsx
│
└── README.md

Create a .env file inside the backend folder.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

How to Run the Project Locally
git clone https://github.com/your-username/PulseTalk.git
cd PulseTalk

cd backend
npm install
npm run dev

http://localhost:5000

cd frontend
npm install
npm run dev

http://localhost:3000
