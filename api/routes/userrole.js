import express from 'express';
import UserRoleController from '../controllers/userrole';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(21), UserRoleController.getAllUserRoles);
app.post('/add', Auth.requireAuth(19), UserRoleController.addUserRole);

export default app;