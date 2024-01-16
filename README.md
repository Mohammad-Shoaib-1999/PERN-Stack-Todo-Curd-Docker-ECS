# Building a CRUD Todo App with PERN Stack and Docker

## Introduction
The tutorial will guide you through creating a Todo application using the PERN stack (PostgreSQL, Express, React, Node.js) and containerizing it with Docker. This involves setting up the backend API, connecting it to a PostgreSQL database, building the frontend in React, and using Docker to containerize the entire application.

## Prerequisites
- Node.js installed: [Node.js Official Website](https://nodejs.org/)
- Docker installed on your machine: [Docker Official Website](https://www.docker.com/)

## Step 1: Setting Up the Project
1. Clone the project repository:
   ```bash
   git clone <repository_url>
   cd <project_folder>
   ```

## Step 2: Setting Up the Backend (Node.js and Express)
### 2.1. Backend Setup
Create a `server` folder:
```bash
mkdir server
cd server
npm init -y
```
Install necessary packages:
```bash
npm install express pg nodemon
```
### 2.2. PostgreSQL Database
Install PostgreSQL:
```bash
# For Ubuntu
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```
Create a database and a table for Todo items (refer to SQL commands in the original tutorial).
### 2.3. Backend API
Create routes for CRUD operations in `server/routes/todos.js` (refer to code in the original tutorial).

## Step 3: Setting Up the Frontend (React)
### 3.1. Frontend Setup
Create a `client` folder:
```bash
mkdir client
cd client
npx create-react-app .
```
### 3.2. Frontend Components
Create components for Todo List and Todo Form in `client/src/components/` (refer to code in the original tutorial).

## Step 4: Connecting Frontend and Backend
Update CORS settings in the backend and configure API calls from the frontend to interact with the backend (refer to code in the original tutorial).

## Step 5: Dockerizing the Application
### 5.1. Dockerizing the Backend
Create a Dockerfile for the Node.js backend in `server/Dockerfile` (refer to code in the original tutorial).
Build the backend Docker image:
```bash
docker build -t pern-todo-backend ./server
```
### 5.2. Dockerizing the Database
Use an official PostgreSQL Docker image and set environment variables for the database connection (refer to code in the original tutorial).
### 5.3. Dockerizing the Frontend
Create a Dockerfile for the React frontend in `client/Dockerfile` (refer to code in the original tutorial).
Build the frontend Docker image:
```bash
docker build -t pern-todo-frontend ./client
```

## Step 6: Docker Compose
Create a `docker-compose.yml` file (refer to code in the original tutorial).

## Step 7: Running the Application
Build and run the multi-container system using Docker Compose:
```bash
docker-compose up --build
```
Access the Todo app in your browser: [http://localhost:3000](http://localhost:3000)

## Conclusion
In this tutorial, you have learned how to create a Todo application using the PERN stack, connect the frontend and backend, and containerize the entire application with Docker. This approach makes the deployment and scaling of your application more straightforward.

## Additional Resources
- [Node.js Official Website](https://nodejs.org/)
- [Docker Official Website](https://www.docker.com/)
- [PostgreSQL Official Website](https://www.postgresql.org/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
```

