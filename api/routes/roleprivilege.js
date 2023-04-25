import express from 'express';
import RolePrivilegeController from '../controllers/roleprivilege';

const app = express();

app.get('/get', RolePrivilegeController.getAllRolePrivileges);
app.post('/add', RolePrivilegeController.addRolePrivilege);

export default app;