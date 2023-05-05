import express from 'express';
import HospitalController from '../controllers/hospital';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get', Auth.requireAuth(Privileges.GET_ALL_HOSPITALS), HospitalController.getAllHospital);
app.post('/add',  Auth.requireAuth(Privileges.ADD_HOSPITAL), HospitalController.addHospital);
app.post('/remove',  Auth.requireAuth(Privileges.REMOVE_HOSPITAL), HospitalController.removeHospital);

export default app;