import RepositoryUserPg from '@/external/db/repository-user-pg'
import RegisterUser from '@/core/user/service/register-user';
import RegisterUserController from './register-user-controller'
import app from './app';
import dotenv from "dotenv"
dotenv.config()

const port = process.env.API_PORT ?? 4000

app.listen(port, () => {
  console.log(`🔥Server running on http://localhost:${port}`);
});

// Public Routes

const repositoryUser = new RepositoryUserPg()
const registerUser = new RegisterUser(repositoryUser)

new RegisterUserController(app, registerUser)

// Protected Routes

