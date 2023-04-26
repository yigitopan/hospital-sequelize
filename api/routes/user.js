import express from 'express';
import UserController from '../controllers/user';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(2), UserController.getAllUsers);
app.post('/login', UserController.login);
app.post('/add', UserController.addUser);
app.post('/remove', Auth.requireAuth(1), UserController.removeUser);

export default app;