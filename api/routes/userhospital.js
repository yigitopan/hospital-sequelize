import express from 'express';
import UserHospitalController from '../controllers/userhospital';

const app = express();

app.get('/get', UserHospitalController.getAllUserHospitals);
app.post('/add', UserHospitalController.addUserHospital);

export default app;