import express from 'express';
import UserController from '../controllers/user';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get', Auth.requireAuth(Privileges.GET_ALL_USERS), UserController.getAllUsers);
app.post('/login', UserController.login);
app.post('/add', UserController.addUser);
app.post('/remove', Auth.requireAuth(Privileges.REMOVE_USER), UserController.removeUser);

export default app;