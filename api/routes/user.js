import express from 'express';
import UserController from '../controllers/user';

const app = express();

app.get('/get', UserController.getAllUsers);
app.post('/add', UserController.addUser);
app.post('/remove', UserController.removeUser);

export default app;