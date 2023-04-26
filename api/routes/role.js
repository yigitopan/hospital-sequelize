import express from 'express';
import RoleController from '../controllers/role';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(9), RoleController.getAllRoles);
app.post('/add', Auth.requireAuth(8), RoleController.addRole);

export default app;