import { Request, Response } from 'express';
import User from '../../models/User';
import UserService from './userService';

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const newUser: User = req.body;
  await userService.createUser(newUser);
  res.status(201).json("user created successfully");
};

export const getUsers = (req: Request, res: Response): void => {
  const users = userService.getUsers();
  res.json(users);
};

export const getUserById = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const user = userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const newData: Partial<User> = req.body;
  const updatedUser = userService.updateUser(userId, newData);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const deletedUser = userService.deleteUser(userId);
  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
