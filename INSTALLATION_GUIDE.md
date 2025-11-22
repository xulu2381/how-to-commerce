# HowTo E-Commerce Installation Guide

## Prerequisites

- Node.js (v20.0.0 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## Quick Start

### Option 1: Install Everything at Once

From the root directory:

```bash
npm run install-all
```

### Option 2: Manual Installation

#### 1. Install Root Dependencies

```bash
npm install
```

#### 2. Setup Server

```bash
cd server
npm install
```

Create `server/.env` file:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/howto-ecommerce
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
```

#### 3. Setup Client

```bash
cd client
npm install
```

Create `client/.env` file:

```env
REACT_APP_API_URL=http://localhost:4000/api
```

## Running the Application

### Option 1: Run Both Server and Client Together

From the root directory:

```bash
npm start
```

This will start both the server and client concurrently.

### Option 2: Run Separately

#### Start Server

```bash
cd server
npm start
```

Server will run on: http://localhost:4000

#### Start Client

```bash
cd client
npm start
```

Client will run on: http://localhost:3000

## MongoDB Setup

### Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/howto-ecommerce`

### MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `server/.env`

Example:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/howto-ecommerce
```

## Security Configuration

### Important: Change JWT Secret

Before deploying to production, generate a strong JWT secret:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Update `JWT_SECRET` in `server/.env` with the generated value.

## Troubleshooting

### Port Already in Use

If port 4000 or 3000 is already in use:

1. Change `PORT` in `server/.env`
2. Update `REACT_APP_API_URL` in `client/.env` accordingly

### MongoDB Connection Error

- Ensure MongoDB is running
- Check connection string format
- Verify network access (for MongoDB Atlas)
- Check firewall settings

### CORS Errors

- Ensure `CLIENT_URL` in `server/.env` matches your client URL
- Check that both server and client are running

## Features

- User authentication (register/login)
- Password visibility toggle
- Shopping cart with Redux state management
- Product browsing and filtering
- Stripe payment integration
- NFT marketplace
- Responsive design with Tailwind CSS

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product

### Orders
- POST `/api/orders` - Create order
- GET `/api/orders` - Get user orders

### Stripe
- POST `/api/stripe/create-checkout-session` - Create payment session

## Development

### Server Development

```bash
cd server
npm start
```

Uses nodemon for auto-restart on file changes.

### Client Development

```bash
cd client
npm start
```

Hot reload enabled for React development.

## Production Deployment

### Environment Variables

Update the following for production:

Server:
- `MONGODB_URI` - Production database
- `JWT_SECRET` - Strong random secret
- `CLIENT_URL` - Production client URL
- `PORT` - Production port

Client:
- `REACT_APP_API_URL` - Production API URL

### Build Client

```bash
cd client
npm run build
```

This creates an optimized production build in the `build` folder.

## Additional Security Recommendations

1. Install security packages:
   ```bash
   cd server
   npm install helmet express-rate-limit
   ```

2. Enable HTTPS in production
3. Set up MongoDB authentication
4. Implement proper logging
5. Add monitoring and alerting
6. Regular security audits

## Support

For issues or questions, please check:
- SECURITY_FIXES.md for security improvements
- AUTH_SETUP.md for authentication details
- QUICK_START.md for quick reference
