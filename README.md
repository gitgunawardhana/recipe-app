# Recipe App (MERN Stack)

This is a full-stack Recipe Application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. Users can register, log in, and save their favorite recipes, fetched from an external API. The application ensures secure access using JWT-based authentication.

## Live Application
You can access the live version of the Recipe App here: [Recipe App Live](https://recipe-app-client-three.vercel.app/)

## Features

- User authentication (register, login, logout) using JWT tokens
- Fetch recipes from TheMealDB API
- Save favorite recipes for each user
- Protected routes for logged-in users
- Responsive UI built with Tailwind CSS

## Technologies

- Frontend: React, Axios, Tailwind CSS, React Router
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT (JSON Web Token)
- API: TheMealDB API for fetching recipe data

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:

  ```bash
    git clone https://github.com/gitgunawardhana/recipe-app.git
  ```

2. Navigate to the project directory:
  
  ```bash
    cd recipe-app
  ```

3. Set up your .env file in the both directories. You can refer to .env.example for required variables.

4. Install dependencies for the server:
  
  ```bash
    cd server
    yarn
  ```

5. Start the backend server:
  
  ```bash
    yarn dev
  ```

7. Install client dependencies:
  
  ```bash
    yarn
  ```
  
8. Start the client application:
  
  ```bash
    yarn start
  ```

9. Open your browser and navigate to `http://localhost:3000` to access the application.

## API Endpoints

[recipe-app.postman_collection.zip](https://github.com/user-attachments/files/17518040/recipe-app.postman_collection.zip)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
