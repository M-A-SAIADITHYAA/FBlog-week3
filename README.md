# FBlog - Your Fitness Community

FBlog is a full-stack web application that allows users to create and share fitness-related blog posts. The platform also showcases popular trainers and provides a way for users to join as trainees.

## Features

- **Blog Posts**: Create and view fitness-related blog posts
- **Popular Trainers**: Browse through a list of top-rated fitness trainers
- **Trainee Registration**: Join as a trainee 
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Modern dark UI for better user experience

## Tech Stack

### Frontend
- React Router for navigation
- Axios for API requests
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose for ODM

## Prerequisites

Before running the application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (running locally or a connection string to a remote instance)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fblog
   ```

2. Install backend dependencies:
   ```
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd client
   npm install
   ```

## Configuration

The application uses MongoDB as its database. By default, it connects to a local MongoDB instance. If you need to use a different MongoDB connection, update the connection string in `server.js`.

## Running the Application

1. Start the backend server:
   ```
   npm run dev
   ```
   This will start the server on port 5000.

2. In a new terminal, start the frontend development server:
   ```
   cd client
   npm start
   ```
   This will start the React application on port 3000.

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
fblog/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   └── src/                 # React source files
│       ├── components/      # React components
│       ├── App.js           # Main App component
│       └── index.js         # Entry point
├── server.js                # Backend Express server
├── package.json             # Backend dependencies
└── README.md                # Project documentation
```

## Video demo

https://github.com/user-attachments/assets/350dff3b-e8a9-4a50-bdc9-18f7323216e6

