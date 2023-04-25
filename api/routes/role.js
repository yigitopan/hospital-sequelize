import express from 'express';
import RoleController from '../controllers/role';

const app = express();

app.get('/get', RoleController.getAllRoles);
app.post('/add', RoleController.addRole);

export default app;