import express from 'express';
import UserHospitalController from '../controllers/userhospital';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get', Auth.requireAuth(Privileges.GET_USERHOSPITALS), UserHospitalController.getAllUserHospitals);
app.post('/add', Auth.requireAuth(Privileges.ADD_USERHOSPITAL), UserHospitalController.addUserHospital);

export default app;