import express from 'express';
import RolePrivilegeController from '../controllers/roleprivilege';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(14), RolePrivilegeController.getAllRolePrivileges);
app.post('/add', Auth.requireAuth(13), RolePrivilegeController.addRolePrivilege);

export default app;