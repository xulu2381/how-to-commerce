## HowTo

HowTo Ecommerce is an advanced online shopping platform powered by the MERN (MongoDB, Express, React, Node.js) stack. It enables users to enjoy a seamless shopping experience, with a dedicated cart page that allows effortless product additions. The integration of Redux state management ensures a high level of efficiency and flexibility. 

## Features
- State management using Redux Toolkit
- Fetches product data using Redux thunk.
- A shopping cart that uses Redux Toolkit for state management.
- The cart items are saved in the client's browser local storage
- Styling using Tailwind CSS

## Tools Used

- Frontend: React, Redux
- Backend: Node.js, Express
- Database: MongoDB
- State Management: Redux
- UI Styling: TailwindCSS

## Installation (Client)

1. Clone this repository: `git clone https://github.com/criticalPathway/how-to-commerce.git`
2. Navigate to the client directory: `cd client`
3. Install dependencies: `npm install`
4. Create a `.env` file in the client directory with:
   ```
   REACT_APP_API_URL=http://localhost:4000/api
   ```
5. Start the client: `npm start`
6. Access the client in your browser at: `http://localhost:3000`

## Installation (Server)

1. Clone this repository: `git clone https://github.com/criticalPathway/how-to-commerce.git`
2. Navigate to the server directory: `cd server`
3. Install dependencies: `npm install`
4. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/howto-ecommerce
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=7d
   CLIENT_URL=http://localhost:3000
   ```
5. Start the server: `npm start`
6. The server will be running at: `http://localhost:4000`

