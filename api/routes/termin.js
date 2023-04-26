import express from 'express';
import TerminController from '../controllers/termin';
import Auth from '../helpers/auth';

const app = express();

app.get('/get', Auth.requireAuth(10), TerminController.getAllTermins);
app.post('/add', Auth.requireAuth(11), TerminController.addTermin);
app.post('/remove', Auth.requireAuth(12), TerminController.removeTermin);

export default app;