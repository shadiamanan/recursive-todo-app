# Recursive Todo App
A simple Todo application built with **Remix** and **Appwrite**, supporting nested tasks and user authentication.

## Features
- User signup and authentication via Appwrite
- Recursive todo list (tasks and sub-tasks)
- Client-side form validation
- Styled pages with colored theme

## Setup
### 1. Clone the Repository

git clone https://github.com/your-username/recursive-todo-app.git
cd recursive-todo-app

## Plan for a CI/CD pipeline regarding this project

### 1.Install Dependencies:
Install dependencies using:
`npm install`

-Ensures all packages required to build and run the app are available.

Environment Variables

Create a `.env` file in the project root and add:

APPWRITE_ENDPOINT=your-appwrite-endpoint
APPWRITE_PROJECT_ID=your-project-id

Start the development server:
`npx remix dev`

Open your browser at http://localhost:3000 to see the app.

### 2.Linting & Formatting:
Run eslint or prettier to enforce consistent code style and catch common errors early.
Example: `npm run lint`.

### 3.Unit & Integration Tests:
Execute tests using a framework like Jest or Vitest.
Example: `npm run test` ensures core functionality like adding, deleting, and marking todos works as expected.

### 4.Build:
Compile and bundle the Remix application.
`npm run build`

This step ensures the application is production-ready.

### 5.Deploy:

- Push the repository to GitHub  
- Connect the repository to a CI/CD platform like **GitHub Actions**  
- Automatically build and deploy the app on push to the `main` branch

### Recommended Tools:
GitHub Actions : for seamless integration with GitHub repositories.
Docker : for consistent environment builds across local, staging, and production.
