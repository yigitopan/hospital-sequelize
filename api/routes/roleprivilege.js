import express from 'express';
import RolePrivilegeController from '../controllers/roleprivilege';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get', Auth.requireAuth(Privileges.GET_ROLEPRIVILEGES), RolePrivilegeController.getAllRolePrivileges);
app.post('/add', Auth.requireAuth(Privileges.ADD_ROLEPRIVILEGE), RolePrivilegeController.addRolePrivilege);

export default app;