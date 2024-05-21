import { Router } from 'express';
import * as UserService from "./user.service.js";

const router = Router();

router.get('/', (req, res) => {
  const users = UserService.getAllUsers();
  res.json(users);
});

router.get('/:userId', (req, res) => {
  const user = UserService.getUserById(req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.post('/', (req, res) => {
  const newUser = UserService.createUser(req.body);
  res.status(201).json(newUser);
});

router.put('/:userId', (req, res) => {
  const updatedUser = UserService.updateUser(req.params.userId, req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).send('User not found');
  }
});

router.delete('/:userId', (req, res) => {
  const deletedUser = UserService.deleteUser(req.params.userId);
  if (deletedUser) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

export default router;
