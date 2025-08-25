# 🚗 SureRide — Backend

A **Node.js + Express + MongoDB REST API** powering the **SureRide Car Rental Application**.  
It provides **user authentication, car management, booking handling, and image uploads** for a smooth rental experience.

---

## ✨ Features

- 🔐 **User Authentication** with JWT  
- 🚘 **Car Management** (CRUD + image uploads with Multer)  
- 📅 **Booking System** (create, view, cancel bookings)  
- 🗂 **Static File Serving** for uploaded images  
- ⚡ **Built with Express & Mongoose (MongoDB ODM)**  

---

## 🛠 Tech Stack

- **Backend:** Node.js (ES modules), Express.js  
- **Database:** MongoDB + Mongoose  
- **Authentication:** JWT (JSON Web Tokens)  
- **File Uploads:** Multer  
- **Dev Tools:** Nodemon  

---

## 📂 Project Structure

backend/
│── index.js # App entry, DB connection, routes
│── routes/ # API route definitions
│── controllers/ # Request handlers
│── models/ # Mongoose schemas
│── middleware/ # Auth & utilities
│── uploads/ # Uploaded car images (static)
│── .env # Environment variables



---

## ⚙️ Setup & Installation

### 1. Requirements
- Node.js **v18+**  
- npm or yarn  
- A running **MongoDB instance** (local or cloud e.g. MongoDB Atlas)  

### 2. Clone & Install
```bash
git clone https://github.com/yourusername/SureRide-Backend.git
cd SureRide-Backend
npm install

🚀 Run the Server
npm start
```

Users 
  POST /api/users           Register a new user 
  POST /api/users/login     Login & get JWT token 
  Get /api/users/           Get All Users 
  Delete /api/users/:id     Delete user By Id 

Cars 
  GET /api/cars             List all cars 
  POST /api/cars            Add new car (with image) 
  PUT /api/cars/:id         Update car 
  DELETE /api/cars/:id      Remove car 

Bookings 
  POST /api/bookings        Create booking 
  GET /api/bookings         Get user bookings



📝 Notes & Troubleshooting
If DB connection fails → Check your MONGO_DB_URI in .env
If image upload fails → Ensure uploads/ folder exists & is writable
If token issues → Verify you’re passing Authorization: Bearer <token>


  
