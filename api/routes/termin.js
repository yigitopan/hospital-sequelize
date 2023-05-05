import express from 'express';
import TerminController from '../controllers/termin';
import Auth from '../helpers/auth';
import Privileges from '../../privileges';

const app = express();

app.get('/get', Auth.requireAuth(Privileges.GET_ALL_TERMINS), TerminController.getAllTermins);
app.post('/add', Auth.requireAuth(Privileges.ADD_TERMIN), TerminController.addTermin);
app.post('/remove', Auth.requireAuth(Privileges.REMOVE_TERMIN), TerminController.removeTermin);

export default app;