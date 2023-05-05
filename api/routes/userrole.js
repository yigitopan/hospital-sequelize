import express from 'express';
import UserRoleController from '../controllers/userrole';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get', Auth.requireAuth(Privileges.GET_ALL_USERROLES), UserRoleController.getAllUserRoles);
app.post('/add', Auth.requireAuth(Privileges.ADD_USERROLE), UserRoleController.addUserRole);

export default app;