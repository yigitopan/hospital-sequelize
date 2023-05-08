import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';

import userRoutes from './api/routes/user.js';
import hospitalRoutes from './api/routes/hospital.js';
import roleRoutes from './api/routes/role.js';
import privilegeRoutes from './api/routes/privilege.js';
import terminRoutes from './api/routes/termin.js';
import userRoleRoutes from './api/routes/userrole.js';
import userHospitalRoutes from './api/routes/userhospital.js';
import rolePrivilege from './api/routes/roleprivilege.js';

import swaggerOptions from './api/src/config/swagger-options.js';
import swaggerJsdoc  from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const app = express();

require('dotenv').config();

app.use(bodyParser.json());

app.use(cors());

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(session({
	secret: 'gozgozgoztepe',
	resave: false,
	saveUninitialized: false,
	cookie: {maxAge: 1200000}
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
