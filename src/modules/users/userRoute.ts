import express, { Router } from "express";

import { createUser, getUserById, getUsers, updateUser, deleteUser } from "./userController";

export const userRouter: Router = express.Router();

userRouter.get("/api/user", getUsers);
userRouter.post('/api/user', createUser)
userRouter.get('/api/user/:id', getUserById)
userRouter.put('/api/user/:id', updateUser)
userRouter.delete('/api/user/:id', deleteUser)
