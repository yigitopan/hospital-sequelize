import express from 'express';
import UserRoleController from '../controllers/userrole';

const app = express();

app.get('/get', UserRoleController.getAllUserRoles);
app.post('/add', UserRoleController.addUserRole);

export default app;