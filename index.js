const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
import userRoutes from './api/routes/user.js';
import hospitalRoutes from './api/routes/hospital.js';
import roleRoutes from './api/routes/role.js';
import privilegeRoutes from './api/routes/privilege.js';
import terminRoutes from './api/routes/termin.js';
import userRoleRoutes from './api/routes/userrole.js';
import userHospitalRoutes from './api/routes/userhospital.js';

app.use(bodyParser.json());

app.use(cors());

app.use('/user', userRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/role', roleRoutes);
app.use('/privilege', privilegeRoutes);
app.use('/termin', terminRoutes);
app.use('/userrole', userRoleRoutes);
app.use('/userhospital', userHospitalRoutes);

app.listen(process.env.PORT || 3000);