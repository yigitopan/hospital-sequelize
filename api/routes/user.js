import express from 'express';
import UserController from '../controllers/user';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(2), UserController.getAllUsers);
app.get('/getsession', UserController.getsession);

app.post('/login', UserController.login);
app.post('/add', UserController.addUser);
app.post('/remove', Auth.requireAuth, UserController.removeUser);

export default app;