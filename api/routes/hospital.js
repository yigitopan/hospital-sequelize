import express from 'express';
import HospitalController from '../controllers/hospital';

const app = express();

app.get('/get', HospitalController.getAllHospital);
app.post('/add', HospitalController.addHospital);
app.post('/remove', HospitalController.removeHospital);

export default app;