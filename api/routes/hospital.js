import express from 'express';
import HospitalController from '../controllers/hospital';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(5), HospitalController.getAllHospital);
app.post('/add',  Auth.requireAuth(3), HospitalController.addHospital);
app.post('/remove',  Auth.requireAuth(4), HospitalController.removeHospital);

export default app;