# **Calendar Application Backend**

### This repository contains the backend for a calendar application, built with Express.js, Mongoose, and JSON Web Tokens (JWT).

## **Requirements**

Before getting started, make sure you have the following installed on your system:

- Node.js (version 16 or higher)
- MongoDB

Installation
Follow these steps to install and set up the project locally:

1. Clone this repository to your local machine.

```
git clone https://github.com/WilliamsMata/calendar-backend.git
```

2. Open a terminal in the project directory and run the command npm install to install the dependencies.

```
npm install
```

3. Create a .env file in the root directory of the project and configure the necessary environment variables. You can find an example .env.example file in the repository.

4. Run the command npm run dev to start the server.

```
npm run dev
```

1. Open your browser and visit http://localhost:3000. You should see a "API is running" message.

## **Usage**

The calendar application backend provides a REST API for creating, updating, and deleting calendar events. The API uses JSON Web Tokens (JWT) to authenticate users.

## Example routes

https://documenter.getpostman.com/view/26056106/2s93XyU3cC

### **Authentication**

To authenticate a user, send a POST request to /auth with the user's credentials in the request body. The response will include a JWT token that can be used to make authenticated requests to the API.

### **Creating Events**

To create a new calendar event, send a POST request to /api/events with the event details in the request body. Make sure to include the JWT token in the request header to authenticate the user.

### **Updating Events**

To update an existing event, send a PUT request to /api/events/:id, where :id is the ID of the event you want to update. Make sure to include the JWT token in the request header to authenticate the user.

### **Deleting Events**

To delete an existing event, send a DELETE request to /api/events/:id, where :id is the ID of the event you want to delete. Make sure to include the JWT token in the request header to authenticate the user.

## **Contributions**

Contributions are welcome and appreciated. If you would like to contribute to this project, please make sure to follow the repository's contribution guidelines.
