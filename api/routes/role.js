import express from 'express';
import RoleController from '../controllers/role';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get', Auth.requireAuth(Privileges.GET_ALL_ROLES), RoleController.getAllRoles);
app.post('/add', Auth.requireAuth(Privileges.ADD_ROLE), RoleController.addRole);

export default app;