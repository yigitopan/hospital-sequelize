const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');
const app = express();
import userRoutes from './api/routes/user.js';
import hospitalRoutes from './api/routes/hospital.js';
import roleRoutes from './api/routes/role.js';
import privilegeRoutes from './api/routes/privilege.js';
import terminRoutes from './api/routes/termin.js';
import userRoleRoutes from './api/routes/userrole.js';
import userHospitalRoutes from './api/routes/userhospital.js';
import rolePrivilege from './api/routes/roleprivilege.js';
import session from 'express-session';
require('dotenv').config();

app.use(bodyParser.json());

app.use(cors());

app.use(session({
	secret: 'gozgozgoztepe',
	resave: false,
	saveUninitialized: false
}));

app.use('/user', userRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/role', roleRoutes);
app.use('/privilege', privilegeRoutes);
app.use('/termin', terminRoutes);
app.use('/userrole', userRoleRoutes);
app.use('/userhospital', userHospitalRoutes);
app.use('/roleprivilege', rolePrivilege);

app.listen(process.env.PORT || 3000);

module.exports = app;
