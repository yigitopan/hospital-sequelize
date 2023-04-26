import express from 'express';
import UserHospitalController from '../controllers/userhospital';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(17), UserHospitalController.getAllUserHospitals);
app.post('/add', Auth.requireAuth(16), UserHospitalController.addUserHospital);

export default app;