import RepositoryUserPg from '@/external/db/repository-user-pg'
import RegisterUser from '@/core/user/service/register-user';
import RegisterUserController from './register-user-controller'
import express, { Request, Response } from "express";
import DeleteUser from '@/core/user/service/delete-user';
import DeleteUserController from './delete-user-controller';
import GetUsersController from './get-user-controller';
import GetUsers from '@/core/user/service/get-users';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express + TypeScript!");
});

// Public Routes

const repositoryUser = new RepositoryUserPg()
const registerUser = new RegisterUser(repositoryUser)
const deleteUser = new DeleteUser(repositoryUser)
const getUsers = new GetUsers(repositoryUser)

new RegisterUserController(app, registerUser)
new DeleteUserController(app, deleteUser)
new GetUsersController(app, getUsers)

// Protected Routes


export default app;