# Node TypeScript Express App

This project is a Node.js application built with TypeScript and Express, designed to manage user-related operations. It connects to a MongoDB database using Mongoose and follows a structured approach with separate layers for controllers, services, and models.

## Project Structure

```
node-ts-express-app
├── src
│   ├── controllers        # Contains controllers for handling requests
│   │   └── userController.ts
│   ├── services           # Contains business logic for user operations
│   │   └── userService.ts
│   ├── models             # Contains Mongoose models
│   │   └── userModel.ts
│   ├── routes             # Contains route definitions
│   │   └── userRoutes.ts
│   ├── config             # Contains configuration files
│   │   └── db.ts
│   ├── app.ts             # Main application file
│   └── server.ts          # Server startup file
├── package.json           # NPM configuration file
├── tsconfig.json          # TypeScript configuration file
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd node-ts-express-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Run the application:**
   ```
   npm run start
   ```

## Usage

- The application exposes RESTful API endpoints for user management. You can create, retrieve, update, and delete users.
- The routes are defined in `src/routes/userRoutes.ts` and handled by the `UserController` in `src/controllers/userController.ts`.

## License

This project is licensed under the MIT License.