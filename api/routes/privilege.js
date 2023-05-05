import express from 'express';
import PrivilegeController from '../controllers/privilege';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get',  Auth.requireAuth(Privileges.GET_ALL_PRIVILEGES), PrivilegeController.getAllPrivileges);
app.post('/add',  Auth.requireAuth(Privileges.ADD_PRIVILEGE), PrivilegeController.addPrivilege);

export default app;