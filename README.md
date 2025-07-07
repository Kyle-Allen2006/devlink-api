# DevLink API

A simple RESTful API built with Node.js, Express, and MongoDB for managing developer profiles and project links. Built as part of a portfolio project to demonstrate my backend development skills.

---

## Technologies Used

These are the technologies I used to create this self-directed project for my portfolio:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- Dotenv for environment management
- Postman for testing

---

## API Endpoints

### `GET /`
- Returns a simple message to confirm the server is running.

### `POST /api/users`
- Creates a new developer profile.

### `GET /api/users/:username`
- Retrieves a developer profile based on their username.

_This may be expanded in the future to include PUT/DELETE functionality._

---

## How to Run Locally On Your Machine

1. Clone this repo:

   git clone https://github.com/kyle-allen2006/devlink-api.git

   cd devlink-api

2. Install dependencies:

    npm install

3. Create a .env file in the root of the project:

    MONGO_URI=your_mongodb_connection_string

4. Start the server: 

    npm start

5. The API will run locally at:

    http://localhost:5000

## Folder Structure (Simplified)
```
devlink-api/
├── controllers/
│ └── userController.js
├── models/
│ └── User.js
├── routes/
│ └── userRoutes.js
├── node_modules/ # Installed dependencies (ignored by .gitignore)
├── .env # Environment variables (ignored by .gitignore)
├── .gitignore
├── package.json
├── package-lock.json
├── server.js # Entry point of the API
└── README.md
```
About the Developer:

Hello and welcome, I’m Kyle Allen I am a passionate developer transitioning into software engineering after 16 years of experience in robotics and automation. I’m currently pursuing my Software Engineering degree at WGU while building real-world projects to strengthen my skills in modern web development.

Background in robotics, controls, industrial automation, and maintenance.

Current student at Western Governors University (WGU).

Strong foundation in programming logic and problem solving.

Actively building a full-stack portfolio using Node.js, Angular, MongoDB, and more.

This project is part of my personal growth journey as I transition into full-time software development. I'm eager to bring my technical experience and dedication to a forward-thinking development team.