import express from 'express';
import PrivilegeController from '../controllers/privilege';

const app = express();

app.get('/get', PrivilegeController.getAllPrivileges);
app.post('/add', PrivilegeController.addPrivilege);

export default app;