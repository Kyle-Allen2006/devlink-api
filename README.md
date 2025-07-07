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