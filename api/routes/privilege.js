import express from 'express';
import PrivilegeController from '../controllers/privilege';
import Auth from '../helpers/auth';

const app = express();

app.get('/get',  Auth.requireAuth(6), PrivilegeController.getAllPrivileges);
app.post('/add',  Auth.requireAuth(7), PrivilegeController.addPrivilege);

export default app;