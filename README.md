# Task Management Application

## Overview

The Task Management Application is a full-stack web application that enables users to create, update, track, and manage tasks efficiently. The application includes secure user authentication, task CRUD operations, MongoDB database integration, and a responsive user interface suitable for both desktop and mobile devices.

## Features

### User Authentication & Authorization

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes

### Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Track Task Status

### Responsive Design

* Mobile-Friendly Interface
* Responsive Layout for Different Screen Sizes

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

## Installation

### Clone Repository

```bash
git clone https://github.com/siddardhach2005/task-management-application.git
```

### Navigate to Backend

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Ensure MongoDB is running locally.

```bash
mongod
```

or verify the MongoDB service is running.

### Run Backend Server

```bash
node server.js
```

Expected Output:

```text
MongoDB Connected
Server running on port 5000
```

### Run Frontend

Open:

```text
frontend/index.html
```

in your browser.

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Sample Request:

```json
{
  "username": "siddardha",
  "email": "siddardha@gmail.com",
  "password": "password123"
}
```

#### Login User

```http
POST /api/auth/login
```

Sample Request:

```json
{
  "email": "siddardha@gmail.com",
  "password": "password123"
}
```

### Task APIs

#### Get All Tasks

```http
GET /api/tasks
```

#### Create Task

```http
POST /api/tasks
```

Sample Request:

```json
{
  "title": "Internship Task",
  "description": "Build Task Management Application",
  "status": "Pending"
}
```

#### Update Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

## Database Collections

### Users Collection

Stores registered user information.

```json
{
  "_id": "...",
  "username": "siddardha",
  "email": "siddardha@gmail.com",
  "password": "encrypted_password"
}
```

### Tasks Collection

Stores task information.

```json
{
  "_id": "...",
  "title": "Internship Task",
  "description": "Build Task Management Application",
  "status": "Pending",
  "userId": "...",
  "createdAt": "...",
  "updatedAt": "..."
}
```

## Learning Outcomes

Through this project, the following concepts were implemented and practiced:

* Full-Stack Application Development
* REST API Development
* User Authentication and Authorization
* JWT Token Management
* Password Hashing with bcrypt
* MongoDB Database Integration
* CRUD Operations
* Dynamic Data Handling
* Client-Server Communication
* Responsive Web Design

## Author

**Siddardha Chennamsetti**

Computer Science Engineering Student

GitHub: https://github.com/siddardhach2005

Email: [siddharthachennemsetti@gmail.com](mailto:siddharthachennemsetti@gmail.com)
