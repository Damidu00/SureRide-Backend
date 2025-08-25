🚗 SureRide — Backend

A Node.js + Express + MongoDB REST API powering the SureRide car rental application.
It provides authentication, car listing, booking management, and image uploads for a seamless rental experience.


✨ Features

🔐 User Authentication with JWT
🚘 Car Management (CRUD + image uploads with Multer)
📅 Booking System (create, view, cancel bookings)
🗂 Static File Serving for uploaded images
⚡ Built with Express & Mongoose (MongoDB ODM)

🛠 Tech Stack

Backend: Node.js (ES modules), Express.js
Database: MongoDB + Mongoose
Auth: JWT (JSON Web Tokens)
File Uploads: Multer
Dev Tools: Nodemon


📂 Project Structure
backend/
│── index.js          # App entry, DB connection, routes
│── routes/           # API route definitions
│── controllers/      # Request handlers
│── models/           # Mongoose schemas
│── middleware/       # Auth & utilities
│── uploads/          # Uploaded car images (static)
│── .env              # Environment variables

⚙️ Setup & Installation
1. Requirements
Node.js v18+


npm or yarn

A running MongoDB instance (local or cloud e.g. MongoDB Atlas)

2. Clone & Install
git clone https://github.com/yourusername/SureRide-Backend.git
cd SureRide-Backend
npm install


3. Environment Variables

Create a .env file in backend/ with:

MONGO_DB_URI=your_mongo_connection_string
SECRET=your_jwt_secret
PORT=5000


💡 Add a .env.example for reference.

🚀 Run the Server
Development
npm start


Runs with nodemon. Default URL: http://localhost:5000

Production
node index.js


📡 API Endpoints
Resource	Endpoint	Description


Users	 
	POST /api/users					Register a new user
	POST /api/users/login			Login & get JWT token
 	Get /api/users/					Get All Users
 	Delete /api/users/:id 			Delete user By Id
 
Cars	
	GET /api/cars					List all cars
	POST /api/cars					Add new car (with image)
	PUT /api/cars/:id				Update car
	DELETE /api/cars/:id			Remove car

 
Bookings	
	POST /api/bookings				Create booking
	GET /api/bookings				Get user bookings
