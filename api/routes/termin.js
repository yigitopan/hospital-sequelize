import express from 'express';
import TerminController from '../controllers/termin';

const app = express();

app.get('/get', TerminController.getAllTermins);
app.post('/add', TerminController.addTermin);
app.post('/remove', TerminController.removeTermin);

export default app;